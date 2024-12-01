import React from "react";

const First = () => {
  return (
    <div className="first--container bg-[var(--Yellow-100)] flex flex-col h-full w-full justify-center p-10 rounded-md shadow-md items-center gap-10">
      <h2 className="text-4xl font-bold">
        Create and schedule content{" "}
        <span className="text-[var(--Purple-500)] italic-font">quicker.</span>
      </h2>
      <img
        src="/public/images/illustration-create-post.webp"
        alt="Create Post"
        className="w-full h-24 object-contain"
      />
    </div>
  );
};

export default First;
