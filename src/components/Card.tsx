type CardProps = {
  img_src: string
  img_alt?: string
  title: string
  short_desc: string
}

const opaque = {
  background: {
    backgroundColor: "white",
  },
}

function Card(props: CardProps) {
  return (
    <div
      className="frame flex flex-col items-center w-[367px] min-h-[579px] space-y-[30px] px-[24px] 
      py-[30px] border-solid border-2 rounded-[5px] border-border_color hover:cursor-pointer text-justify"
      style={opaque.background}
    >
      <div className="image w-[186px] h-[192px]">
        <img src={props.img_src} alt={props.img_alt} />
      </div>
      <div className="title font-cursive text-[30px] ">{props.title}</div>
      <div className="separator w-[317px] border-separator_color border-[1px]"></div>
      <div className="short-description font-sans text-[20px]">
        {props.short_desc}
      </div>
    </div>
  )
}

export default Card
