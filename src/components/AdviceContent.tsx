type AdviceContentProps = {
  heading: string
  deatil: string
  img_src: string
  img_alt: string
}

function AdviceContent(props: AdviceContentProps) {
  return (
    <div className="advice-frame font-cursive">
      <div className="heading lg:text-[48px] text-center lg:mt-[60px] lg:mb-[25px] text-[24px] mt-[30px] mb-[12.5px] text-primary_color">
        {props.heading}
      </div>
      <div className="detail font-sans lg:text-[32px] lg:mb-[60px] text-[16px] mb-[30px] text-justify">
        {props.deatil}
      </div>
      <div className="image flex justify-center">
        <img
          src={props.img_src}
          alt={props.img_alt}
          className="w-[240px] lg:w-[366px]"
        />
      </div>
    </div>
  )
}

export default AdviceContent
