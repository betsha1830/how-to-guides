import AdviceContent from "../components/AdviceContent"

function FortuneCookie() {
  return (
    <div className="frame w-full h-full font-sans">
      <div className="font-cursive text-[64px] text-center">
        How to Navigate through Life Based on Fortune Cookie Advice
      </div>
      <div className="carousel">
        <AdviceContent
          heading="1 - Fortune Cookie Wonders"
          img_src="/src/assets/cookie.svg"
          img_alt="cookie"
          deatil="Don't underestimate the power of dessert with a surprise 
          message inside. Remember, while dining at your favorite Chinese spot,
          people anticipate the end — not for the bill, but for those magical fortune cookies!"
        />
        {/* <AdviceContent />
        <AdviceContent />
        <AdviceContent />
        <AdviceContent /> */}
      </div>
    </div>
  )
}

export default FortuneCookie
