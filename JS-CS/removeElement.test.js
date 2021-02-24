const removeElement = require('./removeElement');

// RemoveElement Function
describe('Test removeElement Function:', () => {
  test('Removes values matching second argument from array.', () => {
    expect(removeElement([1, 1, 2, 1, 3], 1)).toEqual([2, 3]);
  });
  test('Removes values matching second argument from array.', () => {
    expect(
      removeElement([1233251231431, 212412313, 92344443222, 212412313, 1, 212412313], 212412313)
    ).toEqual([1233251231431, 92344443222, 1]);
  });
});
