import React from "react";

const SectionLogo = () =>{
    return(
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
    )
}

export default SectionLogo;