import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import RemConverter from '../RemConverter'

afterEach(cleanup)

describe('<RemConverter />', () => {
  it('renders', () => {
    expect(render(<RemConverter />)).toBeDefined()
  })

  it('should convert px to the right rem value', async () => {
    const { getByTestId, getByText } = render(<RemConverter />)
    fireEvent.change(getByTestId('px'), {
      target: { value: '32' },
    })
    fireEvent.click(getByText('Convert'))
    expect((getByTestId('rem') as HTMLInputElement).value).toBe('2')
  })

})
