type AdviceContentProps = {
  heading: string
  deatil: string
  img_src: string
  img_alt: string
}

function AdviceContent(props: AdviceContentProps) {
  return (
    <div className="advice-frame font-cursive">
      <div className="heading">{props.heading}</div>
      <div className="detail font-sans">{props.deatil}</div>
      <div className="image">
        <img src={props.img_src} alt={props.img_alt} />
      </div>
      <div className="go-home-button">Go Home</div>
      <div className="back-button">Back</div>
      <div className="next-button">Next</div>
    </div>
  )
}

export default AdviceContent
