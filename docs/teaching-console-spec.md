# DEVX Curriculum Website — Convert Into a Classroom Teaching Console

You are working on the existing DEVX / AI-Native Frontend Engineering curriculum website.

The website is not just a curriculum overview. I will actively use this website while standing in front of a class and teaching each 2-hour lesson.

Your task is to redesign and restructure the **lesson experience and lesson content architecture** so that I can open any lesson and teach directly from the website without needing a separate lecture document.

## FIRST: inspect the existing codebase

Before changing anything:

1. Inspect the full project structure.
2. Find where:
   - curriculum data is stored
   - lesson data is stored
   - lesson detail UI is implemented
   - week navigation is implemented
   - progress/completed state is stored

3. Understand the existing design system, typography, colors, layout, spacing and components.
4. Preserve the existing visual identity unless a change clearly improves classroom usability.
5. Do NOT rebuild the project from scratch.
6. Reuse/refactor existing components where appropriate.

The current curriculum progression and 48 lesson topics should remain the foundation.

---

# PRIMARY PROBLEM

Currently many lessons explain **WHAT to teach**, but not enough **HOW to teach it**.

For example, a lesson may contain:

- URL, domain and DNS — 25 min
- Browser, server and HTTP — 25 min
- Frontend — 25 min

This is useful as an outline, but it is not enough for a teacher actively teaching a beginner class.

Each lesson needs actual lecture material inside it.

For every major topic I need to be able to see:

- what the concept means
- how I should explain it
- the simplest mental model
- an analogy if useful
- concrete examples
- developer relevance
- code examples where relevant
- what to demonstrate
- what question to ask students
- common misconceptions
- what students should remember

The website should feel like a **teacher operating system / classroom teaching console**, not merely a syllabus viewer.

---

# LESSON PAGE INFORMATION ARCHITECTURE

Redesign each lesson page around the following main sections.

## 1. OVERVIEW

At the top show:

- Lesson number
- Week
- Module
- Lesson type
- Lesson title
- 1–2 sentence description
- Duration
- Difficulty / level if useful
- Prerequisites
- Tools required

Then show:

### Learning objectives

Use 3–5 concrete measurable objectives.

Prefer verbs such as:

- explain
- identify
- compare
- build
- debug
- demonstrate
- verify

Avoid vague objectives like “understand JavaScript.”

### By the end of this lesson

A very concrete description of what the student should be able to do independently.

---

# 2. TEACH

This should become the most important section of the website.

Break the lesson into approximately 4–7 teaching blocks depending on the lesson.

Example:

01 — What happens when you enter a URL?
02 — Domain and DNS
03 — Browser and server
04 — HTTP request and response
05 — What frontend actually means

Each teaching block must contain the following fields.

### A. Concept

Clear title.

### B. Why this matters

2–4 sentences explaining why a frontend developer needs this knowledge.

### C. Teacher explanation

This must be actual lecture content.

Write approximately 3–8 short paragraphs depending on complexity.

It should be detailed enough that a teacher who knows only the basics could read it before class and confidently explain the topic.

Use beginner-friendly Mongolian.

Keep necessary technical words in English:

- browser
- request
- response
- server
- DNS
- component
- state
- props
- token
- context window
  etc.

Do not awkwardly translate established developer terminology.

### D. Mental model / analogy

When useful, provide a simple analogy.

Example:

DNS = утасны contact list шиг.

But explicitly mention where the analogy stops being technically accurate.

### E. Example

Give at least one concrete example.

For programming lessons include runnable code snippets when relevant.

Avoid huge code blocks.

Use examples specifically designed to teach ONE concept at a time.

### F. Board / diagram

If the concept benefits from visualization, provide a simple diagram that can be rendered on the website.

Prefer simple HTML/CSS diagrams, flow diagrams, cards and arrows instead of external images.

Example:

User
↓
Browser
↓
DNS
↓
Server
↓
HTTP Response
↓
Browser renders page

### G. Ask the class

Provide 1–3 questions the teacher can ask students during the explanation.

Example:

“Browser server хоёрын аль нь request эхлүүлж байна?”

Answers should be visible only in Teacher Mode.

### H. Common misconception

Show common beginner mistakes or incorrect mental models.

Example:

“Google Chrome өөрөө internet биш.”

Explain the correct model.

### I. Key takeaway

End every concept block with one highlighted sentence:

**Эндээс заавал санах зүйл: ...**

---

# 3. LIVE DEMO

Every lesson that benefits from demonstration should include a proper demo script.

For each demo include:

- Goal
- Required setup
- What the teacher opens
- Exact steps
- What students should observe
- What the teacher should explain at each important step
- Expected result
- Likely errors
- Recovery steps

Example for DevTools Network:

1. Open Chrome.
2. Open DevTools.
3. Go to Network.
4. Refresh the page.
5. Select the document request.
6. Find Request URL.
7. Find Method.
8. Find Status Code.

