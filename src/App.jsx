import React, { useState } from 'react'
import './App.css'

// Use react-markdown + rehype-prism-plus for PrismJS highlighting
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
// Import a Prism theme — adjust if you prefer a different one
import 'prismjs/themes/prism-tomorrow.css'

// Load markdown files from `src/data` using Vite's glob import (raw content)
// Use the recommended `query: '?raw'` + `import: 'default'` to get file text.
const mdModules = import.meta.glob('/src/data/**/*.md', { query: '?raw', import: 'default', eager: true })

// Build a nested tree from file paths under /src/data
function buildNestedTree() {
  const root = { name: 'root', path: '', folders: {}, files: [] }

  for (const fullPath in mdModules) {
    // fullPath like '/src/data/UNIT-1_Introduction/02_Design_Learning_System/025_The_final_design.md'
    const rel = fullPath.replace(/^\/src\/data\//, '')
    const parts = rel.split('/')
    const filename = parts.pop()
    const content = mdModules[fullPath]
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

const demoData = buildNestedTree()

function findFirstFile(tree) {
  // returns { file, parents } where parents is array of folder names from top -> leaf
  function walk(nodes, parents) {
    for (const node of nodes) {
      // if node has files, return first
      if (node.files && node.files.length > 0) {
        return { file: node.files[0], parents: parents.concat([node.name]) }
      }
      // otherwise, recurse into folders
      if (node.folders && node.folders.length > 0) {
        const res = walk(node.folders, parents.concat([node.name]))
        if (res) return res
      }
    }
    return null
  }

  return walk(tree, [])
}

function Sidebar({ data, onSelect, activeId, initialOpenMap }) {
  // openMap keeps track of which child is open per parent path
  const [openMap, setOpenMap] = useState(initialOpenMap || { root: data && data.length ? data[0].path || data[0].name : null })

  function toggleOpen(parentPath, name) {
    setOpenMap((prev) => ({ ...prev, [parentPath || 'root']: prev[parentPath || 'root'] === name ? null : name }))
  }

  function FolderNode({ node, parentPath }) {
    const key = node.path || node.name
    const isOpen = openMap[parentPath || 'root'] === node.name

    return (
      <div className="folder-node" key={key}>
        <div
          className={`summary-row ${isOpen ? 'open' : ''}`}
          onClick={() => toggleOpen(parentPath, node.name)}
        >
          <span className="group-title">{node.name.replace(/_/g, ' ')}</span>
          <span className={`chev ${isOpen ? 'open' : ''}`}>▾</span>
        </div>

        {isOpen && (
          <div className="group-items">
            {/* files at this level */}
            {node.files && node.files.length > 0 ? (
              node.files.map((f) => (
                <button key={f.id} className={`nav-item ${activeId === f.id ? 'active' : ''}`} onClick={() => onSelect(f)}>
                  {f.label}
                </button>
              ))
            ) : (
              <div className="empty">(no files)</div>
            )}

            {/* nested folders */}
            {node.folders && node.folders.length > 0 && (
              <div className="nested-folders">
                {node.folders.map((child) => (
                  <FolderNode key={child.path || child.name} node={child} parentPath={node.path || node.name} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">Document Navigator</div>
      <div className="nav-list">
        {data && data.length > 0 ? (
          data.map((rootNode) => <FolderNode key={rootNode.path || rootNode.name} node={rootNode} parentPath={null} />)
        ) : (
          <div className="empty">(no documents)</div>
        )}
      </div>
    </aside>
  )
}

function Viewer({ file }) {
  if (!file) {
    return <div className="viewer empty-view">Select a document to view</div>
  }

  return (
    <div className="viewer">
      <div className="viewer-header">Document Viewer</div>
      <div className="viewer-file">
        <div className="file-content markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypePrism]}> 
            {file.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const firstEntry = findFirstFile(demoData)
  const [active, setActive] = useState(firstEntry ? firstEntry.file : null)

  // Build initial open map so folders containing the active file are expanded
  const initialOpenMap = {}
  if (firstEntry && firstEntry.parents && firstEntry.parents.length > 0) {
    // parents is an array like [topFolder, subFolder, ...]
    // open the top folder under 'root'
    initialOpenMap['root'] = firstEntry.parents[0]
    for (let i = 0; i < firstEntry.parents.length - 1; i++) {
      const parent = firstEntry.parents[i]
      const child = firstEntry.parents[i + 1]
      initialOpenMap[parent] = child
    }
  }

  return (
    <div className="app-root">
      <Sidebar data={demoData} onSelect={setActive} activeId={active && active.id} initialOpenMap={initialOpenMap} />
      <Viewer file={active} />
    </div>
  )
}
