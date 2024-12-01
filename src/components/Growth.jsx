import React from "react";

function Growth() {
  return (
    <div className="seventh--container flex flex-col justify-between w-full h-full bg-[var(--White)] p-5 text-[var(--Black)] rounded-md shadow-md">
      <h1 className="text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-none font-bold">
        &gt; 56%{" "}
      </h1>
      <p className="text-[18px] mt-5 font-medium">faster audience growth</p>
      <div className="mt-2">
        <img
          src="./images/illustration-audience-growth.webp"
          alt="Audience Growth"
          className="w-full h-16 object-contain"
        />
      </div>
    </div>
  );
}

export default Growth;
