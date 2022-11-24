const Header = () => {
    const item = ["Home","Services","Works","About","Customer","Blog","Contact"]
  return (
    <div className="flex justify-between items-center h-[2rem]">
        <h1 className="font-semibold text-xl">Web Agency</h1>
        <ul className="hidden md:flex gap-8">
            {item.map((id) => ( 
                <li key={item} className=' cursor-pointer font-semibold hover:border-b-2 hover:border-pink-500 '>{id}</li> 
            ))}
        </ul>
    </div>
  )
}

export default Header