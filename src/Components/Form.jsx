import React from "react";

const Form = () => {
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
            Step <span>1</span> of <span>4</span>
          </p>
        </div>
      </div>
      {/* Form Container */}
      <div id="form-container" className="p-4 w-[50vw] mx-auto mt-8 rounded-lg border border-slate-900">
        <div id="form1" className="flex flex-col justify-start gap-3">
            <div className="flex flex-col justify-start items-start gap-1">
                <label htmlFor="name" className="font-semibold">Name</label>
                <input type="text" name="name" id="name" placeholder="Your first name..." className="w-full border border-gray-800 px-1.5 py-1.5 rounded-lg outline-none" required/>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
                <label htmlFor="gender" className="font-semibold">Gender</label>
                <div>
                    <select name="gender" id="gender" className="w-full px-2.5 outline-none py-1.5 border-gray-800 border rounded-lg cursor-pointer bg-black" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
                <label htmlFor="dob" className="font-semibold">Date of Birth</label>
                <input type="date" name="dob" id="dob" className="w-full border border-gray-800 px-1.5 py-1.5 rounded-lg outline-none" required/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
