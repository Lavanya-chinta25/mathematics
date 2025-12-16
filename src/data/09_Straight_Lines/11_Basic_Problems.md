
# Section 3.2: Applying the Locus Definition
**Deriving Equations from Physical Constraints**


In the previous section, we established that a straight line is not merely a formula; it is a **locus**—a path formed by a moving point that follows a single, unchanging rule. The equation of the line is simply the algebraic translation of that rule.


Below, we apply this logic to the four most common scenarios. Notice that we do not memorize four different formulas. We apply the same logic every time: **Identify the Constraint $\rightarrow$ Write the Locus.**


---


### **Case 1: The Constraint of "Fixed Coordinate"**
**Problem:** Find the equations of the lines parallel to the coordinate axes and passing through $(-2,3)$.


**The Intuition:**
"Parallel to an axis" means the motion is restricted. One coordinate is **locked** (constrained), while the other is **free** to change.


**(a) Parallel to the x-axis**
* **Step 1: Identify the Constraint.**
   Moving parallel to the x-axis means there is no change in height (vertical distance). The rule is: *"y must remain constant."*
* **Step 2: Apply the Position.**
   The specific point given has a height of $y = 3$.
* **Step 3: Write the Locus.**
   Since $y$ is locked at 3 and $x$ is free to be anything, the collection of all valid points is $(x, 3)$. The equation is:
   $$\boxed{y = 3}$$
   *(Note: $x$ does not appear in the equation because $x$ is free.)*


**(b) Parallel to the y-axis**
* **Step 1: Identify the Constraint.**
   Moving parallel to the y-axis means there is no left-right movement. The rule is: *"x must remain constant."*
* **Step 2: Apply the Position.**
   The specific point given has a position of $x = -2$.
* **Step 3: Write the Locus.**
   Since $x$ is locked at -2 and $y$ is free, the equation is:
   $$\boxed{x = -2}$$
   *(Note: $y$ does not appear in the equation because $y$ is free.)*


---


### **Case 2: The Constraint of "Fixed Direction" (Slope)**
**Problem:** Find the equation of the line through $(-2,3)$ with slope $-4$.


**The Intuition:**
Slope is not an angle; it is a **directional ratio**. A slope of $-4$ is a strict rule that says: "For every step, the ratio of vertical change to horizontal change must be $-4$."


* **Step 1: Identify the Directional Rule.**
   The constraint is:
   $$\frac{\Delta y}{\Delta x} = -4$$
   *Note: This rule defines a family of parallel lines (direction only), not a specific line.*


* **Step 2: Anchor the Line.**
   We use the point $(-2,3)$ to select the specific line we want from that family.


* **Step 3: Impose the Locus Condition.**
   We force every generic point $(x,y)$ on the line to obey this ratio relative to the fixed point $(-2,3)$:
   $$\frac{y - 3}{x - (-2)} = -4$$
   Rearranging this algebraic statement:
   $$y - 3 = -4(x + 2)$$
   $$\boxed{y = -4x - 5}$$


---


### **Case 3: The Constraint of "Observed Change" (Two Points)**
**Problem:** Write the equation of the line passing through $(1,-1)$ and $(3,5)$.


**The Intuition:**
We are given two positions. One point gives us a location; two points allow us to **observe change**. Only after observing the change can we define the rule (slope).


* **Step 1: Observe the Movement.**
   From $(1,-1)$ to $(3,5)$, how does the point move?
   $$\Delta x = 3 - 1 = 2$$
   $$\Delta y = 5 - (-1) = 6$$


* **Step 2: Define the Directional Rule.**
   The ratio of change is:
   $$\frac{\Delta y}{\Delta x} = \frac{6}{2} = 3$$
   This establishes the rule: *"For every unit increase in x, y must increase by 3."*


* **Step 3: Write the Locus Condition.**
   Now we enforce this rule for any generic point $(x,y)$ relative to one of our known points, say $(1,-1)$.
   $$\frac{y - (-1)}{x - 1} = 3$$
   $$y + 1 = 3(x - 1)$$
   $$\boxed{y = 3x - 4}$$


---


### **Case 4: Translating "Intercepts" into Coordinates**
**Problem:** Write the equation of the line for which $\tan\theta = \frac{1}{2}$. Find the equation if (a) the y-intercept is -3, or (b) the x-intercept is 4.


**The Intuition:**
"Intercepts" and "Angles" are just coded language for Points and Ratios. We must translate them back to our primary mental model.


* **Step 1: Translate Angle to Direction.**
   $\tan\theta$ is simply the slope $m$.
   $$\text{Directional Rule: } \frac{\Delta y}{\Delta x} = \frac{1}{2}$$


**(a) Given y-intercept = -3**
* **Step 2: Translate Intercept to Position.**
   A y-intercept of -3 means the line is anchored at the point $(0, -3)$.
* **Step 3: Impose the Locus Condition.**
   $$\frac{y - (-3)}{x - 0} = \frac{1}{2}$$
   $$\boxed{y = \frac{1}{2}x - 3}$$


**(b) Given x-intercept = 4**
* **Step 2: Translate Intercept to Position.**
   An x-intercept of 4 means the line is anchored at the point $(4, 0)$.
* **Step 3: Impose the Locus Condition.**
   $$\frac{y - 0}{x - 4} = \frac{1}{2}$$
   $$2y = x - 4$$
   $$\boxed{y = \frac{1}{2}x - 2}$$


---


### **Summary: The "Locus" Mental Model**

A mental model is how you picture or understand something in your mind

Not memorizing steps, but understanding why it works

Notice that in all four examples, we did not switch "modes." We simply filled in the blanks of this single logical sentence:


> **"The equation is the statement that any point $(x,y)$ must maintain a specific relationship [Slope/Constraint] relative to a fixed location [Point]."**


| Scenario | The Logic (Constraint) | The Algebra |
| :--- | :--- | :--- |
| **Parallel to Axes** | One coordinate is locked; the other is free. | $x = k$ or $y = k$ |
| **Slope + Point** | Maintain a fixed output/input ratio from a specific point. | $\frac{y-y_1}{x-x_1} = m$ |
| **Two Points** | Measure the change first, then maintain that ratio. | Calculate $m$, then $\frac{y-y_1}{x-x_1} = m$ |
| **Intercepts** | Translate "intercept" to a point $(0,y)$ or $(x,0)$. | Treat as Slope + Point. |


