import React, { useRef, useState } from "react";

const MultiStep = () => {
  // Elements Control
  const step1 = useRef(null);
  const step2 = useRef(null);
  const step3 = useRef(null);
  const prev = useRef(null);
  const next = useRef(null);
  const submit = useRef(null);
  const btns = useRef(null);
  const handleConditionError = useRef(null);
  const handleError = useRef(null);
  const passwordRef = useRef(null);
  const showRes = useRef(null);
  // Step Counter
  const [Step, setStep] = useState(1);
  // Next Step Function
  const nextStep = (count) => {
    if (!validForm(Step)) return;
    switch (count) {
      case 1:
        step1.current.style.display = "none";
        step2.current.style.display = "block";
        setStep((prevState) => prevState + 1);
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
  };
  // Previous Step Function
  const prevStep = (count) => {
    if (count === 3) {
      step3.current.style.display = "none";
      step2.current.style.display = "block";
      next.current.style.display = "block";
      submit.current.style.display = "none";
      setStep((prevState) => prevState - 1);
    } else if (count === 2) {
      step2.current.style.display = "none";
      step1.current.style.display = "block";
      setStep((prevState) => prevState - 1);
    } else if (count === 1) {
      step1.current.style.display = "block";
      step2.current.style.display = "none";
      setStep(1);
    }
  };
  // Form
  const [Form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });
  // Error Handling
  const [Error, setError] = useState("");
  const [ConditionError, setConditionError] = useState("");
  // Form Validater
  const validForm = (counter) => {
    if (counter == 1) {
      if (!Form.name || !Form.dob || !Form.gender) {
        handleError.current.style.display = "block";
        setError("Please Fill the Details!");
        return false;
      } else {
        handleError.current.style.display = "none";
      }
    }
    if (counter == 2) {
      if (!Form.phone || !Form.email) {
        handleError.current.style.display = "block";
        setError("Please Fill the Details!");
        return false;
      } else {
        handleError.current.style.display = "none";
      }
    }
    if (counter == 3) {
      if (!Form.username || !Form.password) {
        handleError.current.style.display = "block";
        setError("Please Fill the Details!");
        return false;
      } else {
        handleError.current.style.display = "none";
      }
    }
    return true;
  };
  // Input Handler
  const inputHandler = (e) => {
    // Setting the value to Form and User input field
    let { name, value } = e.target;
    setForm((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  // Condition Checker
  // Username and Name
  const nameCheck = (e) => {
    let regExp = /^[a-zA-Z0-9]+$/;
    let isValid = e.target.value;
    let checkValue = regExp.test(isValid);
    if (!checkValue) {
      handleConditionError.current.style.display = "block";
      setConditionError("Only letters & numbers allowed!");
    } else {
      handleConditionError.current.style.display = "none";
    }
  };
  // Number Check
  const phoneCheck = (e) => {
    let regExp = /^[0-9]{10}$/;
    let isValid = e.target.value;
    let checkValue = regExp.test(isValid);
    if (!checkValue) {
      handleConditionError.current.style.display = "block";
      setConditionError("Invalid number!");
    } else {
      handleConditionError.current.style.display = "none";
    }
  };
  // Email check
  const emailCheck = (e) => {
    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = e.target.value;
    let checkValue = regExp.test(isValid);
    if (!checkValue) {
      handleConditionError.current.style.display = "block";
      setConditionError("Invalid email address!");
    } else {
      handleConditionError.current.style.display = "none";
    }
  };
  // Password Check
  const passwordCheck = (e) => {
    let regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/;
    let isValid = e.target.value;
    let checkValue = regExp.test(isValid);
    if (!checkValue) {
      handleConditionError.current.style.display = "block";
      setConditionError("Password must include at least one special character");
    } else if (isValid.length < 6) {
      handleConditionError.current.style.display = "block";
      setConditionError("Password must be at least 6 characters long.");
    } else {
      handleConditionError.current.style.display = "none";
    }
  };
  // Password Visibility
  const trackVisible = () => {
    if (passwordRef.current.type == "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };
  // Show Response
  const submitForm = () => {
    if (!Form.name || !Form.dob || !Form.email || !Form.gender || !Form.password || !Form.phone || !Form.username) {
      handleError.current.style.display = "block";
      setError("Please Fill the Details!");
    } else {
      showRes.current.style.display = "block";
    }
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
        {/* Normal Error */}
        <div className="hidden" ref={handleError}>
          <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-2 font-medium text-red-500 shadow-sm mb-2.5">
            <span className="material-symbols-outlined text-base">
              error_outline
            </span>
            <span>{Error}</span>
          </div>
        </div>
        {/* Conditional Error */}
        <div className="hidden" ref={handleConditionError}>
          <div className="flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 p-2 font-medium text-blue-500 shadow-sm mb-2.5">
            <span className="material-symbols-outlined text-base">
              error_outline
            </span>
            <span>{ConditionError}</span>
          </div>
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
                onInput={nameCheck}
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
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    onChange={inputHandler}
                    value="Male"
                    checked={Form.gender == "Male"}
                  />{" "}
                  <label htmlFor="male" className="cursor-pointer">
                    Male
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    onChange={inputHandler}
                    value="Female"
                    checked={Form.gender == "Female"}
                  />{" "}
                  <label htmlFor="female" className="cursor-pointer">
                    Female
                  </label>
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
                onInput={phoneCheck}
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
                onInput={emailCheck}
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
                onInput={nameCheck}
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
              <div className="flex flex-row items-center gap-1 w-full">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={Form.password}
                  ref={passwordRef}
                  onInput={passwordCheck}
                  onChange={inputHandler}
                  placeholder="Your password..."
                  className="w-full border border-stone-800 px-1.5 py-1.5 rounded-lg outline-none"
                  required
                />
                <span
                  className="flex opacity-85 cursor-pointer border border-stone-800 px-1.5 py-1.5 rounded-lg outline-none hover:opacity-100 transition-all"
                  onClick={trackVisible}
                >
                  <span className="flex material-symbols-outlined">
                    visibility
                  </span>
                </span>
              </div>
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
          className="bg-stone-900 w-full p-1.5 rounded-lg cursor-pointer hover:opacity-85 transition-all outline-none"
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
        <button
          className="bg-white text-black w-full p-1.5 rounded-lg cursor-pointer hover:opacity-85 transition-all outline-none hidden"
          ref={submit}
          onClick={submitForm}
        >
          Submit
        </button>
      </div>
      {/* Response Data */}
      <div id="show-data" className="w-[50vw] mx-auto mt-8 border border-stone-800 p-2 rounded-lg hidden" ref={showRes}>
        <h2 className="font-semibold text-xl">Your Response :</h2>
        <div className="mt-1.5 flex flex-row w-full gap-2.5">
          <ol id="name" className="flex flex-col gap-1.5 w-full">
            <li className="bg-stone-900/45 font-medium text-gray-200 py-1 px-1.5 inline">Name</li>
            <li className="bg-stone-900/45 font-medium text-gray-200 py-1 px-1.5 inline">Date of Birth</li>
            <li className="bg-stone-900/45 font-medium text-gray-200 py-1 px-1.5 inline">Gender</li>
            <li className="bg-stone-900/45 font-medium text-gray-200 py-1 px-1.5 inline">Phone no</li>
            <li className="bg-stone-900/45 font-medium text-gray-200 py-1 px-1.5 inline">Email Address</li>
            <li className="bg-stone-900/45 font-medium text-gray-200 py-1 px-1.5 inline">Username</li>
            <li className="bg-stone-900/45 font-medium text-gray-200 py-1 px-1.5 inline">Password</li>
          </ol>
          <ol id="value" className="flex flex-col gap-1.5 w-full font-semibold">
            <li className="text-white py-1 px-1.5 inline">{Form.name}</li>
            <li className="text-white py-1 px-1.5 inline">{Form.dob}</li>
            <li className="text-white py-1 px-1.5 inline">{Form.gender}</li>
            <li className="text-white py-1 px-1.5 inline">{Form.phone}</li>
            <li className="text-white py-1 px-1.5 inline">{Form.email}</li>
            <li className="text-white py-1 px-1.5 inline">{Form.username}</li>
            <li className="text-white py-1 px-1.5 inline">{Form.password}</li>
          </ol>
        </div>
      <div className="mt-2.5">
        <button className="bg-stone-900 font-medium text-white w-full p-1.5 rounded-lg cursor-pointer hover:opacity-85 transition-all outline-none" onClick={() => window.location.reload()}>Refresh Page</button>
      </div>
      </div>
    </div>
  );
};
export default MultiStep;
