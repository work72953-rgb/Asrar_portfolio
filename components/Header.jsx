import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  return (
    <div className={`h-20 w-full bg-[#000000d7] text-white
    flex justify-between items-center p-5
    `}>
    <span className={`text-3xl font-bold`}>أسرار</span>
        {/* <Image width={150} height={150} src={'/logo.png'} alt="logo"/> */}
        <nav className={` p-1 flex justify-center items-center gap-5 `}>
        <Link href='/About'>عني</Link>
        <Link href='/'>سابقة أعمالي</Link>
        </nav>
    </div>
  )
}
