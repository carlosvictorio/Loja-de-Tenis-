import Link from "next/link"
import Image from "next/image"

const Card = ({ title, desc, price, imgUrl}) => {

  console.log(imgUrl)

  return (

    <div className="mt-4 h-[600px] relative">
        
        <Image className="mb-8 rounded-md shadow-xl" width="300" height="300" src={imgUrl}/>
        
        <h2 className="mb-3 text-gray-900 font-bold border-2 border-l-indigo-500 pl-1">{title}</h2>
        <p className="pb-2">{desc}</p>    

        <div className="w-full text text-center absolute bottom-0 flex flex-col gap-5 ">
          <h3 className="font-bold text-center">R${price}</h3>
          <Link className="bg-indigo-500 duration-500 hover:bg-gray-900 rounded-sm font-semibold text-white py-3" href="#">COMPRAR</Link>
        </div>
    </div>
  )
}

export default Card