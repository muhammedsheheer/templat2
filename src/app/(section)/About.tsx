import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] pb-0 pt-12 md:h-[1000px] md:pt-20">
      {/*big screen  */}
      <div className="absolute bottom-[92px] left-[20%] z-50 hidden md:block">
        `
        <Image
          src={"/images/home/hero/hand.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[650px] w-full"
        />
        `
      </div>
      <div className="absolute bottom-[30%] right-[5%] z-50 hidden md:block">
        <div className="flex flex-col gap-4">
          <p className="w-full max-w-[220px] font-sofia_sans text-lg font-[500] uppercase text-[#000] md:text-xl md:leading-[95%] md:tracking-[1px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="">
            <Link href={"/table-booking"}>
              <Button
                className={
                  "rounded-none border border-[#000] bg-[#000] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#fff] hover:bg-[#222] hover:text-[#fff]"
                }
              >
                Reserve
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-[5%] top-[50%] hidden md:block">
        <p className="w-full max-w-[220px] font-sofia_sans text-lg font-[500] uppercase text-[#000] md:text-xl md:leading-[95%] md:tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
      </div>
      <div className="absolute left-[5%] top-[70%] hidden md:block">
        <p className="w-full max-w-[220px] font-sofia_sans text-lg font-[500] uppercase text-[#000] md:text-xl md:leading-[95%] md:tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
      </div>
      <div className="absolute top-0 hidden md:block">
        <h1 className="overflow-hidden whitespace-nowrap text-center font-sofia_sans text-[255px] font-[500] uppercase tracking-[4px] text-[#000]">
          CROISSANT CAFE
        </h1>
      </div>
      <div className="absolute -right-10 top-44 hidden md:block">
        <h1 className="overflow-hidden whitespace-nowrap text-center font-sofia_sans text-[255px] font-[500] uppercase tracking-[4px] text-[#000]">
          CROISSANT C
        </h1>
      </div>
      <div className="absolute bottom-0 hidden md:block">
        <div className="flex justify-center bg-[#F5DFD8] py-8">
          <p className="overflow-hidden whitespace-nowrap font-open_sans text-base font-[400] lowercase tracking-[1px] text-[#323232] md:text-xl md:tracking-[3px]">
            Fresh pasta // cookies // croissants // latte // Fresh pasta //
            cookies // croissants // latte // Fresh pasta // cookies //
            croissants // latte //
          </p>
        </div>
      </div>
      {/*big screen end */}
      {/* mobile screen */}
      <div className="flex flex-col items-center justify-center gap-5 px-4 md:hidden">
        <h1 className="text-center font-sofia_sans text-5xl font-[500] uppercase text-[#000]">
          CROISSANT CAFE
        </h1>
        <p className="w-full max-w-[300px] font-sofia_sans text-lg font-[500] uppercase text-[#000] md:text-xl md:leading-[95%] md:tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <p className="w-full max-w-[300px] font-sofia_sans text-lg font-[500] uppercase text-[#000] md:text-xl md:leading-[95%] md:tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>

        <div className="flex flex-col gap-4">
          <p className="w-full max-w-[220px] font-sofia_sans text-lg font-[500] uppercase text-[#000] md:text-xl md:leading-[95%] md:tracking-[1px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="">
            <Link href={"/table-booking"}>
              <Button
                className={
                  "rounded-none border border-[#000] bg-[#000] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#fff] hover:bg-[#222] hover:text-[#fff]"
                }
              >
                Reserve
              </Button>
            </Link>
          </div>
          <Image
            src={"/images/home/hero/hand.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="flex md:hidden md:items-end md:justify-end">
        <div className="flex justify-center bg-[#F5DFD8] py-8">
          <p className="overflow-hidden whitespace-nowrap font-open_sans text-base font-[400] lowercase tracking-[1px] text-[#323232] md:text-xl md:tracking-[3px]">
            Fresh pasta // cookies // croissants // latte // Fresh pasta //
            cookies // croissants // latte // Fresh pasta // cookies //
            croissants // latte //
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
