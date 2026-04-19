import { describe, expect, it } from "vitest";
import { issueService } from "../services/issues.js";

describe("services/issues.ts", () => {
  it("exposes issue service methods", () => {
    const service = issueService({} as any);
    expect(service).toMatchObject({
      list: expect.any(Function),
      getById: expect.any(Function),
      create: expect.any(Function),
      update: expect.any(Function),
      checkout: expect.any(Function),
      release: expect.any(Function),
    });
  });
});

