import new1 from '../asset/news-1.svg'
import new2 from '../asset/news-2.svg'
import new3 from '../asset/news-3.svg'
import Image from 'next/image'

const News = () => {
  return (
    <div className="mt-20 ">
        <div className='text-center mb-8'>
            <p className='text-4xl font-bold'>Latest News.</p>
            <p className='text-[10px] text-pink-500'>Check out some of our publication</p>
        </div>
        <div className='flex items-center justify-center'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            <div className=' w-96 h-96 relative '>
                <Image src={new1} alt='newsimage' className='h-96 w-96'/>
                <p className=' absolute bottom-6 ml-2 font-semibold'>CAREERS</p>
                <p className='absolute bottom-2 ml-2 text-[12px] '>How to be successful in a digital agency</p>
            </div>
            <div className=' w-96 h-96 relative '>
                <Image src={new2} alt='newsimage' className='h-96 w-96'/>
                <p className=' absolute bottom-6 ml-2 font-semibold'>Web Devloper</p>
                <p className='absolute bottom-2 ml-2 text-[12px] '>How to be successful in a digital agency</p>
            </div>
            <div className=' w-96 h-96 relative '>
                <Image src={new3} alt='newsimage' className='h-96 w-96'/>
                <p className=' absolute bottom-6 ml-2 font-semibold'>UI Designer</p>
                <p className='absolute bottom-2 ml-2 text-[12px] '>How to be successful in a digital agency</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default News