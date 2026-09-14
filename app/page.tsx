import Image from "next/image";
import { MenuLandingPage } from "./components/landing-page-menu/page"; 

export default function Home() {
  return (
  <main className="flex flex-1 w-full min-h-screen bg-white dark:bg-black">
    {/* Tambahkan "relative z-50" di baris bawah ini */}
    <div className="relative z-50 w-full h-[80px] bg-blue-800 dark:bg-blue-800 rounded-[70px] flex items-center justify-between px-10 mt-4 mx-8">
      <div className="relative w-[230px] h-[50px]">
        <Image 
          src="/img/smk_mvp_ars_logo_white.png" 
          alt="Logo" 
          fill 
          className="object-contain object-left" 
        />
      </div>
      <MenuLandingPage />
    </div>
  </main>
  );
}