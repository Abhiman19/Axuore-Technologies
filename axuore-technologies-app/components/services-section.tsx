"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Monitor, Code2, Smartphone, Cloud, UserRound } from "lucide-react"

const services = [
  {
    title: "UI / UX\nDesign",
    icon: Monitor,
  },
  {
    title: "Web\nDevelopement",
    icon: Code2,
  },
  {
    title: "Mobile App\nDevelopment",
    icon: Smartphone,
  },
  {
    title: "Cloud\nComputing",
    icon: Cloud,
  },
  {
    title: "IT\nConsulting",
    icon: UserRound,
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-black min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">We Do ...</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Innovative IT Solutions for a Smarter Tomorrow.
            </h3>
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/assets/service-section.jpg"
              alt="Technology Solutions"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
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
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5">
                  <Card className="bg-black border border-emerald-500/20">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="rounded-lg p-4 bg-black border border-emerald-500/20 mb-4">
                        <Icon className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h4 className="text-white text-center whitespace-pre-line">{service.title}</h4>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

