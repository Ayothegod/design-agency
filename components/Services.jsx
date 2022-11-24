import {IoMdArrowRoundForward} from 'react-icons/io'

const Services = () => {
  return (
    <div className=' '>
        <div className='my-8 text-center'>
            <h1 className='text-3xl font-semibold '>Services</h1>
            <p className='text-xs text-pink-500 font-light'>WE WORK WITH YOU, FOR YOU.</p>
        </div>
        <div className=' flex items-center justify-center '>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className="flex items-center p-4 border gap-8 w-60 bg-[#1f1c1c] hover:bg-pink-500">
                    <div>DIGITAL STRATEGY</div>
                    <IoMdArrowRoundForward/>
                </div>
                <div className="flex items-center p-4 border gap-8 w-60 bg-[#1f1c1c] hover:bg-pink-500">
                    <div>UI Design</div>
                    <IoMdArrowRoundForward/>
                </div>
                <div className="flex items-center p-4 border gap-8 w-60 bg-[#1f1c1c] hover:bg-pink-500">
                    <div>Product Design</div>
                    <IoMdArrowRoundForward/>
                </div>
                <div className="flex items-center p-4 border gap-8 w-60 bg-[#1f1c1c] hover:bg-pink-500">
                    <div>Content Strategy</div>
                    <IoMdArrowRoundForward/>
                </div>
                <div className="flex items-center p-4 border gap-8 w-60 bg-[#1f1c1c] hover:bg-pink-500">
                    <div>Design & Concept</div>
                    <IoMdArrowRoundForward/>
                </div>
                <div className="flex items-center p-4 border gap-8 w-60 bg-[#1f1c1c] hover:bg-pink-500">
                    <div>Social Media</div>
                    <IoMdArrowRoundForward/>
                </div>
                <div className="flex items-center p-4 border gap-8 w-60 bg-[#1f1c1c] hover:bg-pink-500">
                    <div>Media Planning</div>
                    <IoMdArrowRoundForward/>
                </div>
                <div className="flex items-center p-4 border gap-8 w-60 bg-[#1f1c1c] hover:bg-pink-500">
                    <div>Brand Identity</div>
                    <IoMdArrowRoundForward/>
                </div>
                <div className="flex items-center p-4 border gap-8 w-60 bg-[#1f1c1c] hover:bg-pink-500">
                    <div>SEO Optimization</div>
                    <IoMdArrowRoundForward/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services