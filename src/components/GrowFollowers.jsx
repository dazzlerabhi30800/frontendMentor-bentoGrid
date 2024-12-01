import React from "react";

function GrowFollowers() {
  return (
    <div className="eighth--container flex flex-col lg:flex-row items-center gap-5 w-full bg-[var(--Purple-500)] p-5 h-full text-[var(--White)] rounded-md shadow-md text-center">
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="./images/illustration-grow-followers.webp"
          alt="Growth Followers"
          className="h-full max-h-[300px] md:max-h-[250px] xl:max-h-[300px] w-full max-w-[300px]"
        />
      </div>
      <h2 className="text-2xl lg:text-4xl font-medium">
        Grow followers with non-stop content.
      </h2>
    </div>
  );
}

export default GrowFollowers;
