# 14.1 Random Experiments, Sample Space, Events, and Algebra of Events

## 1. Introduction: Why do we need probability at all?

Real life is full of uncertainty. Consider these everyday questions:
- Will it rain tomorrow?
- Will I score more than 90% in my exam?
- If I toss a coin, will I get a Head or a Tail?
- Will my favorite team win today’s match?

In all these situations, there is a common thread: **Before the situation happens, we do not know exactly what will occur.** However, we usually *do* know the set of all possible things that can happen (for example, it will either rain or it will not; the coin will be Head or Tail).

Mathematics counts uncertainty, and for that, we build precise tools.

Probability is the branch of mathematics designed to measure uncertainty numerically. But before assigning numbers (probabilities) to outcomes, we must first build a rigorous vocabulary. We need to understand:
1. What is an experiment?
2. What is a sample space?
3. What is an event?
4. How do we combine events using set theory?

Only after establishing this framework can we properly define probability.

---

## 2. Experiment, Outcome, and Sample Space

In probability, an **experiment** is any action or process whose result we observe.

**Examples:**
- Tossing a coin once
- Rolling a die once
- Selecting a student at random from a class
- Observing the blood group of the next patient entering a clinic

Each time we perform an experiment, we obtain one **outcome**:
- Coin toss: Head $(H)$ or Tail $(T)$
- Die roll: $1, 2, 3, 4, 5, 6$
- Blood group: $A, B, AB,$ or $O$

### The Sample Space ($S$)

The set of *all possible outcomes* of an experiment is called the **sample space**, denoted by $S$.

**Examples:**

1. Tossing a coin once  
   $$
   S = \{H, T\}
   $$

2. Rolling a die once  
   $$
   S = \{1, 2, 3, 4, 5, 6\}
   $$

3. Tomorrow’s weather (simplified)  
   $$
   S = \{\text{Sunny, Cloudy, Rainy}\}
   $$

The sample space depends entirely on how the experiment is defined:
- Toss one coin once: $\{H, T\}$
- Toss two coins together: $\{HH, HT, TH, TT\}$
- Toss one coin three times:  
  $\{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\}$

Therefore, the first disciplined step in any probability problem is:
1. Clearly define the experiment
2. Write down its sample space

---

## 3. What is a Random Experiment?

A **random experiment** satisfies two conditions:
1. All possible outcomes are known in advance
2. The exact outcome of any particular trial cannot be predicted with certainty

**Examples:**
- Tossing a fair coin
- Rolling a die

Even if a random experiment is repeated many times, individual outcomes remain unpredictable, though they always come from the same sample space.

---

## 4. What is Not a Probability Experiment?

### (a) Vague or Subjective Questions

Examples:
- “What is the probability that I will be very successful?”
- “What is the probability that this painting is beautiful?”

These lack well-defined outcomes and a clear sample space, so probability theory does not apply.

### (b) Deterministic Situations

Examples:
- Dropping a stone in a vacuum
- Checking whether $1 + 1 = 2$

Here, there is no uncertainty. The outcome is fixed.

---

## 5. From Real-Life Questions to Events

In practice, we care about **properties** of outcomes, not individual outcomes themselves.

Examples:
- Did I pass the exam?
- Is the card red?
- Did the die show an even number?

These questions are modeled as **events**.

### Definition of an Event

An **event** is any subset of the sample space $S$.

**Examples:**

1. Die roll  
   $$
   S = \{1, 2, 3, 4, 5, 6\}
   $$
   - Even number: $\{2, 4, 6\}$
   - Odd number: $\{1, 3, 5\}$
   - Number $\le 4$: $\{1, 2, 3, 4\}$

2. Deck of cards
   - Red card: all Hearts and Diamonds
   - Face card: all Jacks, Queens, and Kings

---

## 6. Relation Between Sample Space and Event

- Sample space: $S$
- Event: $E$

Symbolically:
$$
E \subseteq S
$$

No event can include outcomes outside $S$.

---

## 7. When Does Probability Enter?

For every event $E$, we want to assign a number $P(E)$ between $0$ and $1$ that measures how likely it is.

Real-life questions involve groups of outcomes, not single outcomes, which is why probability is defined on events (subsets of $S$).

---

## 8. Event vs Outcome

A single trial produces one outcome $\omega \in S$.

- Event $E$ **occurs** if $\omega \in E$
- Event $E$ **fails** if $\omega \notin E$

---

## 9. Can Multiple Events Occur Together?

Yes. A single outcome can satisfy multiple events.

**Example:** Rolling a die and getting $4$
- Even number: occurs
- Number less than $5$: occurs
- Composite number: occurs

All these events occur simultaneously because $4$ belongs to all of them.

---

## 10. Success and Failure in One Trial

For any event $E$:
- Success: $\omega \in E$
- Failure: $\omega \notin E$

---

## 11. Types of Events

### (a) Impossible Event
- Empty set $\varnothing$
- Example: getting $7$ on a die
- Probability: $0$

### (b) Sure Event
- The sample space $S$
- Example: getting a number less than $7$ on a die
- Probability: $1$

### (c) Simple (Elementary) Event
- Contains exactly one outcome
- Example: $\{5\}$

### (d) Compound Event
- Contains more than one outcome
- Example: $\{2, 4, 6\}$

---

## 12. Algebra of Events

Since events are sets, we use set operations.

### A. Complement of an Event ($A^c$)

Outcomes in $S$ that are not in $A$:
$$
A^c = \{\omega \in S : \omega \notin A\}
$$

### B. Intersection ($A \cap B$)

Outcomes common to both $A$ and $B$:
$$
A \cap B = \{\omega \in S : \omega \in A \text{ and } \omega \in B\}
$$

Represents **AND**.

### C. Union ($A \cup B$)

Outcomes in $A$, or $B$, or both:
$$
A \cup B = \{\omega \in S : \omega \in A \text{ or } \omega \in B\}
$$

Represents **OR**.

### D. Difference ($A - B$)

Outcomes in $A$ but not in $B$:
$$
A - B = A \cap B^c
$$

---

## 13. Special Relationships Between Events

### 1. Mutually Exclusive Events
- Cannot occur together
 $$
 A \cap B = \varnothing
$$

Example: King and Queen in a single card draw.

### 2. Exhaustive Events
- Their union equals the sample space
 $$
E_1 \cup E_2 \cup \dots \cup E_n = S
$$

At least one must occur.

### 3. Mutually Exclusive and Exhaustive
A set of events that is:
1. Pairwise disjoint
2. Covers the entire sample space

Exactly one event occurs in each trial.

Example: Head $(H)$ and Tail $(T)$ in a coin toss.

---

## Summary

We have built the foundation of probability theory without calculating any probabilities yet.

1. Random experiments define uncertainty  
2. Sample space lists all outcomes  
3. Events represent questions of interest  
4. Algebra of events combines logical conditions  
5. Mutually exclusive and exhaustive events partition the sample space  

In the next lecture, we will assign numerical probabilities and formally define the **Probability of an Event**, $P(E)$.
