type CardProps = {
  img_src: string
  img_alt?: string
  title: string
  short_desc: string
}

function Card(props: CardProps) {
  return (
    <div
      className="frame flex flex-col items-center w-[195px] min-h[311px] space-y-[15px] py-[15px] px-[13px] lg:w-[367px] lg:min-h-[579px] lg:space-y-[30px] lg:px-[24px] 
      lg:py-[30px] border-solid border-2 rounded-[5px] border-border_color hover:cursor-pointer text-justify bg-[white]"
    >
      <div className="image w-[93px] h-[96px] lg:w-[169px] lg:h-[192px]">
        <img src={props.img_src} alt={props.img_alt} />
      </div>
      <div className="title font-cursive text-[15px] lg:text-[30px] ">
        {props.title}
      </div>
      <div className="separator w-[158px] lg:w-[317px] border-separator_color border-[1px]"></div>
      <div className="short-description font-sans text-[10px] lg:text-[20px]">
        {props.short_desc}
      </div>
    </div>
  )
}

export default Card
