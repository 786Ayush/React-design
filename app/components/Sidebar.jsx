import React from "react";
import { categories, mainmenu } from "@/public/constants";
import SidebarCard from "./SidebarCard";
const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col bg-[#15132B] w-[13vw] min-h-screen ">
        <div className="text-cyan-50 text-center">Main Menu</div>
        {categories.map((category) => (
          <div className="" key={category.id}>
            <div
              className="flex flex-row items-center justify-between"
              style={{
                borderRight: category.rightcolor!==null ? category.rightcolor  : null,
              }}
            >
              <div className="flex flex-row items-center">

              
              <div
                className="icon p-2 "
                style={{ color: category.color ? category.color : "#464366" }}
              >
                {category.icon}
              </div>
              <div
                className="name p-2 "
                style={{ color: category.color ? category.color : "#464366" }}
              >
                {category.name}
              </div>
              </div>
              {category.newicon ? (
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#7879F1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </div>
        ))}
        <SidebarCard/>
      </div>
    </>
  );
};

export default Sidebar;
