import { Cast, User } from "@/lib/api/types"
import { store } from "@/lib/store"
import sdk from "@farcaster/miniapp-sdk"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import clsx from "clsx"
import { useEffect, useState } from "react"

enum CastsType {
  Popular,
  First,
}

export default function Home() {
  const { user } = store()

  const [iUsername, setIUsername] = useState<string>("")
  const [dUsername, setDUsername] = useState<string>("")

  useEffect(() => {
    if (user?.username) setDUsername(user.username)
  }, [user])

  useEffect(() => {
    if (!iUsername.length) return
    const timer = setTimeout(() => setDUsername(iUsername), 1500)
    return () => clearTimeout(timer)
  }, [iUsername])

  const { data, isLoading, isError } = useQuery<{ user: User; popular: Cast[]; casts: Cast[] }>({
    queryKey: ["casts", dUsername],
    queryFn: () => axios.get("/api/casts", { params: { username: dUsername } }).then(res => res.data),
    enabled: !!dUsername.length,
  })

  const { user: fUser, popular, casts } = data ?? {}

  const [castsType, setCastsType] = useState<CastsType>(CastsType.Popular)

  return (
    <main className={clsx("py-12 px-7")}>
      <div className="w-full relative">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="username"
          role="searchbox"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          value={iUsername}
          className="w-full outline-0"
          onChange={e => {
            const val = e.target.value
            if (val.length <= 20) setIUsername(val)
          }}
        />

        <img
          src={fUser?.pfp_url || "images/global/user.svg"}
          alt="pfp_url"
          className={clsx(
            "absolute right-2.5 top-1/2 -translate-y-1/2",
            "aspect-square w-7 rounded-full",
            "border border-black/50 cursor-pointer pointer-events-auto",
          )}
          onClick={() => {
            if (store.getState().capabilities?.includes("haptics.impactOccurred")) sdk.haptics.impactOccurred("medium")

            if (fUser?.fid) sdk.actions.viewProfile({ fid: fUser.fid })
          }}
        />
      </div>

      <h1 className={clsx("flex gap-x-3")}>
        <span
          className={clsx(castsType !== CastsType.Popular && "text-white/50", "cursor-pointer")}
          onClick={() => {
            if (store.getState().capabilities?.includes("haptics.impactOccurred")) sdk.haptics.impactOccurred("medium")
            setCastsType(CastsType.Popular)
          }}
        >
          Popular
        </span>
        <span
          className={clsx(castsType !== CastsType.First && "text-white/50", "cursor-pointer")}
          onClick={() => {
            if (store.getState().capabilities?.includes("haptics.impactOccurred")) sdk.haptics.impactOccurred("medium")
            setCastsType(CastsType.First)
          }}
        >
          First
        </span>
      </h1>

      <div
        className={clsx(
          "relative",
          "flex flex-wrap gap-[11px] rounded-xl",
          "border border-white/50 bg-black/80",
          "p-2.5",
        )}
      >
        {popular && casts ? (
          (castsType === CastsType.Popular ? popular : casts).map((cast, i) => (
            <div
              key={cast.hash + i}
              className={clsx(
                "relative flex flex-col bg-black rounded-lg cursor-pointer",
                "overflow-hidden aspect-square basis-[31%] last:flex-1 last:aspect-auto",
              )}
              onClick={() => {
                if (store.getState().capabilities?.includes("haptics.impactOccurred"))
                  sdk.haptics.impactOccurred("light")
                sdk.actions.viewCast({ hash: cast.hash })
              }}
            >
              <div className="h-full bg-white px-1 pt-1 pb-0.5 text-black text-[10px]">
                <div className="line-clamp-5 break-all">{cast.text}</div>
              </div>

              <div className="text-[10px] flex w-full text-white font-semibold text-center bg-black">
                <div className="basis-1/3 pt-0.5 pb-[1px] bg-[#b52d32] ">{cast.reactions.likes_count}</div>
                <div className="basis-1/3 pt-0.5 pb-[1px] bg-[#00a836] ">{cast.reactions.recasts_count}</div>
                <div className="basis-1/3 pt-0.5 pb-[1px] bg-[#6047a0] ">{cast.replies.count}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-white/50 py-10 pb-11 text-center text-lg font-bold pointer-events-none">
            {isLoading ? "loading" : isError ? "error" : "type username"}
          </div>
        )}
      </div>
    </main>
  )
}
