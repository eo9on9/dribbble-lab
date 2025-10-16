import { formatCompactNumber } from './formatCompactNumber'

describe('[Shared] formatCompactNumber util', () => {
  test('1000 미만의 값은 그대로 표시된다.', () => {
    expect(formatCompactNumber(1)).toBe('1')
    expect(formatCompactNumber(25)).toBe('25')
    expect(formatCompactNumber(999)).toBe('999')
  })

  test('1000 이상 1000000 미만의 값은 k 단위로 표시된다.', () => {
    expect(formatCompactNumber(1000)).toBe('1k')
    expect(formatCompactNumber(2500)).toBe('2.5k')
    expect(formatCompactNumber(999999)).toBe('1000k')
  })

  test('1000000 이상의 값은 m 단위로 표시된다.', () => {
    expect(formatCompactNumber(1000000)).toBe('1m')
    expect(formatCompactNumber(2500000)).toBe('2.5m')
    expect(formatCompactNumber(999999999)).toBe('1000m')
  })
})
