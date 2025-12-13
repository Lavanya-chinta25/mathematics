# 14.2 Axiomatic Approach to Probability – Concept Refresh

In the earlier part of the chapter, we have:
1. Fixed a random experiment
2. Written its sample space ($S$)
3. Understood events as subsets of $S$
4. Used the algebra of sets (union, intersection, complement, etc.) to relate events

Now comes the key philosophical step:

**Probability is a rule that assigns a number to each event, telling us how likely it is that this event occurs.**

At first glance, it may seem that probabilities can be assigned arbitrarily. In fact, they *can* be assigned freely, but only if certain basic rules are satisfied. These rules are called the **Axioms of Probability**.

They formalize obvious common-sense ideas:
- Probabilities are never negative
- The probability of a certain event is 1
- If two events cannot happen together, the probability that at least one happens is the sum of their probabilities

Once these axioms are accepted, the algebra of sets automatically becomes the algebra of probability, and all standard probability formulas follow naturally.

---

## 14.2.1 Finite Sample Space, Elementary Events, and Probability of an Event

We restrict ourselves to a **finite sample space**:
$$
S = \{\omega_1, \omega_2, \dots, \omega_n\}
$$

Each $\omega_i$ represents a single outcome (sample point).  
The set $\{\omega_i\}$ is called an **elementary event** or **simple event**.

For convenience, we write:
$$
P(\omega_i) \quad \text{instead of} \quad P(\{\omega_i\})
$$

So $P(\omega_i)$ means the probability of the elementary event $\{\omega_i\}$.

---

### Axiomatic Conditions on Elementary Events

The axioms impose strict conditions on elementary probabilities.

#### 1. Non-negativity
For any event $E$:
$$
P(E) \ge 0
$$

In particular, for each elementary event:
$$
0 \le P(\omega_i) \le 1
$$

#### 2. Total Probability is 1

The sample space is certain to occur, so:
$$
P(S) = 1
$$

Since:
$$
S = \{\omega_1\} \cup \{\omega_2\} \cup \dots \cup \{\omega_n\}
$$

and all elementary events are mutually exclusive, we get:
$$
P(S) = P(\omega_1) + P(\omega_2) + \dots + P(\omega_n) = 1
$$

Hence, elementary probabilities must satisfy:
$$
\boxed{
0 \le P(\omega_i) \le 1 \quad \text{and} \quad \sum_{i=1}^{n} P(\omega_i) = 1
}
$$

Interpretation: we distribute a total probability mass of 1 among the outcomes $\omega_1, \dots, \omega_n$.

---

### Probability of a General Event

Let $A \subseteq S$ be any event. Since $S$ is finite:
$$
A = \{\omega_{i_1}, \omega_{i_2}, \dots, \omega_{i_k}\}
$$

Using additivity for disjoint events:
$$
P(A) = P(\omega_{i_1}) + P(\omega_{i_2}) + \dots + P(\omega_{i_k})
$$

Compactly:
$$
\boxed{
P(A) = \sum_{\omega_i \in A} P(\omega_i)
}
$$

This is the **core formula** for finite sample spaces.

If elementary events satisfy the axioms, probabilities of all other events are automatically valid.

---

## 14.2.2 Equally Likely Outcomes

Assume:
1. $S = \{\omega_1, \dots, \omega_n\}$ is finite
2. All outcomes are equally likely:
$$
P(\omega_1) = P(\omega_2) = \dots = P(\omega_n) = p
$$

Since:
$$
\sum_{i=1}^{n} P(\omega_i) = 1
$$

we get:
$$
np = 1 \Rightarrow p = \frac{1}{n}
$$

Thus, each elementary event has probability $\frac{1}{n}$.

Now let $E \subseteq S$ and let $n(E) = m$ be the number of outcomes in $E$.
Then:
$$
P(E) = \sum_{\omega_i \in E} \frac{1}{n} = \frac{m}{n}
$$

So:
$$
\boxed{
P(E) = \frac{n(E)}{n(S)}
}
$$

This formula is valid **only when outcomes are equally likely**.  
The axiomatic approach is more general and works even when probabilities differ.

---

## 14.2.3 Probability of the Event “$A$ or $B$” ($A \cup B$)

Let $A$ and $B$ be any two events.

- $A \cup B$: $A$ occurs or $B$ occurs or both occur
- $A \cap B$: both $A$ and $B$ occur

If we add $P(A) + P(B)$:
- Outcomes in $A$ are counted once
- Outcomes in $B$ are counted once
- Outcomes in $A \cap B$ are counted twice

So we subtract the overlap once:
$$
\boxed{
P(A \cup B) = P(A) + P(B) - P(A \cap B)
}
$$

This is the **General Addition Rule**.

**Special Case:**  
If $A$ and $B$ are mutually exclusive:
$$
A \cap B = \varnothing \Rightarrow P(A \cup B) = P(A) + P(B)
$$

---

## 14.2.4 Probability of the Event “Not $A$” ($A'$)

For any event $A$:
- $A'$ represents “not $A$”
- $A$ and $A'$ are disjoint
- $A \cup A' = S$

Using axioms:
$$
P(A) + P(A') = P(S) = 1
$$

Hence:
$$
\boxed{
P(A') = 1 - P(A)
}
$$

This rule is extremely useful in solving problems involving “at least one” or “none”.

---

## Overall Concept Map

1. **Experiment → Sample Space → Events**  
   Probability is defined on events, not vague statements.

2. **Axioms**
   - $P(E) \ge 0$
   - $P(S) = 1$
   - For disjoint events: $P(E \cup F) = P(E) + P(F)$

3. **Finite Sample Space**
   - Elementary events $\omega_i$ with $\sum P(\omega_i) = 1$
   - General event: $P(A) = \sum_{\omega \in A} P(\omega)$
   - Equally likely case: $P(E) = \frac{n(E)}{n(S)}$

4. **Algebra of Events → Probability Rules**
   - Addition Rule: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
   - Complement Rule: $P(A') = 1 - P(A)$
   - Mutually exclusive events: probabilities add directly
   - Exhaustive events: probabilities sum to 1
