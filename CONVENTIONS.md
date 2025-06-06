---
AIDER_RULES
---

description: Guidelines for creating and maintaining aider rules to ensure consistency and effectiveness.
globs: CONVENTIONS.md
filesToApplyRule: CONVENTIONS.md
alwaysApply: true

---

The below describes how you should be structuring new rule sections in this document.

- **Required Rule Structure:**

  ```markdown
  ---
  description: Clear, one-line description of what the rule enforces
  globs: path/to/files/*.ext, other/path/**/*
  alwaysApply: boolean
  ---

  - **Main Points in Bold**
    - Sub-points with details
    - Examples and explanations
  ```

- **Section References:**

  - Use `ALL_CAPS_SECTION` to reference files
  - Example: `AIDER_RULES`

- **Code Examples:**

  - Use language-specific code blocks

  ```typescript
  // ✅ DO: Show good examples
  const goodExample = true;

  // ❌ DON'T: Show anti-patterns
  const badExample = false;
  ```

- **Rule Content Guidelines:**

  - Start with high-level overview
  - Include specific, actionable requirements
  - Show examples of correct implementation
  - Reference existing code when possible
  - Keep rules DRY by referencing other rules

- **Rule Maintenance:**

  - Update rules when new patterns emerge
  - Add examples from actual codebase
  - Remove outdated patterns
  - Cross-reference related rules

- **Best Practices:**
  - Use bullet points for clarity
  - Keep descriptions concise
  - Include both DO and DON'T examples
  - Reference actual code over theoretical examples
  - Use consistent formatting across rules
- **Project Info**
  - The project is not using npm workspaces, so do not generate commands like npm install --workspace=users-microservice mysql. Instead, cd into the users-microservice directory, run npm install mysql, and then cd back to the root.
  - This project is for learning purposes. Do not make any code changes automatically. I want to discuss and review the approach with you first. Wait for my approval before making any modifications.

---

## SELF_IMPROVE

description: Guidelines for continuously improving this rules document based on emerging code patterns and best practices.
globs: **/\*
filesToApplyRule: **/\*
alwaysApply: true

---

- **Rule Improvement Triggers:**

  - New code patterns not covered by existing rules
  - Repeated similar implementations across files
  - Common error patterns that could be prevented
  - New libraries or tools being used consistently
  - Emerging best practices in the codebase

- **Analysis Process:**

  - Compare new code with existing rules
  - Identify patterns that should be standardized
  - Look for references to external documentation
  - Check for consistent error handling patterns
  - Monitor test patterns and coverage

- **Rule Updates:**

  - **Add New Rules When:**

    - A new technology/pattern is used in 3+ files
    - Common bugs could be prevented by a rule
    - Code reviews repeatedly mention the same feedback
    - New security or performance patterns emerge

  - **Modify Existing Rules When:**
    - Better examples exist in the codebase
    - Additional edge cases are discovered
    - Related rules have been updated
    - Implementation details have changed

- **Example Pattern Recognition:**

  ```typescript
  // If you see repeated patterns like:
  const data = await prisma.user.findMany({
    select: { id: true, email: true },
    where: { status: "ACTIVE" },
  });

  // Consider adding a PRISMA section in the CONVENTIONS.md:
  // - Standard select fields
  // - Common where conditions
  // - Performance optimization patterns
  ```

- **Rule Quality Checks:**

  - Rules should be actionable and specific
  - Examples should come from actual code
  - References should be up to date
  - Patterns should be consistently enforced

- **Continuous Improvement:**

  - Monitor code review comments
  - Track common development questions
  - Update rules after major refactors
  - Add links to relevant documentation
  - Cross-reference related rules

- **Rule Deprecation:**

  - Mark outdated patterns as deprecated
  - Remove rules that no longer apply
  - Update references to deprecated rules
  - Document migration paths for old patterns

- **Documentation Updates:**
  - Keep examples synchronized with code
  - Update references to external docs
  - Maintain links between related rules
  - Document breaking changes

Follow AIDER_RULES for proper rule formatting and structure of aider rule sections.
