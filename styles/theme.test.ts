import { theme, color, space } from "./theme"

describe('color utility function', () => {
  test(' gets color from theme', () => {
    const gray100 = color("gray", 100)({ theme });
    expect(gray100).toBe("#f2f4f7");
  })
})


describe('space utility function', () => {
  test('gets single space from theme', () => {
    const space2 = space(2)({ theme });
    expect(space2).toBe("0.5rem");
  })

  test('gets vertical and horizontal space from theme', () => {
    const space2 = space(2, 3)({ theme });
    expect(space2).toBe("0.5rem 0.75rem");
  })

  test('gets top, horizontal and bottom space from theme', () => {
    const space2 = space(2, 3, 4)({ theme });
    expect(space2).toBe("0.5rem 0.75rem 1rem");
  })

  test('gets top, left, bottom and right space from theme', () => {
    const space2 = space(2, 3, 4, 5)({ theme });
    expect(space2).toBe("0.5rem 0.75rem 1rem 1.25rem");
  })
})


export { }