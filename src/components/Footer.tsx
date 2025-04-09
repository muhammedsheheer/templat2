"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#f7f4ed] px-4 pt-2 lg:px-8">
      <div className="flex flex-col gap-4 pt-12 md:gap-8 lg:pt-24">
        {/* first  div */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-14 md:px-32">
          {/* sub first  div */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-36">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/images/home/hero/logo.png"}
                    width={281}
                    height={74}
                    alt="logo"
                    className="w-36"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start md:pt-4">
                <div className="flex flex-col items-center md:items-start">
                  <span className="flex flex-col text-center font-open_sans text-base font-[600] uppercase tracking-[1px] text-[#323232] md:text-start">
                    Contact
                  </span>
                  <br />
                  <span>
                    <Link
                      className="flex flex-col text-center font-open_sans text-base font-[400] uppercase tracking-[1px] text-[#323232] md:text-start"
                      target="_blank"
                      href={""}
                    >
                      31 The Cross, Lymm WA13 <br /> 0HR, United Kingdom
                    </Link>
                  </span>
                  <br />
                  <span>
                    <Link
                      className="font-open_sans text-base font-[400] uppercase tracking-[1px] text-[#323232]"
                      href={"tel:+441925982168"}
                    >
                      +44 1925 982168
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="font-open_sans text-base font-[400] uppercase tracking-[1px] text-[#323232]"
                      href={"mailto:info@zaloscafe.co.uk"}
                    >
                      info@zaloscafe.co.uk
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 md:gap-4">
                <Link href={""} target="_blank">
                  <Icons.instagram className="text-[#323232]" />
                </Link>
                {/* <Link
                  href={
                    "https://www.tripadvisor.in/Restaurant_Review-g187069-d32861312-Reviews-Levant_Elixir_Of_Co_existence-Manchester_Greater_Manchester_England.html"
                  }
                  target="_blank"
                >
                  <Icons.unknown className="text-[#323232]" />
                </Link> */}
                <Link href={""} target="_blank">
                  <Icons.google className="text-[#323232]" />
                </Link>
                <Link href={""} target="_blank">
                  <Icons.facebook className="text-[#323232]" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:mt-24 md:items-start md:gap-6">
              <Link
                href={"/"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-[#323232]"
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-[#323232]"
              >
                Menu
              </Link>

              <Link
                href={"/about-us"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-[#323232]"
              >
                About
              </Link>

              {/* <Link
                href={""}
                className="font-open_sans text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Products
              </Link> */}
              <Link
                href={"/table-booking"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-[#323232]"
              >
                Reservation
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-[#323232]"
              >
                Contact Us
              </Link>
            </div>{" "}
          </div>

          {/* sub second  div */}
          <div className="flex w-full flex-col items-center gap-2 md:w-[400px] md:items-start md:pt-16">
            <h6 className="font-open_sans text-base font-[600] uppercase tracking-[2.2px] text-[#323232] md:pb-4">
              Opening Hours
            </h6>
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                  Monday - Thursday{" "}
                </span>
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                  8:30 AM - 4:30 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                  Friday - Saturday{" "}
                </span>
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                  8:30 AM - 5:00 PM{" "}
                </span>
              </div>
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                  Sunday{" "}
                </span>
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-[#323232]">
                  8:30 AM - 4:00 PM{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* second  div */}
        <div className="flex flex-col gap-4">
          <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:items-start md:justify-between">
            <Link href={"https://foodo.ai/"} target="_blank">
              <span className="pb-6 font-open_sans text-xs font-[400] lowercase tracking-[1px] text-[#323232]">
                Powerd by fo0do{" "}
              </span>
            </Link>
            <p className="pb-6 font-open_sans text-xs font-[400] lowercase tracking-[1px] text-[#323232]">
              © 2025 CAFE ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
