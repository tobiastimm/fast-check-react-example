import React, { FC, useState, FormEvent } from 'react'

interface Props {}

const RemConverter: FC<Props> = () => {
  const [baseFontSize] = useState(16)
  const [px, setPx] = useState(baseFontSize)
  const [rem, setRem] = useState(px2Rem(px, baseFontSize))

  const convert = (e: FormEvent) => {
    e.preventDefault()
    setRem(px2Rem(px, baseFontSize))
  }

  return (
    <div>
      <form onSubmit={convert}>
        <h6>Base font-size: {baseFontSize}</h6>

        <div>
          <label>PX</label>
          <input
            data-testId="px"
            value={px}
            onChange={e => setPx(parseInt(e.target.value, 10))}
          />
        </div>

        <div>
          <label>REM</label>
          <input data-testId="rem" value={rem} disabled />
        </div>

        <button type="submit">Convert</button>
      </form>
    </div>
  )
}

export function px2Rem(px: number, baseFontSize: number) {
  return px / baseFontSize
}

export default RemConverter