Then explain what each field proves.

The demo should be usable directly from the website while teaching.

---

# 4. GUIDED PRACTICE

Every normal lesson must include student practice.

Structure:

### Task

What students need to achieve.

### Instructions

Numbered steps.

### Constraints

Rules students must follow.

### Hint

Collapsed by default.

### Expected result

Collapsed by default in Teacher Mode.

### Stretch challenge

Optional harder task for faster students.

Avoid exercises that are only “copy this code.”

Students should need to think, predict, explain, modify or debug.

---

# 5. AI LAB

AI must not be treated as a magic code generator.

The philosophy of the curriculum is:

> Students should treat AI like an engineering collaborator whose output must be inspected and verified.

For relevant lessons include:

### Goal

What AI skill is being practiced.

### Tool

Examples:

- ChatGPT
- Claude
- Claude Code
- Codex
- AI editor
- browser + AI

Do not force a specific provider when the exercise does not depend on one.

### Prompt

Provide an exact copyable prompt students can use.

### Before asking AI

Ask students to predict something or write their own explanation first whenever appropriate.

### AI task

What to ask the AI to do.

### Verify

This is critical.

Explain HOW students verify the AI answer using:

- browser DevTools
- documentation
- runtime output
- tests
- console
- Git diff
- TypeScript
- another source of evidence

depending on the lesson.

### Reflection

1–3 short questions.

Examples:

- AI-ийн аль хэсэг зөв байсан?
- Аль хэсгийг нотолгоогоор шалгасан?
- AI-д ямар context дутсан бэ?
- Дараагийн prompt-оо яаж сайжруулах вэ?

---

# 6. CHECKPOINT

End every lesson with a quick assessment.

Include approximately:

- 3 concept questions
- 2 application questions
- 1 explain-in-your-own-words question

Teacher Mode should contain answers / rubric.

Example:

**Question**

DNS ямар асуудлыг шийддэг вэ?

**Teacher answer**

Domain нэрийг тухайн серверийн IP address-тай холбож өгнө.

Do not make all questions multiple choice.

Prioritize explanation and reasoning.

---

# 7. LESSON WRAP-UP

Show:

### Today we learned

5–7 concise bullets.

### Students should now be able to

Concrete abilities.

### Before the next lesson

Anything students should install, read, complete or prepare.

### Connection to next lesson

Explain in 1–2 sentences WHY the next lesson logically follows this one.

This is important for curriculum continuity.

---

# TWO DISPLAY MODES

Implement two viewing modes.

## Teacher Mode

Default mode.

Show:

- full explanations
- timing
- teacher notes
- question answers
- expected outputs
- misconceptions
- demo notes
- exercise solutions
- teaching tips

## Projector Mode

Designed to project on a classroom screen.

Hide:

- answers
- teacher-only notes
- solution code
- rubrics
- unnecessary admin information

Show:

- concept title
- important explanations
- diagrams
- code examples
- student questions
- exercise instructions
- timers where useful

Projector Mode should use larger typography and reduced visual clutter.

Add an obvious toggle:

Teacher Mode / Projector Mode

Persist the preference locally.

---

# LESSON NAVIGATION

The teacher should never get lost while presenting.

Implement or improve:

- Previous lesson
- Next lesson
- Week navigation
- Current lesson indicator
- Lesson progress
- Sticky lesson navigation

Inside a lesson add a compact sticky table of contents such as:

Overview
Teach
Demo
Practice
AI Lab
Check

Clicking should smoothly scroll to the section.

Highlight the current section while scrolling.

---

# TIMING

The existing course uses 120-minute lessons.

Keep timing visible, but make it practical.

Example:

00:00–00:10 — Opening
00:10–00:30 — Concept 1
00:30–00:50 — Concept 2
00:50–01:05 — Demo
01:05–01:15 — Break
01:15–01:40 — Practice
01:40–01:55 — AI Lab
01:55–02:00 — Checkpoint

Do NOT mechanically use the same timing for every lesson.

Project lessons, AI labs and theory lessons can have different structures.

Ensure total timing is approximately 120 minutes.

---

# CONTENT QUALITY

The target students are beginners learning frontend engineering with AI.

Content should be:

- technically accurate
- beginner friendly
- practical
- developer-oriented
- written primarily in Mongolian
- concise enough to teach from
- detailed enough to prepare from

Avoid:

- generic textbook filler
- motivational fluff
- unexplained jargon
- extremely long paragraphs
- unnecessary advanced theory
- excessive bullet-only content
- AI-generated-sounding vague explanations

Prefer:

**Concept → mental model → example → evidence → practice**

---

# CURRICULUM CONTINUITY

All 48 lessons must feel connected.

Before writing/refactoring lesson content, examine:

- what students learned in previous lessons
- what knowledge they currently possess
- what this lesson must introduce
- what future lessons depend on it

