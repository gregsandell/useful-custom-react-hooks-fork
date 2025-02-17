import useAsync from "./useAsync"
export default function AsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = [true, false][Math.floor(Math.random() * 2)]
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error")
      }, 1000)
    })
  })

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>Error = {error}</div>
      <div>Value = {value}</div>
    </div>
  )
}
