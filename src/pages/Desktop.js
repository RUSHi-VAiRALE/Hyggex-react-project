import "./desk.css"

const Desktop = () => {
  
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

  return (
    <div className="relative bg-whitesmoke w-full overflow-hidden flex flex-col items-center justify-start pt-[27px] px-5 pb-[307px] box-border gap-[64px] tracking-[normal] mq450:gap-[16px] mq675:gap-[32px]">
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
      <main className="w-[1236px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border gap-[64px] max-w-full text-center text-lg text-dimgray font-med mq450:gap-[16px] mq675:gap-[32px]">
        <div className="flex flex-row items-center justify-start [row-gap:20px] max-w-full mq675:flex-wrap">
          <div className="flex flex-row items-center justify-start">
            <img className="relative w-[30px] h-[30px] overflow-hidden shrink-0" loading="eager" alt="" src="/frame.svg" />
            <img className="relative w-6 h-6 overflow-hidden shrink-0" alt="" src="/frame-1.svg" />
            <div className="relative font-medium">Flashcard</div>
          </div>
          <div className="flex flex-row items-center justify-center [row-gap:20px] max-w-full mq450:flex-wrap">
            <img className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]" alt="" src="/frame-1.svg" />
            <div className="relative font-medium">Mathematics</div>
            <div className="flex flex-row items-center justify-start text-darkslateblue">
              <img className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]" alt="" src="/frame-1.svg" />
              <div className="relative font-semibold">Relation and Function</div>
            </div>
          </div>
        </div>
        <section className="w-[971px] flex flex-col items-start justify-start gap-[56px] max-w-full text-center text-[32px] text-dimgray font-montserrat mq675:gap-[28px]">
          <h2 className="m-0 relative text-inherit font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq450:text-lgi mq750:text-[26px]">Relations and Functions ( Mathematics )</h2>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-xl font-med">
            <div className="w-[712px] flex flex-col items-center justify-start gap-[32px] max-w-full mq750:gap-[16px]">
              <div className="w-[554px] flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border max-w-full shrink-0">
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq675:flex-wrap">
                  <div className="h-[29px] flex flex-col items-center justify-start gap-[14px] text-darkslateblue">
                    <b className="relative mq450:text-base">Study</b>
                    <div className="relative box-border w-[84px] h-0.5 border-t-[2px] border-solid border-darkslateblue" />
                  </div>
                  <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                    <div className="relative font-medium mq450:text-base">Quiz</div>
                    <div className="relative box-border w-[70px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
                  </div>
                  <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                    <div className="relative font-medium mq450:text-base">Test</div>
                    <div className="relative box-border w-[68px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
                  </div>
                  <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                    <div className="relative font-medium mq450:text-base">Game</div>
                    <div className="relative box-border w-[82px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
                  </div>
                  <div className="h-[29px] flex flex-col items-center justify-start gap-[14px]">
                    <div className="relative font-medium mq450:text-base">Others</div>
                    <div className="relative box-border w-[92px] h-0.5 border-t-[2px] border-solid border-whitesmoke" />
                  </div>
                </div>
              </div>
              <div className="h-[350px] self-stretch flex flex-row items-center justify-start relative shrink-0 text-center text-[38.3px] text-white font-lato">
                <div className="h-[350px] w-full flex flex-col items-start justify-end py-0 px-0 box-border">
                  <div className="w-full h-[350px] overflow-hidden flex flex-row items-center justify-end max-w-[Infinity%] shrink-0 bg-transparent flip-card">
                    <div className="relative w-full h-[350px] flex flex-col items-start justify-start py-0 px-0 box-border flip-card-inner">
                      <div className="absolute w-full h-[350px] rounded-[42.51px] [background:linear-gradient(222.94deg,_#071844,_#071844_3.95%,_#2d87b6_82.51%,_#2d87b6)] overflow-hidden flex flex-row items-start justify-between pt-[34px] px-[34px] pb-[172px] box-border gap-[20px] max-w-full mq450:flex-wrap mq450:pt-[22px] mq450:pb-28 mq450:box-border flip-card-back">
                          <img className="relative w-[30px] h-[30px]" loading="eager" alt="" src="/FrameBulb.svg" />
                          <div className="w-full h-[187px] flex flex-col items-center justify-center pt-[141px] px-0 pb-0 box-border">
                            <b className="self-stretch flex-1 relative tracking-[0.02em] mq450:text-[23px] mq750:text-[31px]">5x + 12</b>
                          </div>
                          <img className="relative w-[30px] h-[30px]" loading="eager" alt="" src="/Frame.svg" />
                        </div>
                        <div className="absolute w-full h-[350px] rounded-[42.51px] [background:linear-gradient(222.94deg,_#051A91,_#061C93_3.95%,_#2284F1_82.51%,_#1F80EB)] overflow-hidden flex flex-row items-start justify-between pt-[34px] px-[34px] pb-[172px] box-border gap-[20px] max-w-full mq450:flex-wrap mq450:pt-[22px] mq450:pb-28 mq450:box-border flip-card-front">
                          <img className="relative w-[30px] h-[30px]" loading="eager" alt="" src="/FrameBulb.svg" />
                          <div className="w-full h-[187px] flex flex-col items-center justify-center pt-[141px] px-0 pb-0 box-border">
                            <b className="self-stretch flex-1 relative tracking-[0.02em] mq450:text-[23px] mq750:text-[31px]">9 + 6 + 7x - 2x - 3</b>
                          </div>
                          <img className="relative w-[30px] h-[30px]" loading="eager" alt="" src="/Frame.svg" />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[612px] flex flex-row items-center justify-between gap-[20px] max-w-full shrink-0 text-[24px] text-darkslategray-200 mq450:flex-wrap mq450:justify-center">
                <img className="relative w-[30px] h-[30px]" loading="eager" alt="" src="/vector.svg" />
                <div className="w-[272px] flex flex-row items-center justify-start gap-[43px] mq450:gap-[21px]">
                  <img className="relative w-[60px] h-[60px] object-contain min-h-[60px]" alt="" src="/vector-1.svg" />
                  <b className="relative mq450:text-lgi">01/10</b>
                  <img className="relative w-[60px] h-[60px] min-h-[60px]" alt="" src="/vector-2.svg" />
                </div>
                <img className="relative w-[30px] h-[30px]" alt="" src="/vector-3.svg" />
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-center justify-between min-h-[171px] gap-[20px] text-left text-[12.4px] text-dimgray font-med mq675:flex-wrap">
          <div className="w-[217px] flex flex-row items-start justify-start py-5 px-0 box-border gap-[21px]">
            <div className="relative w-[80.6px] h-[80.6px] flex items-center justify-center">
              <img className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.769)]" loading="eager" alt="" src="/group-1@2x.png" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
              <b className="relative">Published by</b>
              <img className="self-stretch relative max-w-full overflow-hidden h-[34.5px] shrink-0 object-cover" alt="" src="/component-40-1@2x.png" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-5 px-0 gap-[8px] text-[28px]">
            <img className="relative w-[60px] h-[60px] overflow-hidden shrink-0" alt="" src="/frame-6.svg" />
            <h3 className="m-0 relative text-inherit font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[22px]">Create Flashcard</h3>
          </div>
        </section>
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
      </main>
    </div>);
};

export default Desktop;
