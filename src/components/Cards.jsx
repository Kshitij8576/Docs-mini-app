import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { motion } from "framer-motion"

function Cards({reference, data}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.125}} className="relative w-40 h-52 bg-zinc-600 rounded-[30px] text-zinc-200 overflow-hidden">
      <div className="px-5 pt-5 pb-1">
        <FaRegFileAlt />
        <h4 className="text-sm font-semibold mt-[10px]">
          {data.desc}
        </h4>
        <div className="text-sm font-semibold flex items-center justify-between mt-[2em]">
            <h3>{data.mbs}</h3>
            <MdDownloadForOffline />
        </div>
      </div>
      <div className={`absolute bottom-0 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} h-[2em] w-40 flex justify-center items-center`}>
        <h4>{data.tag.tagTitle}</h4>
      </div>
    </motion.div>
  );
}

export default Cards;
