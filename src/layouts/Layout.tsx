import { useEffect, useState } from "react"

function Layout({ children }: { children: React.ReactNode }) {
  const screenHeight = window.screen.height
  const [iterator, setIterator] = useState<number[]>([])
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
    const iteration = screenHeight / 49 // total gap+text_size between emojis
    const temp = []
    for (let i = 0; i < iteration; i++) {
      temp.push(1)
    }
    setIterator(temp)
  }

  useEffect(() => {
    createArray()
  }, [])

  return (
    <div>
      <div className="emoji-list fixed space-y-[15px] lg:mt-[-10px] lg:my-[50px] md:mt-[-10px] md:my-[50px] -z-10 w-screen h-screen flex flex-col overflow-hidden">
        {iterator.map(() => {
          return (
            <div className="flex text-[24px] mt-[15px] gap-x-[50px] lg:text-[48px] lg:mt-[50px] lg:gap-x-[50px]">
              {emojis.map(() => {
                return <div>{emojis[Math.floor(Math.random() * 31)]}</div>
              })}
            </div>
          )
        })}
      </div>
      <div className="w-screen h-screen fixed z-10 bg-white_tint"></div>
      <div className="w-screen absolute z-20">
        <div className="lg:my-[30px] lg:mx-[250px] mx-[39px] my-[15px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
