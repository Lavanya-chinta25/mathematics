
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve('src/data');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            // Simulate what import.meta.glob returns: /src/data/...
            // We need to construct the key as if it was returned by glob
            // The glob pattern in App.jsx is '/src/data/**/*.md'
            // So we expect keys to start with /src/data/
            const fullPath = path.join(dirPath, file);
            // convert backslashes to slashes for consistency
            const normalizedPath = fullPath.replace(/\\/g, '/');
            // We want the part starting from /src/data
            const projectRootIndex = normalizedPath.indexOf('/src/data');
            if (projectRootIndex !== -1) {
                arrayOfFiles.push(normalizedPath.substring(projectRootIndex));
            } else {
                // Fallback if running from weird location, just try to make it look right
                const srcIndex = normalizedPath.indexOf('/src/');
                if (srcIndex !== -1) {
                    arrayOfFiles.push(normalizedPath.substring(srcIndex));
                } else {
                    // manual construction
                    // assume script is run from project root
                    const relative = path.relative(process.cwd(), fullPath).replace(/\\/g, '/');
                    arrayOfFiles.push('/' + relative);
                }
            }
        }
    });

    return arrayOfFiles.filter(f => f.endsWith('.md'));
}

const mdModules = {};
try {
    const files = getAllFiles(rootDir);
    files.forEach(f => {
        mdModules[f] = "CONTENT_PLACEHOLDER";
    });
    console.log("Simulated mdModules keys:", Object.keys(mdModules));
} catch (e) {
    console.error("Error reading directory:", e);
}


// COPY OF LOGIC FROM Appearance.jsx
function buildNestedTree(modules) {
    const root = { name: 'root', path: '', folders: {}, files: [] }

    for (const fullPath in modules) {
        // fullPath like '/src/data/UNIT-1_Introduction/02_Design_Learning_System/025_The_final_design.md'
        const rel = fullPath.replace(/^\/src\/data\//, '')
        const parts = rel.split('/')
        const filename = parts.pop()
        const content = modules[fullPath]
        const fileObj = {
            id: fullPath,
            label: filename.replace(/_/g, ' ').replace(/\.md$/i, ''),
            file: filename,
            content,
        }

        // walk/create folders
        let node = root
        let curPath = ''
        for (const p of parts) {
            curPath = curPath ? `${curPath}/${p}` : p
            if (!node.folders[p]) {
                node.folders[p] = { name: p, path: curPath, folders: {}, files: [] }
            }
            node = node.folders[p]
        }
        node.files.push(fileObj)
    }

    // convert children maps to arrays for rendering
    function normalize(node) {
        const folders = Object.keys(node.folders)
            .sort()
            .map((k) => normalize(node.folders[k]))
        return { name: node.name, path: node.path, folders, files: node.files.sort((a, b) => a.file.localeCompare(b.file)) }
    }

    const tree = root.folders ? Object.keys(root.folders).sort().map((k) => normalize(root.folders[k])) : []
    return tree
}

const tree = buildNestedTree(mdModules);
console.log(JSON.stringify(tree, null, 2));
