import { describe, expect, it } from "vitest";
import { deduplicateAgentName, hasAgentShortnameCollision } from "../services/agents.js";

describe("services/agents.ts", () => {
  it("detects shortname collisions ignoring terminated agents", () => {
    expect(
      hasAgentShortnameCollision("CEO Agent", [
        { id: "a1", name: "ceo-agent", status: "active" },
        { id: "a2", name: "ceo-agent", status: "terminated" },
      ]),
    ).toBe(true);
    expect(
      hasAgentShortnameCollision("CEO Agent", [{ id: "a2", name: "ceo-agent", status: "terminated" }]),
    ).toBe(false);
  });

  it("deduplicates to a suffixed name when shortname is occupied", () => {
    const next = deduplicateAgentName("Engineer", [
      { id: "a1", name: "Engineer", status: "active" },
      { id: "a2", name: "Engineer 2", status: "active" },
    ]);
    expect(next).toBe("Engineer 3");
  });
});
