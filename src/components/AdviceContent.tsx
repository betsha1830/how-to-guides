type AdviceContentProps = {
  heading: string
  deatil: string
  img_src: string
  img_alt: string
}

function AdviceContent(props: AdviceContentProps) {
  return (
    <div className="advice-frame font-cursive ">
      <div className="heading text-[48px] text-center mt-[60px] mb-[25px] text-primary_color">
        {props.heading}
      </div>
      <div className="detail font-sans text-[32px] mb-[60px] text-justify">
        {props.deatil}
      </div>
      <div className="image flex justify-center">
        <img src={props.img_src} alt={props.img_alt} width={"366px"} />
      </div>
      <div className="flex justify-between mt-[60px]">
        <button className="go-home-button text-[48px] w-[174px] border-primary_color border-solid rounded-[5px] border-[1px]">
          Go Home
        </button>
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

export default AdviceContent
