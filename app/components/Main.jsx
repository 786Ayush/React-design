'use client';
import React from "react";
import Card from "./Card";
import BigCard from "./BigCard";
import Todocard from "./Todocard";
import Incompress from "./Incompress";
import Done from "./Done";


const Main = () => {
  return (
    <div className="bg-[#0D0B21] h-full w-full">
      <BigCard />
      <div className="flex flex-row">
        <div className="todolist flex flex-col ">
          <div className="uper flex flex-row justify-between items-center w-[20vw]">
            <div className="content text-white p-10">To-Do List(24)</div>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <g filter="url(#filter0_d_1_413)">
                  <rect
                    x="8"
                    y="4"
                    width="49"
                    height="49"
                    rx="14"
                    fill="#6418C3"
                  />
                </g>
                <path
                  d="M30.426 20V26.596H24V30.744H30.426V37.34H34.914V30.744H41.34V26.596H34.914V20H30.426Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_1_413"
                    x="0"
                    y="0"
                    width="65"
                    height="65"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_413"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_413"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Todocard />
        </div>
        <div className="inprogresss flex flex-col" >
          <div className="uper flex flex-row justify-between items-center w-[20vw]">
            <div className="content text-white p-10">InProgress(2)</div>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <g filter="url(#filter0_d_1_413)">
                  <rect
                    x="8"
                    y="4"
                    width="49"
                    height="49"
                    rx="14"
                    fill="#6418C3"
                  />
                </g>
                <path
                  d="M30.426 20V26.596H24V30.744H30.426V37.34H34.914V30.744H41.34V26.596H34.914V20H30.426Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_1_413"
                    x="0"
                    y="0"
                    width="65"
                    height="65"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_413"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_413"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Incompress/>
        </div>
        <div className="done flex flex-col">
          <div className="uper flex flex-row justify-between items-center w-[20vw]">
            <div className="content text-white p-10">Done(3)</div>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <g filter="url(#filter0_d_1_413)">
                  <rect
                    x="8"
                    y="4"
                    width="49"
                    height="49"
                    rx="14"
                    fill="#6418C3"
                  />
                </g>
                <path
                  d="M30.426 20V26.596H24V30.744H30.426V37.34H34.914V30.744H41.34V26.596H34.914V20H30.426Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_1_413"
                    x="0"
                    y="0"
                    width="65"
                    height="65"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_413"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_413"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <Done/>
        </div>
        <div className="revised flex flex-col">

          <div className="uper flex flex-row justify-between items-center w-[20vw]">
            <div className="content text-white p-10">Revised(0)</div>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <g filter="url(#filter0_d_1_413)">
                  <rect
                    x="8"
                    y="4"
                    width="49"
                    height="49"
                    rx="14"
                    fill="#6418C3"
                  />
                </g>
                <path
                  d="M30.426 20V26.596H24V30.744H30.426V37.34H34.914V30.744H41.34V26.596H34.914V20H30.426Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_1_413"
                    x="0"
                    y="0"
                    width="65"
                    height="65"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_413"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_413"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <div className="w-[20vw] bg-[#211A75] p-7 rounded-2xl m-3">
            <div className="content bg-[#15132B] p-3 text-center border-dashed rounded-2xl border-2 text-[#7879F1] border-[#7879F1]">Move card here</div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Main;
