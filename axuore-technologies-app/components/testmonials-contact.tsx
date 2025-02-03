"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Really amazing experience working with the team. They delivered exactly what we needed.",
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Great communication and excellent results. Would highly recommend their services.",
  },
  {
    name: "Emma Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Professional team that goes above and beyond. Very satisfied with the outcome.",
  },
  {
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Excellent service! The project was completed on time with exceptional quality.",
  },
  {
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Very responsive and dedicated team. Helped us achieve our business goals.",
  },
];

export default function TestimonialsContact() {
  return (
    <section className="bg-black min-h-screen py-16 px-[72px] block items-center">
      <div className="container mx-auto flex flex-col space-y-12 py-8 px-4">
        {/* Testimonials Section (Carousel) */}
        <div className="w-full flex flex-col">
          <h2 className="text-3xl font-bold text-white mb-8">
            What Our Clients Say ...
          </h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <Card className="bg-[#2F4F2F]/80 border-0 p-6 rounded-xl min-h-[280px]">
                    {" "}
                    {/* Set minimum height */}
                    <CardContent className="flex flex-col items-center text-center space-y-4 h-full">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <p className="text-sm text-gray-300">
                        {testimonial.content}
                      </p>
                      <p className="text-sm font-medium text-white">
                        {testimonial.name}
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

        {/* Contact Form Section */}
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-purple-500/10 rounded-3xl filter blur-3xl"></div>
          <Card className="relative bg-[#2F4F2F]/80 border-0 backdrop-blur-sm rounded-3xl max-h-screen overflow-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Ask Us Anything .....
              </h2>
              <form className="space-y-6">
                <Input
                  placeholder="Your Name"
                  className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400"
                />
                <Input
                  placeholder="Contact"
                  className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Ask Us Anything ......"
                  className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400 min-h-[120px]"
                />
                <Button
                  className="w-full bg-[#1a2f1a] hover:bg-[#2F4F2F] text-white"
                  size="lg"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
