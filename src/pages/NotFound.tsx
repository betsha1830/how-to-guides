import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="">
      <div className="not-found font-cursive flex flex-col items-center">
        <div className="font-sans text-[48px]">Page not found! :(</div>
        <Link to={"/"}>
          <button className="text-[48px] bg-primary_color w-[174px] rounded-[5px] self-center">
            Go home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
