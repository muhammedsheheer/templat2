import { Icons } from "@/components/Icon";
import Image from "next/image";
import React from "react";

function SocialMedia() {
  return (
    <section className="flex h-full w-full flex-col gap-9 px-4 pb-4 pt-12 md:px-10 md:pt-16">
      <h1 className="text-center font-sofia_sans text-5xl font-[500] uppercase text-[#1E649F] md:text-8xl">
        SCROLL US{" "}
      </h1>
      <div className="grid w-full grid-cols-3 gap-3">
        <div className="relative">
          <Image
            src="/images/home/follow/2.png"
            width={553}
            height={541}
            alt="1"
          />
          <div className="absolute left-0 top-0 z-40 flex h-full w-full items-end justify-center">
            <p className="-rotate-180 text-center font-sofia_sans text-2xl font-[700] text-white md:text-7xl">
              SCROLL US
            </p>
          </div>
        </div>
        <Image
          src="/images/home/follow/1.png"
          width={553}
          height={541}
          alt="2"
        />
        <div className="flex h-full w-full items-center justify-center bg-foreground px-10 py-6 md:px-6">
          <p className="text-center font-sofia_sans text-3xl font-[600] uppercase text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-foreground px-10 py-6 md:px-6">
          <Icons.instagram className="h-6 w-6 text-white md:h-24 md:w-24" />
          <p className="text-center font-sofia_sans text-3xl font-[600] uppercase text-white">
            @LOREMIPSUM
          </p>
        </div>
        <Image
          src="/images/home/follow/1.png"
          width={553}
          height={541}
          alt="2"
          className="-rotate-90"
        />
        <div className="relative">
          <Image
            src="/images/home/follow/2.png"
            width={553}
            height={541}
            alt="2"
          />
          <div className="absolute left-0 top-0 z-40 flex h-full w-full items-start justify-center">
            <p className="-rotate-180 text-center font-sofia_sans text-2xl font-[700] text-white md:text-7xl">
              SCROLL US
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
