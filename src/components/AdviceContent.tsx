type AdviceContentProps = {
  heading: string
  deatil: string
  img_src: string
  img_alt: string
}

function AdviceContent(props: AdviceContentProps) {
  return (
    <div className="advice-frame font-cursive">
      <div className="heading text-[48px] text-center mt-[60px] mb-[25px] text-primary_color">
        {props.heading}
      </div>
      <div className="detail font-sans text-[32px] mb-[60px] text-justify">
        {props.deatil}
      </div>
      <div className="image flex justify-center">
        <img src={props.img_src} alt={props.img_alt} width={"366px"} />
      </div>
    </div>
  )
}

export default AdviceContent
