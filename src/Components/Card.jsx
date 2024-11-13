import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"
function Card({ data }) {
  return (
    <motion.div drag className=" relative w-60 h-80  rounded-[20px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaFileAlt />
      <p className="text-ms    leading-tight  mt-5 font-semibold">
        {data.desc}
      </p>

      <div className="footer absolute bottom-0  w-full   left-0">
        <div className="flex items-center justify-between  px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <MdDownloading size=".7em" color="fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen ? (
          <div className="tag w-full py-4 flex items-center justify-center"
          style={{ backgroundColor: data.tag.tagColor }}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
