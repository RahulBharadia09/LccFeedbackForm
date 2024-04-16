import React from "react";

const FeedBack = () => {
  return (
    <div className="flex  flex-col align-middle justify-center">
      
        <div className="py-2 bg-slate-100 text-center">
          <h2 className="text-xl font-semibold px-2 text-black-600">
            Customer Feedback Form
          </h2>
        </div>
        <div className=" py-1 text-center">
          <h2 className="text-2xl font-semibold px-2 text-red-600">
            Let's Connect Cafe and Restaurant 
          </h2>
        </div>

        <div>
            {/* <img src={zoma} alt="" /> */}
            {/* <img src={Swiigy} alt="" /> */}
        </div>

        <div className=" ">
            <p className="text-center text-sm">Please Select a rating out of the given options to describe your experience with us today !!</p>
        </div>
      
    </div>
  );
};

export default FeedBack;
