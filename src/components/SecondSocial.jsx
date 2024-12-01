import React from "react";

const SecondSocial = () => {
  return (
    <div className="second--container w-full text-[var(--White)] p-10 h-full flex flex-col gap-5 justify-center items-center bg-[var(--Purple-500)] rounded-md shadow-md text-center">
      <h1 className="text-[2.2rem] md:text-[2.7rem] lg:text-[3rem] leading-none">
        Social Media <span className="text-[var(--Yellow-500)]">10x</span>{" "}
        <span className="italic-font">Faster</span> with AI
      </h1>
      <div className="flex flex-col items-center gap-1">
        <img
          src="./images/illustration-five-stars.webp"
          className="w-full h-8"
          alt="5 Stars"
        />
        <p className="text-[18px] text-[var(--Yellow-100)]">
          Over 4,000 5 star reviews
        </p>
      </div>
    </div>
  );
};

export default SecondSocial;
