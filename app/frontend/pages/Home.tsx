import { Cast } from "@/lib/api/types"
import sdk from "@farcaster/miniapp-sdk"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import clsx from "clsx"
import { useEffect, useState } from "react"

export default function Home() {
  const [iUsername, setIUsername] = useState<string>("")
  const [dUsername, setDUsername] = useState<string>("")

  useEffect(() => {
    const timer = setTimeout(() => setDUsername(iUsername), 1500)
    return () => clearTimeout(timer)
  }, [iUsername])

  const { data, isLoading, isError } = useQuery<{ popular: Cast[]; casts: Cast[] }>({
    queryKey: ["casts", dUsername],
    queryFn: () => axios.get("/api/casts", { params: { username: dUsername } }).then(res => res.data),
    enabled: !!dUsername.length,
  })

  const popular = data?.popular
  const casts = data?.casts

  return (
    <main className={clsx("flex flex-col py-12 px-7", "overflow-x-hidden")}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search"
        role="searchbox"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        value={iUsername}
        className="w-full"
        onChange={e => {
          const val = e.target.value
          if (val.length <= 16) setIUsername(val)
        }}
      />

      <div className="pt-1">
        <h1>Popular</h1>

        <div className={clsx("flex flex-col gap-3")}>
          {popular
            ? popular.map((cast, i) => (
                <div
                  key={cast.hash + i}
                  className={clsx("bg-white text-black p-2 rounded-lg cursor-pointer")}
                  onClick={() => sdk.actions.viewCast({ hash: cast.hash })}
                >
                  <div className="truncate">
                    {i + 1}. {cast.text}
                  </div>
                  <div className="text-xs">
                    likes {cast.reactions.likes_count}, recasts {cast.reactions.recasts_count}, replies{" "}
                    {cast.replies.count}
                  </div>
                </div>
              ))
            : isLoading
            ? "loading..."
            : isError
            ? "error"
            : "..."}
        </div>

        <h1 className="pt-6">First Casts</h1>

        <div className={clsx("flex flex-col gap-3")}>
          {casts
            ? casts.map((cast, i) => (
                <div
                  key={cast.hash + i}
                  className={clsx("bg-white text-black p-2 rounded-lg cursor-pointer")}
                  onClick={() => sdk.actions.viewCast({ hash: cast.hash })}
                >
                  <div className="truncate">
                    {i + 1}. {cast.text}
                  </div>
                  <div className="text-xs">
                    likes {cast.reactions.likes_count}, recasts {cast.reactions.recasts_count}, replies{" "}
                    {cast.replies.count}
                  </div>
                </div>
              ))
            : isLoading
            ? "loading..."
            : isError
            ? "error"
            : "..."}
        </div>
      </div>
    </main>
  )
}

// import { Cast, Message } from "@/lib/api/types"
// import sdk from "@farcaster/miniapp-sdk"
// import { useQuery } from "@tanstack/react-query"
// import axios from "axios"
// import clsx from "clsx"
// import { useEffect, useState } from "react"

// export default function Home() {
//   const [iUsername, setIUsername] = useState<string>("")
//   const [dUsername, setDUsername] = useState<string>("")

//   useEffect(() => {
//     const timer = setTimeout(() => setDUsername(iUsername), 1500)
//     return () => clearTimeout(timer)
//   }, [iUsername])

//   const { data, isLoading } = useQuery<{ popular: Cast[]; casts: Message[] }>({
//     queryKey: ["casts", dUsername],
//     queryFn: () => axios.get("/api/casts", { params: { username: dUsername } }).then(res => res.data),
//     enabled: !!dUsername.length,
//   })

//   const popular = data?.popular
//   const casts = data?.casts

//   return (
//     <main className={clsx("flex flex-col py-12 px-7", "overflow-x-hidden")}>
//       <input
//         type="search"
//         name="search"
//         id="search"
//         placeholder="search"
//         role="searchbox"
//         autoComplete="off"
//         autoCorrect="off"
//         spellCheck={false}
//         value={iUsername}
//         className="w-full"
//         onChange={e => {
//           const val = e.target.value
//           if (val.length <= 16) setIUsername(val)
//         }}
//       />

//       <div className="pt-3">
//         <h1>Popular</h1>

//         <div className={clsx("flex flex-col gap-3")}>
//           {popular
//             ? popular.map((cast, i) => (
//                 <div
//                   className={clsx("bg-white text-black p-2 rounded-lg cursor-pointer")}
//                   onClick={() => sdk.actions.viewCast({ hash: cast.hash })}
//                 >
//                   {i + 1}. {cast.text.slice(0, 30)}...
//                 </div>
//               ))
//             : "..."}
//         </div>

//         <h1 className="pt-8">First Casts</h1>

//         <div className={clsx("flex flex-col gap-3")}>
//           {casts
//             ? casts.map((cast, i) => (
//                 <div
//                   className={clsx("bg-white text-black p-2 rounded-lg cursor-pointer")}
//                   onClick={() => sdk.actions.viewCast({ hash: cast.hash })}
//                 >
//                   {i + 1}. {cast.data.castAddBody.text.slice(0, 30)}...
//                 </div>
//               ))
//             : "..."}
//         </div>
//       </div>
//     </main>
//   )
// }
