import React from "react";

const PathName = () =>{
    return (
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
    )
}

export default PathName;