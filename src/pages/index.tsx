import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className='w-[50%] mx-auto mt-[5%] bg-zinc-800 flex gap-[20px]'>
        <Link className=' rounded-md text-gray-300' href='/'>
          Home
        </Link>
        <Link className='rounded-md text-gray-300' href='/about'>
          About
        </Link>
      </div>
  );
}
