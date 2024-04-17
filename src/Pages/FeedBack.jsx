import React from "react";
import RatingStar from "../Components/RatingStar";

const FeedBack = () => {
  function Submit(e) {
    const LCCFEEDBACK = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(LCCFEEDBACK);
    fetch(
      "https://script.google.com/macros/s/AKfycbyHWW7Qk-MeLiZaj0CdBjabIJ1rv8AnhkLwOnNT95v8SphHhR-ZsX0cG7vWll7I3UZA/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    LCCFEEDBACK.reset();
  }
  return (
    <div className="flex  flex-col align-middle justify-center">
      {/*  Text */}
      <div className="py-2 bg-slate-100 text-center">
        <h2 className="text-xl font-semibold px-2 text-black-600">
          Customer Feedback Form
        </h2>
      </div>
      {/* Brand Name */}
      <div className=" py-1 px-2 text-center">
        <h2 className="text-2xl font-semibold px-2 text-white bg-red-600 rounded-md ">
          Let's Connect Cafe and Restaurant
        </h2>
      </div>

      {/* Image */}
      <div>
        {/* <img src={zoma} alt="" /> */}
        {/* <img src={Swiigy} alt="" /> */}
      </div>

      {/* text */}
      <div className=" pb-2">
        <p className="text-center text-sm px-2">
          Please Select a rating out of the given options to describe your
          experience with us today !!
        </p>
      </div>

      <form
        method="POST"
        className="form contactform"
        onSubmit={(e) => Submit(e)}
        acceptCharset="utf-8"
        name="LCCFEEDBACK"
      >
        {/* Input  */}
        <div className="border-t ">
          <div className="flex flex-col px-2 py-2">
            <label htmlFor="name">Name </label>
            <input type="text" className="border " name="name" id="name" />
          </div>

          <div className="flex flex-col px-2 py-2">
            <label htmlFor="phonenumber">Phone Number </label>
            <input
              type="text"
              className="border "
              name="phonenumber"
              id="phonenumber"
            />
          </div>
        </div>

        {/* Rating Input by Star */}
        {/* <div className="px-2 border rounded-md m-2 ">
          <p className="py-1">How was our Service</p>
          <RatingStar />
        </div>
        <div className="px-2 border rounded-md m-2">
          <p className="py-1">How was our Ambience</p>
          <RatingStar />
        </div>
        <div className="px-2 border rounded-md m-2">
          <p className="py-1">How was our Food</p>
          <RatingStar />
        </div>
        <div className="px-2 border rounded-md m-2">
          <p className="py-1">How was our Cleanliness</p>
          <RatingStar />
        </div>
        <div className="px-2 border rounded-md m-2">
          <p className="py-1">How was your overall Experience</p>
          <RatingStar />
        </div> */}

        {/* Comments Input */}
        <div className="flex flex-col px-2 py-2">
          <label htmlFor="comments">Comments</label>
          <textarea
            cols={5}
            name="comments"
            id="comments"
            className="border"
          ></textarea>
        </div>

        {/* Submit Btn */}
        <div className="flex justify-center content-center py-2">
          <input
            type="Submit"
            className="bg-red-600 text-white px-2 py-2 rounded-lg text-center"
          />
        </div>

      </form>
    </div>
  );
};

export default FeedBack;
