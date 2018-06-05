test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
    const floatyVal = 0.1 + 0.2;
    //expect(value).toEqual(0.3);
    //equalTo won't work here because of tiny amounts of rounding
    //toBeCloseTo will work though
    expect(floatyVal).toBeCloseTo(0.3);
});