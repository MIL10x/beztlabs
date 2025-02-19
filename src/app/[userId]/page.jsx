"use client";
import Link from "next/link";
import { Star } from "lucide-react";
import React, { useState } from "react";
import usefetch from "../hooks/usefetch";
import { toast } from "react-toastify";
import { ChevronLeft, CircleMinus, CirclePlus } from "lucide-react";

const Page = ({ params }) => {
  const { products } = usefetch();
  const [add, setadd] = useState(0);
  const { userId } = React.use(params);
  const usedata = products.filter((data) => data.id == userId);

  const handleaddcart = () => {
    toast("Added to cart");
  };

  return (
    <div className="bg-[#171616] w-screen h-screen text-white py-10 px-5 ">
      <Link href={"/"}>
        <div className="rounded-full  p-3 w-fit shadow-100 mt-3">
          <ChevronLeft strokeWidth={3} />
        </div>
      </Link>
      {usedata.map((data, index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-center h-[92%] "
        >
          <div className=" flex flex-col justify-center items-center py-3 gap-4">
            <div className="relative size-72">
              <img src={data.images} className="relative z-50" alt="" />
              <div className="absolute top-0 left-0 z-10 bg-white/10 w-full h-full blur-2xl rounded-full"></div>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-[20px] flex flex-wrap">{data.title}</p>
              <div className="flex items-cente gap-1 px-5 ">
                <Star size={25} color="#FFD33C" fill="#FFD33C" />
                <p className="text-lg  ">{data.rating}</p>
              </div>
            </div>
            <p className="text-xs">{data.description}</p>
            <div className=" w-full flex justify-between items-center px-1">
              <div className=" flex gap-2 items-center">
                <CircleMinus
                  strokeWidth={2}
                  onClick={() => setadd(add <= 0 ? 0 : add - 1)}
                />
                <p className="text-xl">{add}</p>
                <CirclePlus
                  strokeWidth={2}
                  color="#FFD33C"
                  onClick={() => setadd(add + 1)}
                />
              </div>
              <p className="text-xl">{data.price}</p>
            </div>
          </div>
          <div className="w-full h-14 bg-gradient-to-b from-[#F9D03F] flex justify-center items-center to-[#E9B32A]  shadow-200 rounded-xl ">
            <p className="text-xl text-black" onClick={handleaddcart}>
              Add to cart
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
