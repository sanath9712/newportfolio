import { ChatBubbleLeftRightIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        My <span className="text-yellow-400">Publications</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mt-[4rem] gap-[3rem] w-[70%] mx-auto">
        <div>
          <div className="w-[100%] relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/conference-paper.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div
            className="w-[90%] text-center mx-auto bg-[#09101a] relative 
                p-[2rem] mt-[-1rem] rounded-xl" style={{boxShadow: "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"}}
          >
            <div
              className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative 
                    mt-[-3rem] text-black font-semibold text-[17px] mx-auto rounded-full"
            >
              December 15, 2022
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-[1rem] space-x-4">
              <div className="flex items-center">
                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white ml-2">By Manjju Shree Devy Gendeti</p>
              </div>
            </div>
          </div>
          <p className="mt-[1rem] text-white text-center text-[18px] font-semibold">
            <a href="https://link.springer.com/chapter/10.1007/978-3-031-21517-9_15" target="_blank">
              Polarized Extractive Summarization of Online Product Reviews <span className="text-[#55e6a5]">@ MIKE Conference 2021</span></a>    
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

