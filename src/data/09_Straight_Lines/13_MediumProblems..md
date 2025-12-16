
# Section 3.3: Intermediate Problems
**Applying the "Membership Rule"**


In the previous section, we defined the equation of a line not as a formula, but as a **Locus**—a path formed by a point moving under a strict rule. Now, we will apply this logic to five intermediate problems.


In every single case, we are looking for two things to make a line unique:
1. **Inclination** (The Slope/Ratio)
2. **Position** (A fixed point to anchor the line)


---


### **Problem 1: The Anchor at the Origin**
**Question:** Find the equation of the line passing through the origin with slope $m$.


**The Intuition:**
We already established one big truth: **Slope alone does not give you one unique line.** It gives you a "family" of parallel lines that all have the same tilt. To pick exactly *one* line from that family, we need to know where it lives. Here, we are told it passes through the origin. That locks it down.


* **Step 1: Write what is given**
   * **Point:** $(0,0)$ (The Origin)
   * **Slope:** $m$


* **Step 2: Use the Locus/Membership Idea**
   Slope $m$ fixes the inclination. It doesn't matter if you walk up or down the line; the steepness stays $m$.
   Let $(x,y)$ be *any* point in the plane. This point is a "member" of our line if and only if the rise/run ratio from $(0,0)$ to $(x,y)$ equals $m$:
   $$\frac{y - 0}{x - 0} = m$$
   *Note: We are not listing points. We are creating a test: "Do you belong to this line or not?"*


* **Step 3: Simplify**
   $$\boxed{y = mx}$$


**Quick Membership Check:**
* Test Point $(2, 2m)$: Does $2m = m(2)$? Yes. **✓** It belongs.
* Test Point $(2, 2m+1)$: Does $2m+1 = m(2)$? No. **✕** It is rejected.
* *Conclusion: The equation $y=mx$ is a filter. It allows only the points on this specific line to pass.*


---


### **Problem 2: Moving the Anchor**
**Question:** Find the equation of the line passing through $(-4,3)$ with slope $\frac{1}{2}$.


**The Intuition:**
This is the exact same logic as Problem 1. The slope ($\frac{1}{2}$) gives us the inclination, and the point $(-4,3)$ anchors the line to a specific location.


* **Step 1: Write what is given**
   * **Point:** $(-4,3)$
   * **Slope:** $m = \frac{1}{2}$


* **Step 2: Apply the "Constant Inclination" Rule**
   Let $(x,y)$ be any generic point on the line. The rise/run from our fixed anchor $(-4,3)$ to this moving point $(x,y)$ must always equal $\frac{1}{2}$:
   $$\frac{y - 3}{x - (-4)} = \frac{1}{2}$$
   $$\frac{y - 3}{x + 4} = \frac{1}{2}$$
   *Note: This is the straight-line "consistency rule"—no bending means the ratio never changes.*


* **Step 3: Solve the Equation**
   $$2(y - 3) = 1(x + 4)$$
   $$2y - 6 = x + 4$$
   $$2y = x + 10$$
   $$\boxed{y = \frac{1}{2}x + 5}$$


---


### **Problem 3: When Inclination is an Angle**
**Question:** Find the equation of the line passing through $(2, 2\sqrt{3})$ and inclined at $75^\circ$.






**THe Intuition:**
Here, the inclination is given as an angle ($75^\circ$). But remember what we proved earlier: **Slope is fundamentally a ratio, not an angle.** The angle is just a convenient way to talk about that ratio. We must translate the "Angle Language" into "Ratio Language" before we can write the equation.


* **Step 1: Convert Inclination to Slope**
   We use trigonometry as a tool to find the ratio:
   $$m = \tan(75^\circ)$$
   Using the known trigonometric value:
   $$\tan(75^\circ) = 2 + \sqrt{3}$$
   So, our ratio is: $m = 2 + \sqrt{3}$.


* **Step 2: Use Point + Slope**
   Now we are back to familiar territory. We have a point $(2, 2\sqrt{3})$ and a slope $(2+\sqrt{3})$.
   Let $(x,y)$ be any point on the line. The Locus Rule applies:
   $$\frac{y - 2\sqrt{3}}{x - 2} = 2 + \sqrt{3}$$


* **Step 3: Write the Final Equation**
   $$\boxed{y - 2\sqrt{3} = (2 + \sqrt{3})(x - 2)}$$
   *Note: This equation is the membership rule. It accepts exactly those points whose change maintains the $75^\circ$ inclination.*


---


### **Problem 4: When the Anchor is an Intercept**
**Question:** Find the equation of the line intersecting the x-axis at 3 units left of the origin and having slope $-2$.






[Image of x-intercept on graph]




**The Intuition:**
Don't let the vocabulary trick you. This is again just "Inclination + Position." The problem gives you the inclination (slope $-2$) directly. The "intercept" is just a coded way of giving you the anchor point.


* **Step 1: Convert Words into a Point**
   "3 units left of origin on the x-axis" translates to the coordinate:
   $$(-3, 0)$$
   Slope $m = -2$.


* **Step 2: Apply the Locus Condition**
   Let $(x,y)$ be any point on the line. The ratio of change from $(-3,0)$ to $(x,y)$ is fixed at $-2$:
   $$\frac{y - 0}{x - (-3)} = -2$$
   $$\frac{y}{x + 3} = -2$$


* **Step 3: Simplify**
   $$y = -2(x + 3)$$
   $$\boxed{y = -2x - 6}$$


---


### **Problem 5: When Slope is Hidden (Two Points)**
**Question:** Find the equation of the line passing through $(-1,1)$ and $(1,-4)$.


**The Intuition:**
Here, the slope is not given directly. We must **infer** the inclination from the two points.
Remember: Two points determine exactly one straight line because they fix both the *position* and the required *change ratio*.


* **Step 1: Find the Slope from the Two Points**
   First, we observe the change:
   $$m = \frac{y_2 - y_1}{x_2 - x_1}$$
   $$m = \frac{-4 - 1}{1 - (-1)} = \frac{-5}{2}$$
   *Note: This ratio $-\frac{5}{2}$ is our fixed inclination. Whether you move forward or backward along the line, this ratio stays the same.*


* **Step 2: Use One Point to Write the Locus Equation**
   We can pick either point to start. Let's use $(-1,1)$.
   The condition for any point $(x,y)$ is:
   $$\frac{y - 1}{x - (-1)} = -\frac{5}{2}$$
   $$\frac{y - 1}{x + 1} = -\frac{5}{2}$$


* **Step 3: Simplify**
   $$2(y - 1) = -5(x + 1)$$
   $$2y - 2 = -5x - 5$$
   $$2y = -5x - 3$$
   $$\boxed{y = -\frac{5}{2}x - \frac{3}{2}}$$


**Membership Reminder:**
If you plug *any* point into this box:
* If it satisfies the equation $\rightarrow$ It belongs to this line.
* If it does not $\rightarrow$ It belongs somewhere else.


---


### **Summary**
**"A straight line equation is not a drawing recipe. It is a membership rule for points.**
**We make one unique line only when we have enough information: Inclination + Position."**


