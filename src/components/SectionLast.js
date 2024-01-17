
import React from "react";

const SectionLast = () =>{

    const handleClick = () =>{
    const showText = document.getElementById("faqDiv1");
    if(showText.style.position === "absolute" && showText.style.visibility==="hidden"){
      showText.style.position = "relative"
      showText.style.visibility = "visible"
    }
    else{
      showText.style.position = "absolute"
      showText.style.visibility = "hidden"
    }
  }

  const handleClick1 = () =>{
    const showText = document.getElementById("faqDiv2");
    if(showText.style.position === "absolute" && showText.style.visibility==="hidden"){
      showText.style.position = "relative"
      showText.style.visibility = "visible"
    }
    else{
      showText.style.position = "absolute"
      showText.style.visibility = "hidden"
    }
  }

  const handleClick2 = () =>{
    const showText = document.getElementById("faqDiv3");
    if(showText.style.position === "absolute" && showText.style.visibility==="hidden"){
      showText.style.position = "relative"
      showText.style.visibility = "visible"
    }
    else{
      showText.style.position = "absolute"
      showText.style.visibility = "hidden"
    }
  }

    return(
        <section className="w-[848px] flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-[48px] text-gray font-med mq450:gap-[24px]">
          <h1 className="m-0 relative text-inherit tracking-[0.01em] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[29px] mq750:text-[38px]">FAQ</h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-base mq450:gap-[16px]">
            <div onClick={handleClick} className="self-stretch rounded-xl box-border overflow-hidden flex flex-col items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] max-w-full border-[1px] border-solid border-dodgerblue cursor-pointer">
              <div className="self-stretch rounded-xl box-border overflow-hidden relative flex flex-row justify-between gap-[20px] max-w-full">
                <div  className="relative leading-[26px] font-semibold">Can education flashcards be used for all age groups?</div>
                <img className="relative w-6 h-6 overflow-hidden shrink-0" alt="" src="/frame-7.svg" />
              </div>
              <div id="faqDiv1" className="absolute leading-[26px] font-boldlight">Yes, education fashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school student, high school students, and even for college-level and adult learners</div>
            </div>
            <div onClick={handleClick1} className="self-stretch rounded-xl overflow-hidden flex flex-col items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue cursor-pointer">
              <div className="self-stretch rounded-xl box-border overflow-hidden relative flex flex-row justify-between gap-[20px] max-w-full">
                <div className="relative leading-[26px] font-semibold">How do education flashcards work?</div>
              <img  className="relative w-6 h-6 overflow-hidden shrink-0" alt="" src="/frame-7.svg" />
              </div>
              <div id="faqDiv2" className="absolute leading-[26px] font-boldlight">Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other.Users can review the cards repeatedly reinforcing their memory and enhancing learning through repetition</div>
            </div>
            <div onClick={handleClick2} className="self-stretch rounded-xl overflow-hidden flex flex-col items-center justify-between py-[17px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue cursor-pointer">
              <div className="self-stretch rounded-xl box-border overflow-hidden relative flex flex-row justify-between gap-[20px] max-w-full">
                <div className="relative leading-[26px] font-semibold">Can education flashcards be used for test preparation?</div>
              <img className="relative w-6 h-6 overflow-hidden shrink-0" alt="" src="/frame-7.svg" />
              </div>
              <div id="faqDiv3" className="absolute leading-[26px] font-boldlight">Absolutely. Flashcard are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.</div>
            </div>
          </div>
        </section>
    )
}

export default SectionLast;