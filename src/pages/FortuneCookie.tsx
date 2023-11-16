import AdviceContent from "../components/AdviceContent"

type FortuneCookieProps = {
  title: string
}

function FortuneCookie(props: FortuneCookieProps) {
  return (
    <div className="frame w-full h-full">
      <div>{props.title}</div>
      <div className="carousel">
        <AdviceContent />
        <AdviceContent />
        <AdviceContent />
        <AdviceContent />
        <AdviceContent />
      </div>
      <div className="navigator">
        <button>Go Home</button>
        <button>Back</button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default FortuneCookie
