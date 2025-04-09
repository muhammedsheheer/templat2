"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#fff] py-12">
      <div className="absolute bottom-16 left-[10%] hidden md:block">
        <p className="w-full max-w-[200px] text-center font-times_new_roman text-base font-[400] lowercase italic text-[#000] md:text-right md:text-lg md:tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 pb-5 md:items-start md:justify-start">
            <h6 className="text-center font-times_new_roman text-5xl font-[400] capitalize text-[#000] md:text-7xl md:tracking-[-4px]">
              Our signatures
            </h6>
            <p className="w-full max-w-[300px] text-center font-times_new_roman text-base font-[400] lowercase italic text-[#000] md:hidden md:text-right md:text-base md:tracking-[1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
