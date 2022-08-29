function addg(a) {
  if (a === undefined) return a;
  return function g(b) {
    if (b !== undefined) {
      return addg(a + b);
    }
    return a;
  };
}

describe("testing addg high order function", () => {
  it("adds (1)(2)() to equal 3", () => {
    expect(addg(1)(2)()).toBe(3);
  });
  it("adds (3)(4)(0)() to equal 7", () => {
    expect(addg(3)(4)(0)()).toBe(7);
  });
  it("undefined when called without params", () => {
    expect(addg()).toBeUndefined();
  });
  it("returns the same result as input when 1 param is called", () => {
    const arr = Array.from({ length: 10 }, (_) =>
      Math.floor(Math.random() * 100)
    );
    arr.forEach((e) => {
      expect(addg(e)()).toBe(e);
    });
  });
  it("returns a function when no undefined call is done at the end", () => {
    expect(typeof addg(1)).toBe("function");
  });
});
