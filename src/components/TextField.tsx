import React, { useState, useRef } from 'react'

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [text, setText] = useState<TextNode>()
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
      <p>{text}</p>
    </div>
  )
}

interface Props {
  text: string
  ok?: boolean
  i?: number
  fn?: (bob: string) => string
  person: Person
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface Person {
  firstName: string
  lastName: string
}

interface TextNode {
  text: string
}
