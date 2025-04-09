import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const data = [
  {
    name: "ROASTED LAMB RUMP",
    description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    price: "$25",
  },
  {
    name: "PAN SEARED SEA BASS",
    description: "Saffron and mussel’s broth, new potatoes, edamame beans",
    price: "$38",
  },
  {
    name: "KING PRAWNS AND LOBSTER",
    description: "Creamy saffron, sauce Vierge",
    price: "$38",
  },
  {
    name: "BEEF BURGER MEAL",
    description: "Classic Greek salad, barrel aged feta cheese, bread",
    price: "$32",
  },
  {
    name: "ROASTED LAMB RUMP",
    description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    price: "$25",
  },
];

function ReserveNew() {
  return (
    <section className="h-full w-full bg-[#CCE1F1] px-4 py-8 md:px-16 md:py-0">
      <div className="flex flex-col gap-4 md:flex-row md:gap-0">
        <div className="flex w-full flex-col gap-4 bg-[#fff] md:w-1/2">
          <h1 className="pl-4 pt-6 font-sofia_sans text-5xl font-[500] uppercase text-[#CCE1F1] md:pl-16 md:pt-8 md:text-8xl">
            MENU
          </h1>
          {/* <div className="flex flex-col items-start justify-start gap-6 pb-6 md:gap-8">
          {data.map((item, index) => (
            <div
              key={`food-item-${index}`}
              className="flex w-full flex-row items-center justify-center gap-0"
            >
              <div className="flex w-auto flex-col md:w-[488px]">
                <p className="font-poppins text-base font-[400] uppercase text-[#323232] md:text-lg md:tracking-[2.5px]">
                  {item.name}
                </p>
                <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)] md:text-base">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center gap-1 md:mb-12">
                <p className="flex font-poppins text-lg font-[400] uppercase tracking-[0.57px] text-[#323232]">
                  £{item.price}
                </p>
              </div>
            </div>
          ))}
        </div> */}
          <div className="flex flex-col items-start justify-start gap-6 pb-6 pl-4 md:gap-8 md:pl-16">
            {data.map((item, index) => (
              <div
                key={`food-item-${index}`}
                className="flex w-full flex-row items-center justify-between md:w-[500px]"
              >
                {/* Name & Description */}
                <div className="flex w-[75%] flex-col">
                  <p className="font-poppins text-base font-[400] uppercase text-[#323232] md:text-lg md:tracking-[2.5px]">
                    {item.name}
                  </p>
                  <p className="font-poppins text-sm font-[300] text-[rgba(0,0,0,0.60)] md:text-base">
                    {item.description}
                  </p>
                </div>
                {/* Price */}
                <div className="w-[25%] text-right">
                  <p className="font-poppins text-lg font-[400] uppercase tracking-[0.57px] text-[#323232]">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full items-end justify-center md:w-1/2 md:pt-14">
          <div>
            <Image
              src={"/images/hero/menu.png"}
              width={281}
              height={74}
              alt="logo"
              className="h-auto w-full md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReserveNew;
