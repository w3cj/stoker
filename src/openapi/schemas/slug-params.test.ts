import { describe, expect, it } from "vitest";

import SlugParamsSchema from "./slug-params.js";

describe("slug-params", () => {
  it("allows letters", () => {
    const slug = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const { data, error } = SlugParamsSchema.safeParse({
      slug,
    });
    expect(data?.slug).toBe(slug);
    expect(error).toBeUndefined();
  });
  it("allows numbers", () => {
    const slug = "0123456789";
    const { data, error } = SlugParamsSchema.safeParse({
      slug,
    });
    expect(data?.slug).toBe(slug);
    expect(error).toBeUndefined();
  });
  it("allows numbers and letters", () => {
    const slug = "0123456789abcdeABCDE";
    const { data, error } = SlugParamsSchema.safeParse({
      slug,
    });
    expect(data?.slug).toBe(slug);
    expect(error).toBeUndefined();
  });
  it("allows dashes", () => {
    const slug = "test-slug-here";
    const { data, error } = SlugParamsSchema.safeParse({
      slug,
    });
    expect(data?.slug).toBe(slug);
    expect(error).toBeUndefined();
  });
  it("allows underscores", () => {
    const slug = "test_slug_here";
    const { data, error } = SlugParamsSchema.safeParse({
      slug,
    });
    expect(data?.slug).toBe(slug);
    expect(error).toBeUndefined();
  });
  it("does not allow special characters only", () => {
    const slug = "!@#$%^&*()+-=";
    const { error } = SlugParamsSchema.safeParse({
      slug,
    });
    expect(error).toBeDefined();
  });
  it("does not allow special characters with allowed characters", () => {
    const slug = "abc-DEF_ABC-!@#$%^&*()+-=";
    const { error } = SlugParamsSchema.safeParse({
      slug,
    });
    expect(error).toBeDefined();
  });
});
