import sum from '@/utils/sum'

describe('sum', () => {
  it('做加法', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})
