import Button from "./Button"
import Image from "next/image"
import Profile from '../asset/profile.svg'

const LandingPage = () => {
  return (
    <div className="flex flex-col  items-center justify-evenly my-12 md:my-20 md:h-[calc(100vh-200px)] md:flex-row ">
        <div className="my-8">
            <h1 className="text-xl font-bold md:text-3xl mb-1 md:mb-8 ">We are a digital designer <br /> Agency</h1>
            <Button value='Getting Started'/>
        </div>
        <div>
            <Image src={Profile} className=' h-60 w-60 md:h-72 md:w-72 ' alt="Profile image"/>
        </div>
    </div>
  )
}

export default LandingPage