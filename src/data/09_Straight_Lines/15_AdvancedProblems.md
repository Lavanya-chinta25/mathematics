

# Section 3.6: Advanced Applications



In the previous sections, we learned that a line is defined by **Inclination** (Slope) and **Position** (Point). In these advanced problems, the inclination or position might not be given to you on a silver platter. You might have to hunt for them using geometric clues like "midpoints," "perpendicularity," or "intercept sums."


However, the core logic remains identical:
1. **Find the Constraint** (Slope/Direction).
2. **Find the Anchor** (Position).
3. **Write the Membership Rule** (Equation).


---


### **Problem 1: Proving Geometry without Geometry Tools**
**Question:** Without using the distance formula (Pythagoras), show that the points $A(4,4)$, $B(3,5)$, and $C(-1,-1)$ are the vertices of a right-angled triangle.




Usually, we rush to find lengths of sides ($AB$, $BC$, $CA$) and check if $a^2 + b^2 = c^2$. That works, but it is slow.
"Right Angle" is a relationship of **direction**, not distance. In coordinate geometry, the cleanest test for direction is **Slope**.
* **The Rule:** Two lines are perpendicular if their slopes are negative reciprocals ($m_1 \cdot m_2 = -1$).


* **Step 1: Compute Slope of Side AB**
   $$m_{AB} = \frac{y_2 - y_1}{x_2 - x_1} = \frac{5 - 4}{3 - 4} = \frac{1}{-1} = -1$$
   *Note: This means for every step right, the line drops one step.*


* **Step 2: Compute Slope of Side AC**
   $$m_{AC} = \frac{-1 - 4}{-1 - 4} = \frac{-5}{-5} = 1$$
   *Note: This means for every step right, the line rises one step.*


* **Step 3: Apply the Perpendicularity Test**
   Multiply the slopes:
   $$m_{AB} \cdot m_{AC} = (-1) \cdot (1) = -1$$
   Since the product is $-1$, the lines $AB$ and $AC$ meet at $90^\circ$.


**Conclusion:**
$$\boxed{\triangle ABC \text{ is right-angled at vertex } A(4,4).}$$


---


### **Problem 2: The Reference Axis Trap**
**Question:**
(a) Find the slope of the line which makes an angle $30^\circ$ with the positive **y-axis**.
(b) If a line makes an angle $\theta$ with the x-axis, find the relation between its slope and the slope found in part (a).






**The Thinking:**
Slope is strictly defined based on the angle with the **positive x-axis**. Whenever a problem mentions the y-axis, it is a trap. You must translate the information back to the x-axis frame of reference.


**(a) Finding the Slope**
* **Step 1: Convert Angle to Standard Form**
   If the line makes $30^\circ$ with the vertical (y-axis), it makes $(90^\circ - 30^\circ)$ with the horizontal (x-axis).
   $$\text{Angle } \phi = 60^\circ$$


* **Step 2: Calculate Slope**
   $$m = \tan(60^\circ)$$
   $$\boxed{m = \sqrt{3}}$$


**(b) Relation Between Two Slopes**
* Let the slope of the line relative to the x-axis be $m_1 = \tan\theta$.
* Let the slope calculated relative to the y-axis (complementary angle) be $m_2$.
   $$m_2 = \tan(90^\circ - \theta)$$
   From trigonometry, we know $\tan(90^\circ - \theta) = \cot\theta = \frac{1}{\tan\theta}$.
   $$m_2 = \frac{1}{m_1}$$
   $$\boxed{m_1 m_2 = 1}$$


*Note: This reinforces that changing your reference axis flips the ratio (reciprocal).*


---


### **Problem 3: The "Midpoint" Constraint**
**Question:** If the portion of the straight line intercepted between the coordinate axes is bisected at the point $(p, 2q)$, find the equation of the line.






**The Thinking:**
"Intercepted between axes" is code for "The line cuts the x-axis and the y-axis."
This immediately gives us two points to work with, even if we don't know their values yet.
* X-intercept point: $A(a, 0)$
* Y-intercept point: $B(0, b)$
The problem tells us the **Midpoint** of $AB$ is fixed at $(p, 2q)$. This "Position" information forces the line to be unique.


* **Step 1: Relate Intercepts to the Midpoint**
   Midpoint of $A(a,0)$ and $B(0,b)$ is:
   $$M = \left( \frac{a+0}{2}, \frac{0+b}{2} \right) = \left( \frac{a}{2}, \frac{b}{2} \right)$$
   We are given that this midpoint is $(p, 2q)$.
   $$\frac{a}{2} = p \implies a = 2p$$
   $$\frac{b}{2} = 2q \implies b = 4q$$


