import Link from "next/link"

const HomeBottomText = () => {
  return (
    <div className="font-myfont font-medium flex items-center justify-center gap-4 text-white">
      <Link className="text-[4vw] uppercase border-5 hover:text-[#D3FD50] hover:border-[#D3FD50] rounded-full py-2 md:pt-3.5 px-6" href='/project'>Work</Link>
      <Link className="text-[4vw] uppercase border-5 hover:text-[#D3FD50] hover:border-[#D3FD50] rounded-full py-2 md:pt-3 px-5" href='/agence'>Agency</Link>
    </div>
  )
}

export default HomeBottomText