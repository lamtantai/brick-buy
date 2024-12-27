import React from "react";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export default function SliderButtonContainer({ scrollContainer }) {
  function scrollLeft() {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const childWidth = container.firstChild
        ? container.firstChild.offsetWidth
        : 0;

      container.scrollBy({
        left: -childWidth,
        behavior: "smooth",
      });
    }
  }

  function scrollRight() {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const childWidth = container.firstChild
        ? container.firstChild.offsetWidth
        : 0;

      container.scrollBy({
        left: childWidth,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="flex gap-x-4 text-black">
      <button className="hover:opacity-80" onClick={scrollLeft}>
        <IoIosArrowDropleftCircle />
      </button>

      <button className="hover:opacity-80" onClick={scrollRight}>
        <IoIosArrowDroprightCircle />
      </button>
    </div>
  );
}
