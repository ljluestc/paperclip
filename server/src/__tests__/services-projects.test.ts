import { describe, expect, it } from "vitest";
import { projectService, resolveProjectNameForUniqueShortname } from "../services/projects.js";

describe("services/projects.ts", () => {
  it("resolves a unique project name for shortname collisions", () => {
    const name = resolveProjectNameForUniqueShortname(
      "Growth Board",
      [
        { id: "p1", name: "Growth Board" },
        { id: "p2", name: "Growth Board 2" },
      ],
      {},
    );
    expect(name).toBe("Growth Board 3");
  });

  it("exposes project service methods", () => {
    const service = projectService({} as any);
    expect(service).toMatchObject({
      list: expect.any(Function),
      listByIds: expect.any(Function),
      getById: expect.any(Function),
      create: expect.any(Function),
      update: expect.any(Function),
    });
  });
});