Never use a concept extensively before it has been introduced.

When a lesson uses prior knowledge, explicitly reference it.

Example:

“Өмнөх хичээлээр HTTP request/response үзсэн. Одоо JavaScript-аас fetch ашиглан тэр request-ийг өөрсдөө илгээнэ.”

---

# DATA ARCHITECTURE

Do not hardcode enormous lesson pages directly into React components.

Create/refactor a reusable structured lesson content model.

Choose the structure that best fits the existing codebase.

A lesson should conceptually support fields such as:

- id
- week
- type
- title
- summary
- duration
- objectives
- prerequisites
- tools
- outcomes
- timeline
- teachingSections
- demos
- practices
- aiLab
- checkpoint
- wrapUp

Teaching sections should support:

- title
- duration
- whyItMatters
- explanation
- analogy
- examples
- code
- diagram
- classQuestions
- misconceptions
- takeaway

Keep the architecture maintainable because all 48 lessons will eventually contain substantial material.

If the project currently uses TypeScript, define proper types instead of using `any`.

---

# COMPONENT ARCHITECTURE

Prefer reusable components such as:

LessonHeader
LessonObjectives
LessonTimeline
LessonSectionNav
TeachingSection
ConceptExplanation
AnalogyCard
Diagram
CodeExample
ClassQuestion
MisconceptionCard
KeyTakeaway
LiveDemo
GuidedPractice
AILab
Checkpoint
LessonWrapUp
TeacherOnly
ModeToggle

Adapt naming to existing conventions.

Do not over-componentize trivial markup.

---

# UI / UX

Preserve the current DEVX visual identity.

Improve readability for long teaching material.

Important:

- readable max-width
- strong hierarchy
- generous spacing
- clear section boundaries
- accessible contrast
- code blocks with copy button
- collapsible hints / answers
- sticky table of contents
- responsive layout
- keyboard accessible controls
- mobile usable, but optimize primarily for laptop/classroom use

Avoid turning the page into a dashboard full of tiny cards.

Long-form teaching content should be comfortable to read.

---

# FIRST CONTENT IMPLEMENTATION

Use **Lesson 01 — Веб хэрхэн ажилладаг вэ** as the reference implementation.

Fully rewrite/enrich Lesson 01 using this new content model.

It should include deep but beginner-friendly teaching material for at least:

1. Internet vs Web
2. URL and its parts
3. Domain
4. DNS
5. Client and browser
6. Server
7. HTTP
8. Request
9. Response
10. HTTP methods at beginner level
11. HTTP status codes at beginner level
12. HTML / CSS / JavaScript roles
13. What frontend actually is
14. Full journey from typing a URL to seeing a page
15. DevTools Network verification

For the full URL-to-page journey, create a clear visual sequence.

Do not overcomplicate with TCP/TLS internals yet unless shown briefly as “there are lower-level steps we will not cover today.”

The lesson must be teachable in approximately 120 minutes.

---

# THEN APPLY THE STRUCTURE TO ALL LESSONS

After Lesson 01 is working well:

1. Apply the reusable structure to all existing 48 lessons.
2. Preserve their existing curriculum intent.
3. Enrich each lesson with enough information that the teacher immediately knows exactly what to teach.
4. Content depth should match the topic.
5. Do not pad lessons just to make them long.
6. Project lessons should focus more on specification, workflow, milestones, review and deliverables rather than theoretical lecture paragraphs.
7. AI Lab lessons should focus more on experiments, comparisons, verification and reflection.
8. Core frontend lessons should contain stronger conceptual explanations and coding examples.

---

# IMPORTANT

Do not merely add more bullet points to the current website.

The goal is to transform it from:

**“Here are the topics for this lesson.”**

into:

**“I can open this page, walk into class, and teach the entire lesson from it.”**

Make reasonable product/design decisions yourself.

Do not ask me to specify every component before starting.

Inspect the existing implementation, implement the strongest solution consistent with the current design, and keep the codebase maintainable.

---

# ACCEPTANCE CRITERIA

Before considering the task complete verify that:

- [ ] Existing curriculum progression is preserved.
- [ ] Existing navigation still works.
- [ ] Lesson pages are driven by reusable structured data.
- [ ] Teacher Mode works.
- [ ] Projector Mode works.
- [ ] Lesson 01 contains genuinely detailed lecture material.
- [ ] Every major concept contains an explanation, not just a label.
- [ ] Live demos contain actionable teacher steps.
- [ ] Exercises contain student instructions and expected outcomes.
- [ ] AI exercises explicitly require verification.
- [ ] Checkpoints contain teacher answers.
- [ ] Long content remains readable.
- [ ] Previous/Next navigation works.
- [ ] TypeScript/build/lint errors are resolved.
- [ ] The app builds successfully.
- [ ] Existing useful functionality is not removed.
