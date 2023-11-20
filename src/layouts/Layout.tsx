import { useEffect, useState } from "react"

function Layout({ children }: { children: React.ReactNode }) {
  const screenHeight = window.screen.height
  const [iterator, setIterator] = useState([])
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

  function createArray() {
    const iteration = screenHeight / 98
    let temp = []
    for (let i = 0; i < iteration; i++) {
      temp.push(1)
    }
    setIterator(temp)
  }

  useEffect(() => {
    createArray()
  }, [])

  // emojis.map((emoji) => {
  //   console.log(emojis.length)
  // })

  return (
    <>
      <div className="emoji-list fixed mt-[-10px] my-[50px] -z-10 w-screen h-screen flex flex-col overflow-hidden">
        {iterator.map((i) => {
          return (
            <div className="flex text-[48px] mt-[50px] gap-x-[50px]">
              {emojis.map((emoji) => {
                return <div>{emojis[Math.floor(Math.random() * 30)]}</div>
              })}
            </div>
          )
        })}
      </div>
      <div
        className="w-screen h-screen fixed z-10"
        style={backgroundImage.addImage}
      ></div>
      <main className="my-[30px] mx-[250px] absolute z-20">{children}</main>
    </>
  )
}

export default Layout
