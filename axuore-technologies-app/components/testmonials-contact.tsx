"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Really amazing experience working with the team. They delivered exactly what we needed.",
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Great communication and excellent results. Would highly recommend their services.",
  },
  {
    name: "Emma Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Professional team that goes above and beyond. Very satisfied with the outcome.",
  },
]

export default function TestimonialsContact() {
  return (
    <section className="bg-black min-h-screen py-16 px-4">
      <div className="container mx-auto space-y-20">
        {/* Testimonials Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">What Our Clients Say ...</h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-[#2F4F2F]/80 border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-300">{testimonial.content}</p>
                          <p className="text-sm font-medium text-white">{testimonial.name}</p>
                        </div>
                      </div>
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
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-purple-500/10 rounded-3xl filter blur-3xl"></div>
          <Card className="relative bg-[#2F4F2F]/80 border-0 backdrop-blur-sm rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Ask Us Anything .....</h2>
              <form className="space-y-6">
                <Input placeholder="Your Name" className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400"
                />
                <Input placeholder="Contact" className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400" />
                <Textarea
                  placeholder="Ask Us Anything ......"
                  className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400 min-h-[120px]"
                />
                <Button className="w-full bg-[#1a2f1a] hover:bg-[#2F4F2F] text-white" size="lg">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

