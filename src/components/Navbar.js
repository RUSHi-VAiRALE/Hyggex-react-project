import React from "react";


const Navbar = () =>{
    return(
        <header className="w-[1233px] flex flex-row items-center justify-between gap-[20px] max-w-full text-left text-lg text-darkslategray-100 font-med mq750:w-[708px]">
        <img className="relative w-[191px] h-[39px] object-cover" loading="eager" alt="" src="/component-40@2x.png" />
        <div className="flex flex-row items-center justify-start gap-[40px] max-w-full mq675:gap-[20px] mq750:hidden">
          <div className="w-[282px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative">Home</div>
            <div className="relative">Flashcard</div>
            <div className="relative">Contact</div>
          </div>
          <div className="relative">FAQ</div>
          <button className="cursor-pointer [border:none] p-[13px] bg-[transparent] rounded-[32px] [background:linear-gradient(180deg,_#06286e,_#164ec0)] w-32 flex flex-row items-center justify-center box-border">
            <div className="relative text-lg font-medium font-med text-white text-left">Login</div>
          </button>
        </div>
      </header>
    )
}

export default Navbar;