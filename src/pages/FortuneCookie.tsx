import AdviceContent from "../components/AdviceContent"
import { Link, useNavigate } from "react-router-dom"

function FortuneCookie() {
  let content_counter = 1
  const navigation = useNavigate()

  function previousContent() {
    const curr_div = document.getElementById(`content-${content_counter}`)
    const prev_div = document.getElementById(`content-${content_counter - 1}`)
    const next_button = document.getElementById("next")!
    // console.log(curr_div, prev_div, content_counter - 1)
    if (prev_div != null) {
      next_button.innerText = "Next"
      curr_div?.classList.add("hidden")
      prev_div?.classList.remove(`hidden`)
      content_counter -= 1
    }
  }

  function nextContent() {
    const curr_div = document.getElementById(`content-${content_counter}`)
    const next_div = document.getElementById(`content-${content_counter + 1}`)
    const after_next_div = document.getElementById(
      `content-${content_counter + 2}`
    )
    const next_button = document.getElementById("next")!
    // console.log(curr_div, next_div, content_counter + 1)
    if (next_button?.innerText === "Done") {
      navigation("/")
    }
    if (after_next_div === null) {
      // console.log(next_button)
      next_button.innerText = "Done"
    }
    if (next_div !== null) {
      curr_div?.classList.add("hidden")
      next_div?.classList.remove(`hidden`)
      content_counter += 1
    }
  }

  return (
    <div className="frame w-full h-full font-sans overflow-hidden">
      <div className="font-cursive lg:text-[64px] text-[32px] text-center">
        How to Navigate through Life Based on Fortune Cookie Advice
      </div>
      <div className="carousel flex">
        <div id="content-1" className="content-1">
          <AdviceContent
            heading="1 - Fortune Cookie Wonders"
            img_src="/src/assets/cookie.svg"
            img_alt="cookie"
            deatil="Don't underestimate the power of dessert with a surprise 
          message inside. Remember, while dining at your favorite Chinese spot,
          people anticipate the end — not for the bill, but for those magical fortune cookies!"
          />
        </div>
        <div id="content-2" className="hidden content-2">
          <AdviceContent
            heading="2 - The Art of Interpretation"
            img_src="/src/assets/the_art_of_interpetation.svg"
            img_alt="A hand holding fortune cookie"
            deatil={`The authentic way to navigate through life with fortune cookies is by interpreting each message creatively. If it says, "You'll have a fantastic journey," it absolutely means, "book a one-way trip to Hawaii." And when it reads, "Tomorrow will bring a delightful surprise," definitely put in a leave application. You don't want to ruin the surprise by being stuck at work!`}
          />
        </div>
        <div id="content-3" className="hidden content-3">
          <AdviceContent
            heading="3 - Sharing is Caring... or a Trap?"
            img_src="../src/assets/sharing_is_caring_or_a_trap.svg"
            img_alt="Kids sharing a fortune cookie"
            deatil="Some adhere to the belief of never sharing fortune cookies. But what if the 'Cookie of the Day' is the key to decode a prophecy? There's a simple solution to this — order extra cookies, but avoid squabbles over the ones foretelling the most cash. They are often misprints!"
          />
        </div>
        <div id="content-4" className="hidden content-4">
          <AdviceContent
            heading="4 - Cookie Fortune Luck vs Real Life"
            img_src="../src/assets/luck_vs_real_life.svg"
            img_alt="Fortune cookie wishing a good luck"
            deatil="Lastly, keep a sense of humor. If your cookie has no fortune — it doesn't mean you're fortune-less in life! Similarly, if there's a quote about wisdom, it doesn't mean take up philosophy. Silly cookie, it's confusing wisdom with wisdom teeth!"
          />
        </div>
        <div id="content-5" className="hidden content-5">
          <AdviceContent
            heading="In conclusion"
            img_src="../src/assets/fortune_cookie.svg"
            img_alt="Fortune cookie"
            deatil="Remember, life is all about the fun and laughter that comes along the way. And what's funnier than taking life advice from a cookie that can't even decide if it's a dessert or an appetizer!"
          />
        </div>
      </div>
      <div className="flex justify-between lg:mt-[60px] mt-[30px] font-cursive">
        <Link to="/">
          <button className="go-home-button lg:text-[48px] lg:w-[174px] text-[24px] w-[87px] border-primary_color border-solid rounded-[5px] border-[1px]">
            Go Home
          </button>
        </Link>
        <div className="flex lg:gap-[18px] gap-[9px]">
          <button
            id="back"
            onClick={() => previousContent()}
            className="back-button lg:text-[48px] lg:w-[174px] text-[24px] w-[87px] border-primary_color border-solid rounded-[5px] border-[1px]"
          >
            Back
          </button>
          <button
            id="next"
            onClick={() => nextContent()}
            className="next-button lg:text-[48px] text-[24px] w-[87px] bg-primary_color lg:w-[174px] rounded-[5px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default FortuneCookie
