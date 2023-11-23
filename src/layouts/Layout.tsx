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

  function createArray() {
    const iteration = screenHeight / 98
    const temp = []
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
    <div>
      <div className="emoji-list fixed mt-[-10px] my-[50px] -z-10 w-screen h-screen flex flex-col overflow-hidden">
        {iterator.map(() => {
          return (
            <div className="flex text-[48px] mt-[50px] gap-x-[50px]">
              {emojis.map(() => {
                return <div>{emojis[Math.floor(Math.random() * 31)]}</div>
              })}
            </div>
          )
        })}
      </div>
      <div className="w-screen h-screen fixed z-10 bg-white_tint"></div>
      <div className="w-screen absolute z-20">
        <div className="my-[30px] mx-[250px]">{children}</div>
      </div>
    </div>
  )
}

export default Layout
