# Design Decisions

## 1. Event Simulation

I used `setTimeout` to simulate an event stream.  
This keeps the implementation simple while still demonstrating how the UI reacts to time-based updates.

---

## 2. Task Modeling

Each task is represented as an object with:

- id
- label
- agent
- status
- outputs

This structure makes it easy to:
- update task state over time
- append logs dynamically
- track progress clearly in the UI

---

## 3. Sequential vs Parallel Execution

Tasks are divided using a `parallel` flag.

- Sequential tasks are shown in the main flow
- Parallel tasks are grouped under a separate section

This approach keeps the UI simple while still clearly communicating concurrency to the user.

---

## 4. Status Handling

Each task can have different states:

- running
- complete
- failed
- cancelled

I used color-coded badges to make status easily scannable.

This helps users quickly understand system behavior without reading all logs.

---

## 5. Failure and Recovery

One task intentionally goes through:

failed → retry → cancelled

This demonstrates:
- system resilience
- partial execution handling
- realistic agent behavior

---

## 6. UI Design Approach

Instead of building a complex interface, I focused on:

- clarity over visual complexity
- readable task cards
- clear grouping of parallel tasks
- minimal but meaningful styling using Tailwind CSS

The UI is designed from an analyst's perspective, where understanding progress is more important than visual effects.

---

## 7. Final Output Emphasis

The final result is displayed separately from task logs.

This ensures the most important insight is clearly visible and not lost in intermediate steps.

---

## 8. Trade-offs

- Did not implement real streaming or backend events
- Did not build a full chat interface

These were intentional decisions to keep the solution focused, simple, and aligned with the assignment scope.

---

## 9. Overall Approach

The goal was to simulate how an AI agent executes tasks over time and present it in a way that is:

- easy to understand
- visually structured
- close to real-world workflows

The emphasis was on clarity and correctness rather than complexity.