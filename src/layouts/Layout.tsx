function Layout({ children }: { children: React.ReactNode }) {
  const emojis = [
    "😀",
    "😁",
    "😅",
    "🤣",
    "😂",
    "🙃",
    "😉",
    "😊",
    "😇",
    "😍",
    "😘",
    "😋",
    "😜",
    "😝",
    "🤭",
    "😏",
    "🤤",
    "😴",
    "🥳",
    "🥸",
    "😎",
    "🤓",
    "😮",
    "😳",
    "🥹",
    "🥺",
    "😱",
    "😈",
    "😖",
    "😱",
    "😭",
  ]
  const backgroundImage = {
    addImage: {
      backgroundColor: "rgba(255,255,255,0.85)",
    },
  }

  emojis.map((emoji) => {
    console.log(emoji)
  })

  return (
    <>
      <div className="emoji-list fixed my-[30px] -z-10 w-screen h-screen flex text-[48px] gap-x-[60px] overflow-hidden">
        {emojis.map((emoji) => {
          return <div>{emoji}</div>
        })}
      </div>
      <div
        className="w-screen h-screen my-[30px] fixed z-10"
        style={backgroundImage.addImage}
      ></div>
      <main className="my-[30px] mx-[250px] absolute z-20">{children}</main>
    </>
  )
}

export default Layout
