import Image from "next/image";
import React from "react";

const Menu: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#fff] pb-8 pt-8 md:pb-0 md:pt-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-4 md:gap-16 md:px-12">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-center font-times_new_roman text-5xl font-[400] lowercase italic text-[#040404] md:text-7xl md:tracking-[-4px]">
            Explore our menu
          </h1>
        </div>
        <div className="flex h-full w-full flex-col gap-8 md:flex-row">
          <div className="h-full w-full md:w-[32%]">
            <Image
              src={"/images/home/menu/image1.png"}
              width={677}
              height={503}
              alt="image"
              className="h-auto w-full md:h-[550px]"
            />
          </div>

          <div className="h-full w-full md:w-[18%]">
            <Image
              src={"/images/home/menu/2.png"}
              width={677}
              height={503}
              alt="image"
              className="h-auto w-full md:h-[550px]"
            />
          </div>

          <div className="h-full w-full md:w-[32%]">
            <Image
              src={"/images/home/menu/3.png"}
              width={677}
              height={503}
              alt="image"
              className="h-auto w-full md:h-[550px]"
            />
          </div>

          <div className="h-full w-full md:w-[18%]">
            <Image
              src={"/images/home/menu/2.png"}
              width={677}
              height={503}
              alt="image"
              className="h-auto w-full md:h-[550px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 w-full bg-[#CDE3F3] py-2 md:mt-10"></div>
      <div className="mt-6 w-full bg-[#CDE3F3] py-6 md:mt-2"></div>
    </section>
  );
};

export default Menu;
