import React from "react";

function ContentAi() {
  return (
    <div className="fourth--container py-8 px-10 gap-4 flex flex-col items-center justify-between w-full h-full text-[var(--Black)] bg-[var(--Yellow-500)] rounded-md shadow-md">
      <h2 className="text-2xl xl:text-4xl font-bold">
        Write your content using AI.
      </h2>
      <div className="flex w-full justify-center items-center h-full">
        <img
          src="./images/illustration-ai-content.webp"
          alt="Ai Content"
          className="w-full max-w-[250px] h-[190px]"
        />
      </div>
    </div>
  );
}

export default ContentAi;
