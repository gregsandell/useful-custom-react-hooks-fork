import { useRef } from "react"
import useSize from "./useSize"

export default function SizeComponent() {
  const ref = useRef()
  const size = useSize(ref)

  return (
    <>
      <div>{JSON.stringify(size)}</div>
        <button >foo</button>
      <textarea ref={ref}></textarea>
    </>
  )
}
