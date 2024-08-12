
import Link from "next/link";
import Image from "next/image";
import CartIcon from "../Assets/icons/cart.svg"

const Navigation = () => {
  return (
    <nav id="nav" className="fixed mx-auto border-b border-black top-0 left-0 right-0 z-10 bg-white">
    <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="pl-4 flex items-center">
   <Link href="/" className="text-2xl md:text-5xl font-semibold">
        Meduri.co
   </Link>
   </div>
   <div className="flex items-center space-x-10">
   <Link href="/Shop">
   Shop
   </Link>
   <Link href="/About">
   About</Link>
   <Link href="/Contact">
   Contact</Link>
   <Link href="/Cart">
    <Image 
    src={CartIcon}
    alt="cart"
    height={30}
    width={35}/>
   </Link>
   </div>

   </div>
   </nav>
  );
};

export default Navigation;