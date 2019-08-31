import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import fc from 'fast-check'
import RemConverter from '../RemConverter'

afterEach(cleanup)

describe('<RemConverter />', () => {
  it('renders', () => {
    expect(render(<RemConverter />)).toBeDefined()
  })

  it('should convert px to the right value with fc', async () => {
    const { getByTestId, getByText } = render(<RemConverter />)
    fc.assert(
      fc.property(fc.nat(), fc.constant(16), (px, baseFontSize) => {
        fireEvent.change(getByTestId('px'), {
          target: { value: `${px}` },
        })
        fireEvent.click(getByText('Convert'))
        expect((getByTestId('rem') as HTMLInputElement).value).toBe(
          `${px / baseFontSize}`,
        )
      }),
    )
  })
})
