import clsx from "clsx"
import { useEffect } from "react"
import { updateStore } from "../../lib/store"

export default function Home() {
  useEffect(() => {
    updateStore({})
  }, [])

  return <main className={clsx("fixed top-50 bottom-0 inset-x-1/12", "text-center")}>Home page</main>
}
