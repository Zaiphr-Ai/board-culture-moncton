# Build Demo Site

You are orchestrating the creation of a new demo site from the Demo Factory Template. Follow this pipeline exactly. Each phase depends on the previous one.

## User Brief

$ARGUMENTS

If the user brief above is empty, ask the user what kind of demo site they want before proceeding.

## Rules

- Use TaskCreate to track each pipeline phase so the user sees progress
- Pass the FULL output from each agent as context to the next agent
- If any agent fails or returns an error, diagnose the issue and retry once before stopping
- Run Visual QA and Code Reviewer in PARALLEL (same message, two Task tool calls)
- Maximum 2 fix cycles if QA finds issues
- Do NOT read agent prompt files yourself — pass them directly as context to the Task agents

---

## Phase 1: Creative Direction (Style Director)

Update the task to `in_progress`.

Read the file `.claude/agents/style-director.md`. Launch a **`general-purpose`** Task agent (model: `sonnet`) with a prompt that combines:
1. The contents of `style-director.md`
2. The user brief shown above

**Description for Task tool:** "Design creative direction"

Wait for the result. The Style Director will return a structured creative brief with style direction, colors, fonts, animation approach, and content suggestions.

Mark the task `completed`.

---

## Phase 2: Configuration & Planning (Config Architect)

Update the task to `in_progress`.

Read the file `.claude/agents/config-architect.md`. Launch a **`general-purpose`** Task agent (model: `sonnet`) with a prompt that combines:
1. The contents of `config-architect.md`
2. The FULL creative brief returned by the Style Director in Phase 1

**Description for Task tool:** "Write config and plan"

Wait for the result. The Config Architect will write `src/config/site.ts` and return a section blueprint.

Mark the task `completed`.

---

## Phase 3: Build Components & Pages (Component Builder)

Update the task to `in_progress`.

Read the file `.claude/agents/component-builder.md`. Launch a **`general-purpose`** Task agent (model: `opus`) with a prompt that combines:
1. The contents of `component-builder.md`
2. The FULL section blueprint returned by the Config Architect in Phase 2
3. The creative brief from Phase 1 (for animation and style context)

**Description for Task tool:** "Build components and pages"

Wait for the result. The Component Builder will create all section components and assemble the pages.

After the agent finishes, run `pnpm build` yourself to verify no build errors. If the build fails:
1. Read the error output
2. Fix the issues directly (Edit tool)
3. Re-run `pnpm build` until it passes

Mark the task `completed`.

---

## Phase 4: Quality Assurance (Parallel)

Update both QA tasks to `in_progress`.

Launch TWO Task agents in the **same message** (parallel execution):

### 4a. Visual QA
Read `.claude/agents/visual-qa.md`. Launch a **`general-purpose`** Task agent (model: `sonnet`) with:
1. The contents of `visual-qa.md`
2. A brief summary of what was built (style direction, sections created)

**Description for Task tool:** "Screenshot and visual QA"

### 4b. Code Review
Read `.claude/agents/code-reviewer.md`. Launch a **`feature-dev:code-reviewer`** Task agent (model: `sonnet`) with:
1. The contents of `code-reviewer.md`

**Description for Task tool:** "Review code quality"

Wait for both results.

---

## Phase 5: Fix Issues

If either QA agent reported issues:

1. List all issues from both agents
2. Fix each issue directly using the Edit tool
3. Run `pnpm build` to verify fixes don't break the build
4. Re-run Phase 4 ONE more time to confirm fixes
5. If issues persist after the second round, note them in the summary but don't loop further

If no issues were found, skip to Phase 6.

Mark QA tasks as `completed`.

---

## Phase 6: Commit, Push & Deploy

Update the task to `in_progress`.

1. **Update `wrangler.toml`** — derive a project name from the site name in `site.ts` (lowercase, hyphens, no spaces). Edit the `name` field in `wrangler.toml`.

2. **Commit everything:**
   - `git add -A`
   - Commit with a descriptive message summarizing the demo (style direction, brand name, key sections). End with `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`

3. **Push to remote:**
   - `git push`
   - If there's no upstream branch, use `git push -u origin HEAD`

4. **Deploy to Cloudflare Pages:**
   - Run `pnpm exec wrangler pages deploy dist/`
   - If prompted for a project name, use the name from `wrangler.toml`
   - Capture the deployment URL from the output

Mark the task `completed`.

---

## Phase 7: Summary

Mark the final task as `completed`.

Report to the user:
- **Style direction** chosen and why it fits the brief
- **Colors and fonts** selected
- **Sections built** (list each one)
- **QA results** — any issues found and how they were fixed
- **Build status** — confirmed passing
- **Deployment URL** — the live Cloudflare Pages URL
- **Repository** — confirm code was committed and pushed
