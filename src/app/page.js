'use client'

import Card from "./components/Card";
import usefetch from "./hooks/usefetch";


export default function Home() {
 const {products} = usefetch() 

  return (
    <div className="text-2xl font-Lato bg-[#171616] w-screen h-screen text-white py-16 px-8 flex flex-col gap-6 overflow-y-auto ">
      
      <p className="text-[36px]">Product List</p>
      <div className="flex gap-8  items-center">
        <p className="bg-[#F9D03F] px-4 py-1 rounded-xl text-[14px] text-black">All products</p>
        <p className="text-[14px] text-[#696969]">makeup kit</p>
        <p className="text-[14px] text-[#696969] ">offer zone</p>
      </div>
      <div className=" w-full h-full flex gap-3 justify-center  items-center flex-wrap">
        {products.map((data,index)=>(
          <Card data={data} key={index} />
        ))
        }
      </div>
    </div>
  );
}
