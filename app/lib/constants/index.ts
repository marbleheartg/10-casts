const PROJECT_TITLE = "10 casts"

const PROJECT_DESCRIPTION = "explore and collect"

const MINIAPP = {
  version: "next",
  imageUrl: `https://${process.env.NEXT_PUBLIC_HOST}/images/og/cast.jpg`,
  aspectRatio: "3:2",
  button: {
    title: "collect",
    action: {
      type: "launch_miniapp",
      url: `https://${process.env.NEXT_PUBLIC_HOST}`,
      name: PROJECT_TITLE,
      splashImageUrl: `https://${process.env.NEXT_PUBLIC_HOST}/images/og/splash.png`,
      splashBackgroundColor: "#000000",
    },
  },
}

export { MINIAPP, PROJECT_DESCRIPTION, PROJECT_TITLE }
