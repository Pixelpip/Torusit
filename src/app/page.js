// pages/index.js
import Image from 'next/image';
import Link from 'next/link';
import {Agbalumo} from 'next/font/google';
import localFont from 'next/font/local';



const Agbal=Agbalumo({
  weight:['400'],
  subsets: ['latin'],
})

const sam=localFont({
  src:'./samarkand.ttf',
  display:'swap',
})

export default function Home() {
  return (
    <div>
      <section className="mt-[5px]">
        <Image
          src="https://img.freepik.com/premium-vector/mumbai-skyline-landscape-view-city-mumbai-with-characteristics-buildings-monuments_743272-109.jpg?w=4320"
          alt="Mumbai Skyline"
          className="w-[100vw] h-[100vh] fixed"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute w-full bottom-[5rem]">
          <div className="flex flex-col justify-center items-center sm:mb-[5rem] mb-[0rem]">
            <span className="text-[3rem]">Welcome,</span>
            <span className="text-[2rem]"> to</span>
            <h1 className={`${Agbal.className} text-[5rem] sm:ml-[25px] text-center`}>
              Karavali <span className={`${sam.className}`}>Yatra</span>
            </h1>
          </div>
          <div className="flex justify-center items-center sm:gap-[12rem] sm:h-[5.9rem] h-[11rem] sm:flex-row flex-col gap-[20px] ">
            <Link href="/places">
              <button
                className="text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]"
                type="button"
              >
                Places
              </button>
            </Link>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Karavali Yatra. All rights reserved.</p>
        <p>Contact Us: 123456789</p>
      </footer>
    </div>
  );
}
