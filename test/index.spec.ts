import { sayHello } from "../src/index.ts";

describe("index", () => {
  it("should call the sayHello method", () => {
    const result = sayHello("test");
    expect(result).toEqual("Hello test!");
  });
});
