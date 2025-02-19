import React from "react";
import { Star, Plus } from "lucide-react";
import Link from "next/link";

const Card = (data) => {
  const datause = data.data;

  const dataupdate = datause.title.split(" ");
  const datatitle = dataupdate.length > 3 ? dataupdate.slice(0, 2) : dataupdate;
  const finaldatatitle = datatitle.join(" ");

  return (
    <Link href={`/${datause.id}`}>
      <div className="w-[143px] h-[213px]  bg-[#1F1F1F] rounded-xl grid-flow-row grid-rows-2 justify-center items-center text-white p-3 ">
        <img
          src={datause.images}
          className="w-[95px] h-[77px] flex flex-col gap-0"
          alt=""
        />

        <div className=" p-3 flex flex-col justify-between h-[65%] ">
          <div>
            <div className="flex items-cente gap-1">
              <Star size={13} color="#FFD33C" fill="#FFD33C" />
              <p className="text-xs  ">{datause.rating}</p>
            </div>
            <p className="text-sm  ">{finaldatatitle}..</p>
            <p className="text-xs font-thin ">{datause.category}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-bold ">{datause.price}</p>
            <Plus size={15} strokeWidth="5px" color="#FFD33C" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
