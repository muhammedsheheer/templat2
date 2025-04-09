"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#fff] pb-28 pt-10 md:pb-32 md:pt-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 pb-4 md:pb-16 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-center font-times_new_roman text-5xl font-[400] capitalize text-[#000] md:text-7xl md:tracking-[-4px]">
              From their Hearts
            </h3>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          {reviews && (
            <Carousel className="flex w-full items-center justify-center">
              <CarouselContent className="ml-0 flex w-full items-center justify-center gap-4 px-4 md:px-0">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className={`flex h-[400px] w-full basis-full flex-col items-center justify-center gap-6 rounded-t-full border-4 border-[#1A6AA7] bg-[#CCE1F1] py-12 md:h-[550px] md:basis-1/3 md:py-16`}
                  >
                    <div className="flex flex-col items-center justify-center gap-6 px-6 pb-4">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <Image
                          src={review.authorAttribution.photoUri}
                          width={677}
                          height={503}
                          alt="image"
                          className="h-16 w-16"
                        />
                        <div className="flex flex-col">
                          <p className="text-center font-times_new_roman text-xl font-[700] lowercase text-[#4A708C]">
                            {review.authorAttribution.displayName}
                          </p>
                          <p className="text-center font-times_new_roman text-base font-[400] lowercase text-[#4A708C]">
                            {review.relativePublishTimeDescription}
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex w-full justify-start">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#040404]"
                            />
                          ),
                        )}
                      </div> */}
                      <div className="flex flex-col gap-4">
                        <p className="line-clamp-5 text-center font-times_new_roman text-lg font-[400] lowercase italic text-[#4A708C] md:text-base">
                          {review.text.text}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#1A6AA7] text-[#1A6AA7] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#1A6AA7] text-[#1A6AA7] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
