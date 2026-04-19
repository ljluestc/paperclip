import { describe, expect, it } from "vitest";
import { companyService } from "../services/companies.js";

describe("services/companies.ts", () => {
  it("exposes the expected service contract", () => {
    const service = companyService({} as any);
    expect(service).toMatchObject({
      list: expect.any(Function),
      getById: expect.any(Function),
      create: expect.any(Function),
      update: expect.any(Function),
      archive: expect.any(Function),
      remove: expect.any(Function),
      stats: expect.any(Function),
    });
  });
});

