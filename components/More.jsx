import customer from '../asset/customer.svg'
import team2 from '../asset/team-2.svg'
import team3 from '../asset/team-3.svg'
import Image from 'next/image'

const More = () => {
  return (
    <div className='flex flex-col items-center justify-center md:flex-row '>
        <div className='w-[50%] mr-10'>
            <Image src={customer} alt='customer' className=''/>
        </div>
        <div className='flex flex-col  item-center '>
            <main className='my-8'>
                <p className='text-4xl font-semibold' >What Customers Says.</p>
                <p className='text-pink-500 text-[10px] '>WE ARE MORE THAN A DIGITAL AGENCY</p>
            </main>
            <section className=' text-[12px] md:text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi natus voluptate ex, in totam, ipsum quod porro libero culpa maxime! Corrupti, nisi fugit corporis vero libero velit voluptas sed laboriosam tempora, consectetur et laborum inventore eos nesciunt vel nostrum sunt optio quaerat. Praesentium consequatur sunt nobis quam iure error illo aut nisi perferendis voluptate dignissimos quae cum in, culpa optio repellat eveniet expedita aliquid molestiae at.
            </section>
            <p className='text-pink-500 md:text-xl mt-2'>YLASI JULIEN, UX DESIGNER</p>
        </div>
    </div>
  )
}

export default More