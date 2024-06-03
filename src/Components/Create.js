import React, { useState } from "react";
import Box from "./Box";
import Title from "./Title";
import { CgDanger } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import Button from "./Button";

export default function Create() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperinece] = useState("");
  const [remember, setRemeber] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <Box>
      <Title text="Create Account" />
      <p className="w-full text-center mb-5">
        Create your account in a second to receive our latest news!
      </p>
      <form>
        <div>
          <div>
            <label className="font-bold" htmlFor="mail">
              Email
            </label>
          </div>
          <div className="border-2 rounded-lg w-full mt-2 mb-5">
            <input
              className="pl-3 py-2 w-full rounded-lg focus:outline-none"
              name="mail"
              type="email"
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <p className="text-[#AAAAAA]">At Least 6 characters</p>
          </div>
          <div className="relative rounded-lg w-full mt-2 mb-2">
            <input
              className={`border-2 pl-3 py-2 w-full rounded-lg border-[${
                password.length < 6 && password.length > 0 ? "#ff0000" : ""
              }] focus:outline-none`}
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                const newPassword = e.target.value;
                setPassword(newPassword);
                if (newPassword.length >= 6) {
                  setVisible(false);
                } else {
                  setVisible(true);
                }
              }}
              onFocus={() => {
                if (password.length < 6) {
                  setVisible(true);
                }
              }}
            />
          </div>
          {visible && (
            <div className="flex items-center mb-3">
              <CgDanger color="red" fontSize={20} />
              <p className="ml-1 text-[#ff0000] font-bold">
                Error Message.{" "}
                <a onClick={()=>alert("Password need to have 6 characters")} className="font-normal underline" href="#more">
                  Learn More
                </a>
              </p>
            </div>
          )}
        </div>
        <div>
          <div>
            <label className="font-bold" htmlFor="experience">
              Year of experience
            </label>
          </div>
          <div className="border-2 rounded-lg w-full mt-2 mb-5 ">
            <select
              className="px-3 py-2 w-full rounded-lg"
              name="select"
              id="experience"
              value={experience}
              onChange={(e) => setExperinece(e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="+5">+5</option>
            </select>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <button
            onClick={(e) => {
              e.preventDefault();
              setRemeber((prevState) => !prevState);
            }}
            className={`border-2 p-1 rounded-lg mr-3 bg-${
              remember && "primary"
            }`}
          >
            <FaCheck color="white" />
          </button>
          <label>Remember Me</label>
        </div>
        <Button
          text="Create Account"
          onClick={(e) => {
            if (mail !== "" && password.length >= 6 && experience !== "") {
              alert("Account Created Succefully");
            } else {
              e.preventDefault();
              alert("Please Provide all the necessary fields");
            }
          }}
        />
      </form>
    </Box>
  );
}
