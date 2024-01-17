import React from "react";

const SectionMiddle = () =>{
    return(
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
    )
}

export default SectionMiddle;