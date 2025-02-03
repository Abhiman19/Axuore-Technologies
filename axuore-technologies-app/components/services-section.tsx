"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "UI / UX\nDesign",
    Image: "/assets/ui-design.svg",
  },
  {
    title: "Web\nDevelopement",
    Image: "/assets/web-dev.svg",
  },
  {
    title: "Mobile App\nDevelopment",
    Image: "/assets/mobile-dev.svg",
  },
  {
    title: "Cloud\nComputing",
    Image: "/assets/cloud.svg",
  },
  {
    title: "IT\nConsulting",
    Image: "/assets/it.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black max-h-screen py-8 px-4 flex flex-col">
      <div className="py-8 px-[72px]">
        <h2 className="text-3xl font-bold text-white">We Do ...</h2>
      </div>
      <div className="container mx-auto text-center py-8 px-[72px]">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="md:text-pretty max-w-lg">
            <h3 className="text-4xl font-bold text-white mb-6">
              Innovative IT Solutions for a Smarter Tomorrow.
            </h3>
          </div>
          <div className="relative rounded-3xl">
            <Image
              src="/assets/service-section.jpg"
              alt="Technology Solutions"
              width={600}
              height={300}
              className="object-cover"
            />
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5"
              >
                <Card className="bg-black border border-emerald-500/20">
                  <CardContent className="flex flex-col items-center text-center justify-center p-6">
                    <div className="rounded-lg p-4 bg-black border border-emerald-500/20 mb-4">
                      <Image
                        src={service.Image}
                        alt={service.title}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h4 className="text-white text-center whitespace-pre-line">
                      {service.title}
                    </h4>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
