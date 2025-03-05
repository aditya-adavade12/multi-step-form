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
  const handleError = useRef();
  // Step Counter 
  const [Step, setStep] = useState(1);
  // Next Step Function
  const nextStep = (count) => {
    switch (count) {
      case 1:
        step1.current.style.display = "none";
        step2.current.style.display = "block";
        setStep(Step + 1);
        break;
      case 2:
        step2.current.style.display = "none";
        step3.current.style.display = "block";
        next.current.style.display = "none";
        submit.current.style.display = "block";
        setStep(3);
        break;
      default:
        console.log("Error");
        break;
    }
  }
  // Previous Step Function
  const prevStep = (count) => {
    if (count === 3) {
      step3.current.style.display = "none";
      step2.current.style.display = "block";
      next.current.style.display = "block";
      submit.current.style.display = "none";
      setStep(Step - 1);
    } else if (count === 2) {
      step2.current.style.display = "none";
      step1.current.style.display = "block";
      setStep(Step - 1);
    } else if (count === 1) {
      step1.current.style.display = "block";
      step2.current.style.display = "none";
      setStep(1);
    }
  }
  // Form Control
  const [Form, setForm] = useState({name: "", gender: "", dob: "", phone: "", email: "", username: "", password: ""})
  // Input Handler
  const inputHandler = (e) => {
    let {name, value} = e.target;
    setForm((prevValue) => ({
      ...prevValue, 
      [name] : value,
    }));
  }
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
        className="p-4 w-[50vw] mx-auto mt-8 rounded-lg border border-stone-900 max-sm:w-[90vw]"
      >
        {/* Error */}
        <div id="error" className="bg-red-800 py-1 mb-1.5 rounded-md font-semibold px-1.5 hidden" ref={handleError}>
        </div>
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
                value={Form.name}
                onChange={inputHandler}
                placeholder="Your first name..."
                className="w-full border border-stone-800 px-1.5 py-1.5 rounded-lg outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <label htmlFor="gender" className="font-semibold">
                Gender
              </label>
              <div className="flex flex-row items-center gap-2">
                <div>
                  <input type="radio" name="gender" id="male" onChange={inputHandler} value="Male" checked={Form.gender == "Male"} />{" "}
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input type="radio" name="gender" id="female" onChange={inputHandler} value="Female" checked={Form.gender == "Female"} />{" "}
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
                value={Form.dob}
                onChange={inputHandler}
                className="w-full border border-stone-800 px-1.5 py-1.5 rounded-lg outline-none"
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
                value={Form.phone}
                onChange={inputHandler}
                placeholder="Your phone number..."
                className="w-full border border-stone-800 px-1.5 py-1.5 rounded-lg outline-none"
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
                value={Form.email}
                onChange={inputHandler}
                placeholder="Your email address..."
                className="w-full border border-stone-800 px-1.5 py-1.5 rounded-lg outline-none"
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
                value={Form.username}
                onChange={inputHandler}
                placeholder="Your username..."
                className="w-full border border-stone-800 px-1.5 py-1.5 rounded-lg outline-none"
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
                value={Form.password}
                onChange={inputHandler}
                placeholder="Your password..."
                className="w-full border border-stone-800 px-1.5 py-1.5 rounded-lg outline-none"
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
          className="bg-stone-950 w-full p-1.5 rounded-lg cursor-pointer hover:opacity-85 transition-all outline-none"
          ref={prev}
          onClick={() => prevStep(Step)}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 w-full p-1.5 rounded-lg cursor-pointer hover:opacity-85 transition-all outline-none"
          ref={next}
          onClick={() => nextStep(Step)}
        >
          Next
        </button>
        <button className="bg-white text-black w-full p-1.5 rounded-lg cursor-pointer hover:opacity-85 transition-all outline-none hidden" ref={submit} onClick={() => console.log(Form)
        }>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
