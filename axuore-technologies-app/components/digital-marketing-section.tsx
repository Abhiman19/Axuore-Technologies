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
    title: "Market Strategy",
    Image: "/assets/market-strat.svg",
    description: "Strategic market analysis and positioning",
  },
  {
    title: "SEO",
    Image: "/assets/seo.svg",
    description: "Search engine optimization services",
  },
  {
    title: "Web Design &\nDevelopment",
    Image: "/assets/web-dev.svg",
    description: "Custom web solutions",
  },
  {
    title: "Email\nMarketing",
    Image: "/assets/email-marketing.svg",
    description: "Targeted email campaigns",
  },
  {
    title: "Mobile\nApplication",
    Image: "/assets/mobile-app.svg",
    description: "Custom mobile app development",
  },
];

export default function DigitalMarketingSection() {
  return (
    <section className="bg-black max-h-screen flex flex-col py-16 px-4">
      <div className="container mx-auto text-center py-8 px-4">
        {/* Top Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="relative">
            <Image
              src="/assets/digital-marketing-section.png"
              alt="Digital Marketing"
              width={450}
              height={300}
              className="object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
          </div>
          <div className="md:max-w-lg flex flex-col px-6">
            <h3 className="text-4xl font-bold text-white">
              Elevating Brands in the Digital Era.
            </h3>
          </div>
        </div>

        {/* Carousel Section */}
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
                <Card className="bg-[#001a00] border-0 min-h-[300px]">
                  <CardContent className="flex flex-col items-center text-center justify-center p-6 h-full min-h-[200px]">
                    <div className="rounded-lg p-4 bg-[#002200] mb-4 w-40 h-40 flex items-center justify-center">
                      <Image
                        src={service.Image || "/placeholder.svg"}
                        alt={service.title}
                        width={200}
                        height={200}
                        className="text-white"
                      />
                    </div>
                    <h4 className="text-white text-center font-semibold whitespace-pre-line mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-sm text-center">
                      {service.description}
                    </p>
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
