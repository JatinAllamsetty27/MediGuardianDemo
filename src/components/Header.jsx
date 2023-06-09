import React from 'react'
import { useLocation,useNavigate } from 'react-router'
export default function Header() {
    const location=useLocation();
    const navigate=useNavigate();
    console.log(location.pathname);
    function pathMathRoute(route){
        if(route===location.pathname){
            return true
        }
    }
  return (
    <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="bg-white border-b shadow-sm sticky top-0 z-50">
            <img src="https://www.medibuddy.in/assets/logos/medibuddyWithName.svg" alt="logo" className="h-5 cursor-pointer "onClick={()=>navigate("/")}/>
        </div>
        <div>
            <ul className="flex space-x-10">
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/Services") && "text-black border-b-red-500"}`} onClick={()=>navigate("/Services")}>Services</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={()=>navigate("/sign-in")}>Sign In</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={()=>navigate("/About")}>About</li>
            </ul>
        </div>
    </header>
  )
}
