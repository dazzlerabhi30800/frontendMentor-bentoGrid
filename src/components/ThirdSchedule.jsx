import React from "react";

const ThirdSchedule = () => {
  return (
    <div className="third--container flex flex-col py-6 gap-8 justify-center items-center rounded-md shadow-md bg-[var(--Purple-100)] text-[var(--black)] text-center lg:text-left">
      <h3 className="px-5 text-3xl font-bold">Schedule to social media</h3>
      <img
        src="./images/illustration-schedule-posts.webp"
        alt="Schedule Posts"
        className="w-[90%] xl:w-[85%] max-w-[350px] md:max-w-[450px] xl:max-w-[350px] xl:self-end h-[250px] md:h-[180px] xl:h-[450px] object-contain"
      />
      <p className="text-[16px] font-medium px-5">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
};

export default ThirdSchedule;
