import clientErrorHandling from "@/lib/clientErrorsReporting"
import Providers from "@/lib/providers"
import { updateStore } from "@/lib/store"
import sdk from "@farcaster/miniapp-sdk"
import clsx from "clsx"
import { useEffect } from "react"
import Home from "./pages/Home"

export default function App() {
  useEffect(() => {
    clientErrorHandling()
    ;(async function () {
      try {
        const { user, client } = await sdk.context

        const capabilities = await sdk.getCapabilities()

        updateStore({ user, client, capabilities })
      } catch (error) {}

      await sdk.actions.ready({ disableNativeGestures: true }).catch(() => {})
    })()
  }, [])

  return (
    <div onDragStart={e => e.preventDefault()}>
      <Providers>
        <Home />
        <img
          src="/images/global/bg.svg"
          alt="bg"
          className={clsx("fixed top-0 left-0 w-screen h-screen object-fill -z-10")}
        />
      </Providers>
    </div>
  )
}
