# PROMPTS.md — AI Prompt Log
### IT 223 Midterm PIT | Micheal Tim Joseph Enriquez

**AI Tool Used:** Claude (claude.ai — claude.ai/chat)
**Date of Use:** April 2025

---

## Entry #1

**Tool Used:** Claude (claude.ai)

**Prompt (copy-paste exactly):**
> "I am working on my PIT (Performance innovative task). I will attach a PDF file that contains the official instructions and requirements. Please carefully read the PDF and then: 1. Summarize the key requirements and deliverables from the instructions. 2. Break down the tasks into clear, actionable steps I need to follow. 3. Highlight any technical components (coding, documentation, design, etc.) and explain them in detail. 4. Provide practical guidance, examples, or templates where possible to help me implement each part. 5. Organize the output into a structured plan that I can follow step by step."

**AI Output (summary):**
Claude read the PDF and produced a detailed interactive checklist breaking down all rubric requirements into HTML, CSS, JavaScript, and jQuery tasks with point values and suggested implementation approaches.

**How I used/modified it in my project:**
I used this as my project plan to understand what was required for each rubric criterion. The checklist helped me prioritize building the HTML structure first, then CSS, then JS features, then jQuery. I did not use the output as code — it was purely for planning.

---

## Entry #2

**Tool Used:** Claude (claude.ai)

**Prompt (copy-paste exactly):**
> "so this is my current data/resume.json [pasted JSON content]. do you approve my data/resume.json?"

**AI Output (summary):**
Claude reviewed the JSON structure, approved the contact, about, skills, experience, and education sections, and flagged that the projects array had only one entry and was missing a `category` field needed for the filter feature.

**How I used/modified it in my project:**
I added two more projects to the array and added a `"category"` field to each project entry. The final JSON structure and all content are my own — Claude only reviewed it and pointed out what was missing.

---

## Entry #3

**Tool Used:** Claude (claude.ai)

**Prompt (copy-paste exactly):**
> "yes lets do this three [referring to: Experience section, typing animation on hero, scroll progress bar]"

**AI Output (summary):**
Claude generated: (1) the `startTypingAnimation()` function using `setTimeout` recursion to cycle through phrases; (2) the `renderExperience()` function using `createElement` and `appendChild`; (3) the `#scroll-progress` CSS and the jQuery scroll event handler that calculates scroll percentage and updates bar width using `css()`.

**How I used/modified it in my project:**
I reviewed all three additions carefully:
- For the typing animation, I changed the phrases array to include "IT Student @ USTP" instead of a generic phrase, and adjusted the typing/delete speeds.
- For `renderExperience()`, I confirmed it followed the same pattern as `renderEducation()` so I could explain both consistently.
- For the scroll progress bar, I verified the math `(scrollTop / docHeight) * 100` myself to understand how the percentage is calculated.

---

## Entry #4

**Tool Used:** Claude (claude.ai)

**Prompt (copy-paste exactly):**
> "did we satisfy the PIT? i need to understand all my code so i need a line by line explanation of my code files because i need to record my self and present my PIT, put it in a docs maybe do what you can, and also the README.md and PROMPTS.md lets finish this"

**AI Output (summary):**
Claude produced: (1) a Word document (.docx) with line-by-line explanation of all four code files (index.html, styles.css, script.js, main.js) plus a PIT rubric checklist and demo video script; (2) this README.md; (3) this PROMPTS.md file.

**How I used/modified it in my project:**
I used the Word document as my personal study guide and demo video script. I read through every explanation and made sure I understood each line before recording. I updated the README with my actual GitHub Pages and YouTube links before submission.

---

*Total AI interactions: 4 entries*
*All code was reviewed, tested, and understood before submission.*