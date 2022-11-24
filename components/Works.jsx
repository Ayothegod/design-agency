import Button from "./Button"
import work1 from '../asset/work-1.svg'
import work2 from '../asset/work-2.svg'
import work3 from '../asset/work-3.svg'
import Image from "next/image"
import {IoMdArrowRoundForward} from 'react-icons/io'

const Works = () => {
  return (
    <div className="mt-20  ">
        <div className="flex items-center justify-around mb-8">
            <div className="">
                <h1 className="text-4xl font-bold flex-1 ">Works.</h1>
                <p className="text-pink-500 text-[12px]">Check out our works</p>
            </div>
            <Button value='View All ' />
        </div>
        <div className="flex  items-center justify-center">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <Image src={work1} alt="image 1" className="w-60 h-60 "/>
                <Image src={work2} alt="image 1" className="w-60 h-60 "/>
                <Image src={work3} alt="image 1" className="w-60 h-60 "/>
            </div>
        </div>
    </div>
  )
}

export default Works