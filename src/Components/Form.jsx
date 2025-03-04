import React, { useRef, useState } from "react";

const Form = () => {
  // Elements Control
  const step1 = useRef();
  const step2 = useRef();
  const step3 = useRef();
  const prev = useRef();
  const next = useRef();
  const submit = useRef();
  const btns = useRef();
  // Step Counter 
  const [Step, setStep] = useState(1);
  return (
    <div className="text-white">
      {/* Progress Bar */}
      <div
        id="progress-bar"
        className="flex flex-col gap-2.5 justify-center items-center mx-auto mt-8"
      >
        <header className="text-xl font-semibold">
          Fill out the details..
        </header>
        <div id="bar" className="text-gray-300">
          <p>
            Step <span>{Step}</span> of <span>3</span>
          </p>
        </div>
      </div>
      {/* Form Container */}
      <div
        id="form-container"
        className="p-4 w-[50vw] mx-auto mt-8 rounded-lg border border-slate-900 max-sm:w-[90vw]"
      >
        {/* Form 1 */}
        <div ref={step1}>
          <div id="form1" className="flex flex-col justify-start gap-3">
            <div className="flex flex-col justify-start items-start gap-1">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your first name..."
                className="w-full border border-gray-800 px-1.5 py-1.5 rounded-lg outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <label htmlFor="gender" className="font-semibold">
                Gender
              </label>
              <div className="flex flex-row items-center gap-2">
                <div>
                  <input type="radio" name="gender" id="male" />{" "}
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input type="radio" name="gender" id="female" />{" "}
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <label htmlFor="dob" className="font-semibold">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="w-full border border-gray-800 px-1.5 py-1.5 rounded-lg outline-none"
                required
              />
            </div>
          </div>
        </div>
        {/* Form 2 */}
        <div ref={step2} className="hidden">
          <div id="form2" className="flex flex-col justify-start gap-3">
            <div className="flex flex-col justify-start items-start gap-1">
              <label htmlFor="phone" className="font-semibold">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your phone number..."
                className="w-full border border-gray-800 px-1.5 py-1.5 rounded-lg outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address..."
                className="w-full border border-gray-800 px-1.5 py-1.5 rounded-lg outline-none"
                required
              />
            </div>
          </div>
        </div>
        {/* Form 3 */}
        <div ref={step3} className="hidden">
          <div id="form3" className="flex flex-col justify-start gap-3">
            <div className="flex flex-col justify-start items-start gap-1">
              <label htmlFor="username" className="font-semibold">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Your username..."
                className="w-full border border-gray-800 px-1.5 py-1.5 rounded-lg outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password..."
                className="w-full border border-gray-800 px-1.5 py-1.5 rounded-lg outline-none"
                required
              />
            </div>
          </div>
        </div>
      </div>
      {/* Buttons Container */}
      <div
        id="btns"
        className="w-[50vw] max-sm:w-[90vw] mx-auto mt-4 flex flex-row justify-center gap-2 items-center font-semibold"
        ref={btns}
      >
        <button
          className="bg-gray-900 w-full p-1.5 rounded-lg cursor-pointer hover:opacity-85 transition-all outline-none"
          ref={prev}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 w-full p-1.5 rounded-lg cursor-pointer hover:opacity-85 transition-all outline-none"
          ref={next}
        >
          Next
        </button>
        <button className="bg-blue-500 w-full p-1.5 rounded-lg cursor-pointer hover:opacity-85 transition-all outline-none hidden" ref={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
