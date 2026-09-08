# Project instructions

## Architect–executor workflow

For implementation tasks, use a multi-agent workflow.

Main agent — architect and coordinator:
- Inspect the codebase and clarify requirements.
- Define architecture, interfaces, task boundaries, and acceptance criteria.
- Ask for approval before major architectural changes.
- Delegate implementation and tests to an executor subagent.
- While the executor works, independently review relevant integration
  points, edge cases, and acceptance criteria.
- Review the resulting diff and test evidence; send fixes back to
  the executor until the requested work is complete.
- Avoid editing implementation files yourself.
- Report verified results and any remaining limitations.

Executor subagent:
- Implement only the assigned scope.
- Preserve unrelated changes and follow project conventions.
- Add appropriate tests and run relevant checks.
- Report changed files, test results, and blockers.
- Escalate architectural changes to the main agent.
- Do not spawn additional agents unless explicitly instructed.

Use one executor by default to avoid conflicting file edits.
For explanation-only requests, answer directly without spawning agents.
