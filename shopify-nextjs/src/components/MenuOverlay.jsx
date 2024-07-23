import React from "react";

const MenuOverlay = () => {
    return ( 
    <ul className="bg-white flex flex-col py-2 text-right">
    <li>
        <span className=" p-2 rounded-md">
        <a href="/" className="text-black">Home</a>
        </span>
    </li>
    <li>
    <span className=" p-2 rounded-md">
        <a href="/" className="text-black">Shop</a>
        </span>
    </li>
    <li>
    <span className="p-2 rounded-md">
        <a href="/" className="text-black">About</a>
        </span>
    </li>
    <li>
    <span className=" p-2 rounded-md">
        <a href="/" className="text-black">Contact</a>
        </span>
    </li>
    
</ul>)

}

export default MenuOverlay;