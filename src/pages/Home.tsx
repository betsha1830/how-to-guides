import { Link } from "react-router-dom"
import Card from "../components/Card"

function Home() {
  return (
    <div className="lg:space-y-[60px] space-y-[15px]">
      <h1 className="text-center lg:text-[64px] text-[32px] font-cursive">
        How-to guides
      </h1>
      <div className="lg:text-[32px] text-[16px] font-sans text-justify">
        Welcome, dear Wanderers of Wit, to our uproarious universe of uniquely
        unconventional wisdom! You've just donned your invisible cloak and
        stepped foot into a treasure trove of 'how-to' knowledge, coated with a
        robust, crunchy layer of humor. Hold onto your funny bones, because
        they're about to be tickled and tested like never before!
      </div>
      <div className="flex flex-wrap lg:gap-x-[117px] lg:gap-y-[60px] gap-y-[40px] gap-x-[58px] justify-center md:justify-between lg:justify-between">
        <Link to={"/fortuneCookie"}>
          <Card
            img_src="../src/assets/fortune_cookie_banner_img.png"
            img_alt="Fortune Cookie"
            title="How to Navigate through Life Based on Fortune Cookie Advice"
            short_desc="Welcome to the whimsical world of fortune cookie wisdom! 
          Get ready to embark on a journey filled with surprises, laughter, and a dash of interpretive creativity."
          />
        </Link>
        {/* <Card img_src="" img_alt="" title="" short_desc="" />
        <Card img_src="" img_alt="" title="" short_desc="" /> */}
      </div>
    </div>
  )
}

export default Home
