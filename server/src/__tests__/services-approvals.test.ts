import { describe, expect, it } from "vitest";
import { approvalService } from "../services/approvals.js";

describe("services/approvals.ts", () => {
  it("exposes approval service methods", () => {
    const service = approvalService({} as any);
    expect(service).toMatchObject({
      list: expect.any(Function),
      getById: expect.any(Function),
      create: expect.any(Function),
      approve: expect.any(Function),
      reject: expect.any(Function),
      requestRevision: expect.any(Function),
      resubmit: expect.any(Function),
      listComments: expect.any(Function),
      addComment: expect.any(Function),
    });
  });
});

