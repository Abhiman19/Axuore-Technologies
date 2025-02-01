"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const services = [
  {
    title: "Market Strategy",
    icon: "/placeholder.svg?height=40&width=40",
    description: "Strategic market analysis and positioning",
  },
  {
    title: "SEO",
    icon: "/placeholder.svg?height=40&width=40",
    description: "Search engine optimization services",
  },
  {
    title: "Web Design &\nDevelopment",
    icon: "/placeholder.svg?height=40&width=40",
    description: "Custom web solutions",
  },
  {
    title: "Email\nMarketing",
    icon: "/placeholder.svg?height=40&width=40",
    description: "Targeted email campaigns",
  },
  {
    title: "Mobile\nApplication",
    icon: "/placeholder.svg?height=40&width=40",
    description: "Custom mobile app development",
  },
]

export default function DigitalMarketingSection() {
  return (
    <section className="bg-black min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src=""
              alt="Digital Marketing"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Elevating Brands in the Digital Era.
            </h2>
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
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5">
                <Card className="bg-[#001a00] border-0">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full min-h-[200px]">
                    <div className="rounded-lg p-4 bg-[#002200] mb-4 w-16 h-16 flex items-center justify-center">
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="text-white"
                      />
                    </div>
                    <h4 className="text-white text-center font-semibold whitespace-pre-line mb-2">{service.title}</h4>
                    <p className="text-gray-400 text-sm text-center">{service.description}</p>
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
  )
}

