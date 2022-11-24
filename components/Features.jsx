import { FaRegChartBar,FaTelegramPlane, FaChartPie} from 'react-icons/fa'

const Features = () => {
  return (
    <div className='flex items-center justify-center '>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='bg-[#1f1c1c] p-4 w-60 text-sm '>
            <FaRegChartBar className='text-pink-500 text-xl'/>
            <h1 className='font-semibold text-xl mt-6 mb-1 '>Future Design</h1>
            <p className='text-[#beb6b6]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quidem necessitatibus modi est adipisci corrupti vitae quisquam quasi praesentium atque!
            </p>
        </div>
        <div className='bg-[#1f1c1c] p-4 w-60 text-sm'>
            <FaTelegramPlane
            className='text-pink-500 text-xl'/>
            <h1 className='font-semibold text-xl mt-6 mb-1'>Product Design</h1>
            <p className='text-[#beb6b6]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quidem necessitatibus modi est adipisci corrupti vitae quisquam quasi praesentium atque!
            </p>
        </div>
        <div className='bg-[#1f1c1c] p-4 w-60 text-sm'>
            <FaChartPie
            className='text-pink-500 text-xl'/>
            <h1 className='font-semibold text-xl mt-6 mb-1'>Innovative Design</h1>
            <p className='text-[#beb6b6]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quidem necessitatibus modi est adipisci corrupti vitae quisquam quasi praesentium atque!
            </p>
        </div>
    </div>
    </div>
  )
}

export default Features