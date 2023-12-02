import AdviceContent from "../components/AdviceContent"
import { Link } from "react-router-dom"

function FortuneCookie() {
  function PreviousContent() {}

  function NextContent() {}

  return (
    <div className="frame w-full h-full font-sans overflow-hidden">
      <div className="font-cursive text-[64px] text-center">
        How to Navigate through Life Based on Fortune Cookie Advice
      </div>
      <div className="carousel flex">
        <div className="content-1">
          <AdviceContent
            heading="1 - Fortune Cookie Wonders"
            img_src="/src/assets/cookie.svg"
            img_alt="cookie"
            deatil="Don't underestimate the power of dessert with a surprise 
          message inside. Remember, while dining at your favorite Chinese spot,
          people anticipate the end — not for the bill, but for those magical fortune cookies!"
          />
        </div>
        <div className="hidden content-2">
          <AdviceContent
            heading="2 - The Art of Interpretation"
            img_src="/src/assets/the_art_of_interpetation.svg"
            img_alt="A hand holding fortune cookie"
            deatil={`The authentic way to navigate through life with fortune cookies is by interpreting each message creatively. If it says, "You'll have a fantastic journey," it absolutely means, "book a one-way trip to Hawaii." And when it reads, "Tomorrow will bring a delightful surprise," definitely put in a leave application. You don't want to ruin the surprise by being stuck at work!`}
          />
        </div>
        <div className="hidden content-3">
          <AdviceContent
            heading="3 - Sharing is Caring... or a Trap?"
            img_src="/src/assets/sharing_is_caring_or_a_trap.svg"
            img_alt="Kids sharing a fortune cookie"
            deatil="Some adhere to the belief of never sharing fortune cookies. But what if the 'Cookie of the Day' is the key to decode a prophecy? There's a simple solution to this — order extra cookies, but avoid squabbles over the ones foretelling the most cash. They are often misprints!"
          />
        </div>
        <div className="hidden content-4">
          <AdviceContent
            heading="4 - Cookie Fortune Luck vs Real Life"
            img_src="/src/assets/luck_vs_real_life.svg"
            img_alt="Fortune cookie wishing a good luck"
            deatil="Lastly, keep a sense of humor. If your cookie has no fortune — it doesn't mean you're fortune-less in life! Similarly, if there's a quote about wisdom, it doesn't mean take up philosophy. Silly cookie, it's confusing wisdom with wisdom teeth!"
          />
        </div>
        <div className="hidden content-5">
          <AdviceContent
            heading="In conclusion"
            img_src="/src/assets/fortune_cookie.svg"
            img_alt="Fortune cookie"
            deatil="Remember, life is all about the fun and laughter that comes along the way. And what's funnier than taking life advice from a cookie that can't even decide if it's a dessert or an appetizer!"
          />
        </div>
      </div>
      <div className="flex justify-between mt-[60px] font-cursive">
        <Link to="/">
          <button className="go-home-button text-[48px] w-[174px] border-primary_color border-solid rounded-[5px] border-[1px]">
            Go Home
          </button>
        </Link>
        <div className="flex gap-[18px]">
          <button className="back-button text-[48px] w-[174px] border-primary_color border-solid rounded-[5px] border-[1px]">
            Back
          </button>
          <button className="next-button text-[48px] bg-primary_color w-[174px] rounded-[5px]">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default FortuneCookie
