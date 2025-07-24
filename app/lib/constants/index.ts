const PROJECT_TITLE = "top 10"

const PROJECT_DESCRIPTION = "top 10 casts"

const MINIAPP = {
  version: "next",
  imageUrl: `https://${process.env.NEXT_PUBLIC_HOST}/images/og/cast/image.jpg`,
  aspectRatio: "3:2",
  button: {
    title: "launch",
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