* **Step 2: Write the Intercept Form Equation**
   Now we know the intercepts $a$ and $b$ in terms of $p$ and $q$.
   $$\frac{x}{a} + \frac{y}{b} = 1$$
   Substitute $a=2p$ and $b=4q$:
   $$\frac{x}{2p} + \frac{y}{4q} = 1$$


* **Step 3: Simplify**
   Multiply the entire equation by $4pq$ to clear fractions:
   $$\boxed{2qx + py = 4pq}$$


---


### **Problem 4: Linking Algebra to Geometry (Distance)**
**Question:** The intercepts of a line on the axes are $a$ and $b$. If $p$ is the length of the perpendicular from the origin to the line, express $p$ in terms of $a$ and $b$.






**The Thinking:**
This problem connects two different ways of looking at a line:
1. **Intercept Form:** Easy for drawing ($\frac{x}{a} + \frac{y}{b} = 1$).
2. **General Form:** Required for measuring perpendicular distances ($Ax + By + C = 0$).
We need to switch from form 1 to form 2 to solve this.


* **Step 1: Convert to General Form**
   $$\frac{x}{a} + \frac{y}{b} = 1$$
   Multiply by $ab$:
   $$bx + ay = ab$$
   $$bx + ay - ab = 0$$
   Here, $A = b$, $B = a$, and $C = -ab$.


* **Step 2: Use the Distance Formula**
   The distance from Origin $(0,0)$ is given as $p$.
   $$p = \frac{|A(0) + B(0) + C|}{\sqrt{A^2 + B^2}}$$
   $$p = \frac{|-ab|}{\sqrt{b^2 + a^2}}$$
   $$\boxed{p = \frac{ab}{\sqrt{a^2 + b^2}}}$$


* **Step 3: Optional Simplification (Squared form)**
   Often, textbooks write this as:
   $$\frac{1}{p^2} = \frac{a^2 + b^2}{a^2 b^2} = \frac{1}{b^2} + \frac{1}{a^2}$$
   *Note: Both answers are correct. The squared version is just algebraically prettier.*


---


### **Problem 5: Two Constraints, Two Lines**
**Question:** Find the equation of the line passing through $(1,2)$ and cutting off intercepts on the axes whose sum is 9.


**The Thinking:**
Here we have two pieces of information:
1. **Membership Rule:** The line must pass through $(1,2)$.
2. **Geometric Constraint:** $x\text{-intercept} + y\text{-intercept} = 9$.


Because we have a constraint involving a sum, we might get a quadratic equation. This means there might be **two** valid lines that satisfy this condition. That is physically possible!


* **Step 1: Set up the Intercept Form**
   Let x-intercept $= a$ and y-intercept $= b$.
   Equation: $\frac{x}{a} + \frac{y}{b} = 1$


* **Step 2: Apply the Constraints**
   Constraint 1 (Sum): $a + b = 9 \implies b = 9 - a$.
   Constraint 2 (Membership): The point $(1,2)$ is on the line.
   $$\frac{1}{a} + \frac{2}{b} = 1$$


* **Step 3: Substitute and Solve**
   Replace $b$ with $9-a$:
   $$\frac{1}{a} + \frac{2}{9-a} = 1$$
   Multiply by $a(9-a)$:
   $$(9-a) + 2a = a(9-a)$$
   $$9 + a = 9a - a^2$$
   $$a^2 - 8a + 9 = 0$$


* **Step 4: Find Intercepts**
   Using the quadratic formula for $a$:
   $$a = \frac{8 \pm \sqrt{64 - 36}}{2} = \frac{8 \pm \sqrt{28}}{2} = 4 \pm \sqrt{7}$$
   This gives two cases:
   **Case 1:** $a = 4+\sqrt{7}$, which means $b = 9 - (4+\sqrt{7}) = 5-\sqrt{7}$.
   **Case 2:** $a = 4-\sqrt{7}$, which means $b = 9 - (4-\sqrt{7}) = 5+\sqrt{7}$.


* **Step 5: Write Final Equations**
   We have two valid solutions:
   $$\boxed{\frac{x}{4+\sqrt{7}} + \frac{y}{5-\sqrt{7}} = 1}$$
   **OR**
   $$\boxed{\frac{x}{4-\sqrt{7}} + \frac{y}{5+\sqrt{7}} = 1}$$


**Key Takeaway:**
"Notice that in Problem 5, the math gave us two answers. Don't be afraid of that. Geometrically, it means there are two different ways to tilt a line through $(1,2)$ such that the intercepts add up to 9."


