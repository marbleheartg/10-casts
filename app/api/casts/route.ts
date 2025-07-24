import { Cast, User } from "@/lib/api/types"
import delay from "@/lib/api/utils/delay"
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
      data: {
        user: { fid },
      },
    } = await api.get<{ user: User }>("/user/by_username", { params: { username } })

    const {
      data: { casts: popular },
    } = await api.get<{ casts: Cast[] }>("/feed/user/popular", { params: { fid } })

    let data = await api.get<{ casts: Cast[]; next: { cursor: string } }>("/feed/user/casts", {
      params: { fid, limit: 150, include_replies: false },
    })

    let cursor = data.data?.next?.cursor

    while (cursor) {
      await delay(200)

      data = await api.get<{ casts: Cast[]; next: { cursor: string } }>("/feed/user/casts", {
        params: { fid, limit: 150, include_replies: false, cursor },
      })

      cursor = data.data?.next?.cursor
    }

    const casts = data.data?.casts?.slice(-10).reverse()

    return NextResponse.json({ popular, casts })
  } catch (err) {
    console.error(err)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

// import { Cast, Message, User } from "@/lib/api/types"
// import axios from "axios"
// import { NextRequest, NextResponse } from "next/server"

// const api = axios.create({
//   baseURL: "https://api.neynar.com/v2/farcaster",
//   headers: { "x-api-key": process.env.NEYNAR_API_KEY },
// })

// export async function GET(req: NextRequest) {
//   try {
//     const username = req.nextUrl.searchParams.get("username")
//     if (!username) throw new Error("UsernameNotSpecified")

//     const {
//       data: {
//         user: { fid },
//       },
//     } = await api.get<{ user: User }>("/user/by_username", { params: { username } })

//     const {
//       data: { casts: popular },
//     } = await api.get<{ casts: Cast[] }>("/feed/user/popular", { params: { fid } })

//     const {
//       data: { messages },
//     } = await axios.get<{
//       messages: Message[]
//       nextPageToken: string
//     }>("https://hub-api.neynar.com/v1/castsByFid", {
//       params: { fid, pageSize: 100 },
//       headers: { "x-api-key": process.env.NEYNAR_API_KEY },
//     })

//     const casts = messages.filter(val => val.data.type === "MESSAGE_TYPE_CAST_ADD").slice(0, 10)

//     return NextResponse.json({ popular, casts })
//   } catch (err) {
//     console.error(err)
//     return new NextResponse("Internal Server Error", { status: 500 })
//   }
// }
