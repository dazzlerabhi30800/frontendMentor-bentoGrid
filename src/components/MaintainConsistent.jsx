import React from "react";

function MaintainConsistent() {
  return (
    <div className="sixth--container flex flex-col justify-between w-full h-full bg-[var(--Yellow-500)] p-5 pb-0 text-[var(--Black)] rounde-md shadow-md">
      <h3 className="px-5 text-xl xl:text-2xl font-bold leading-[1]">
        Maintain a consistent posting schedule.
      </h3>
      <div className="overflow-y-hidden flex justify-center items-center mt-5">
        <img
          src="./images/illustration-consistent-schedule.webp"
          className="h-[150px] w-[200px] xl:h-full xl:w-[180px]"
          alt="Schedule posts"
        />
      </div>
    </div>
  );
}

export default MaintainConsistent;
