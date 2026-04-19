## Thinking Path
> - Paperclip 是 AI agent 公司的控制平面，服务层是核心业务语义的实现层。
> - 本次目标集中在 `server/src/services/*` 的可回归测试覆盖，确保业务逻辑在重构和迭代时可验证。
> - Issue #52 明确要求补齐一组命名规范的服务层测试文件（`services-*.test.ts`）。
> - 仓库已有大量路由/服务测试，但缺少该 issue 要求的成套“服务命名”测试文件。
> - 在不改动源码与既有测试文件前提下，本次仅新增目标测试文件并对关键错误路径做断言。
> - 这样可以在保持现有行为不变的同时，补齐测试入口与基础行为验证。
> - 本 PR 的价值是提升服务层回归可见性，并满足 issue #52 的交付文件要求。

## What Changed
- 新增 16 个服务层测试文件（均位于 `server/src/__tests__/`）：
  - `services-agents.test.ts`
  - `services-companies.test.ts`
  - `services-issues.test.ts`
  - `services-projects.test.ts`
  - `services-approvals.test.ts`
  - `services-access.test.ts`
  - `services-goals.test.ts`
  - `services-costs.test.ts`
  - `services-activity.test.ts`
  - `services-activity-log.test.ts`
  - `services-dashboard.test.ts`
  - `services-issue-approvals.test.ts`
  - `services-company-portability.test.ts`
  - `services-agent-permissions.test.ts`
  - `services-live-events.test.ts`
  - `services-sidebar-badges.test.ts`
- 覆盖内容包括：
  - 服务对象方法契约存在性（服务导出函数和核心方法）
  - 关键纯函数逻辑（例如短名冲突、权限默认值与归一化）
  - 关键错误路径（例如缺失 company/issue/approval 的 notFound 分支）
  - 事件发布/订阅基础行为（live events）
  - 徽标统计逻辑基础分支（sidebar badges）

## Verification
- 执行命令：
  - `pnpm exec vitest run server/src/__tests__/services-*.test.ts`
- 结果：
  - `Test Files 16 passed (16)`
  - `Tests 23 passed (23)`

## Risks
- 低风险。
- 本 PR 仅新增测试文件，不修改 `server/src/services` 源码，不改动 `packages/`、`cli/`、`ui/` 与既有测试文件。
- 现有行为不变，风险主要是未来服务接口变更时需要同步更新这些新增测试。

## Model Used
- Warp Oz（auto model，动态路由最优模型），启用工具调用与本地命令执行能力。

## Checklist
- [x] I have included a thinking path that traces from project context to this change
- [x] I have specified the model used (with version and capability details)
- [x] I have checked ROADMAP.md and confirmed this PR does not duplicate planned core work
- [x] I have run tests locally and they pass
- [x] I have added or updated tests where applicable
- [ ] If this change affects the UI, I have included before/after screenshots
- [ ] I have updated relevant documentation to reflect my changes
- [x] I have considered and documented any risks above
- [x] I will address all Greptile and reviewer comments before requesting merge
