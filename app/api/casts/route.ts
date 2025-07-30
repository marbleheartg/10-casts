import { Cast, Message, User } from "@/lib/api/types"
import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

const api = axios.create({
  baseURL: "https://api.neynar.com/v2/farcaster",
  headers: { "x-api-key": process.env.NEYNAR_API_KEY },
})

export async function GET(req: NextRequest) {
  try {
    const username = req.nextUrl.searchParams.get("username")
    if (!username) throw new Error("UsernameNotSpecified")

    const {
      data: { user },
    } = await api.get<{ user: User }>("/user/by_username", { params: { username } })

    const fid = user.fid

    const {
      data: { casts: popular },
    } = await api.get<{ casts: Cast[] }>("/feed/user/popular", { params: { fid } })

    const {
      data: { messages },
    } = await axios.get<{ messages: Message[] }>("https://hub-api.neynar.com/v1/castsByFid", {
      params: { fid, pageSize: 50 },
      headers: { "x-api-key": process.env.NEYNAR_API_KEY },
    })

    const {
      data: {
        result: { casts },
      },
    } = await api.get<{ result: { casts: Cast[] } }>("/casts", {
      params: {
        casts: messages
          .filter(val => val.data.type === "MESSAGE_TYPE_CAST_ADD")
          .slice(0, 10)
          .map(val => val.hash)
          .join(","),
      },
    })

    return NextResponse.json({ user, popular, casts })
  } catch (err) {
    console.error(err)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
