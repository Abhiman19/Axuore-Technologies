import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Target,
  Flag,
  Linkedin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import TestimonialsContact from "@/components/contact";
import { getTestimonials } from "@/lib/testimonials";
import { getStats } from "@/lib/stats";

export default async function Axuore() {
  const testimonials = await getTestimonials();
  const stats = await getStats();
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
  const other_services = [
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
  const statsIcon = [
    {
      icon: Users,
    },
    {
      icon: Target,
    },
    {
      icon: Flag,
    },
  ];
  return (
    <div className="h-screen">
      <div
        className="relative min-h-screen bg-[url('/assets/landingPage2.jpg')] bg-cover bg-no-repeat bg-bottom text-white"
        id="home"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>

        {/* Navigation */}
        <nav className="container relative z-10 mx-auto px-6 lg:px-13 py-6">
          <div className="flex items-center justify-between">
            <Link href="#home" className="flex items-center">
              <Image
                src="/assets/PNG.png"
                alt="Axuore Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="#home"
                  className="text-white hover:text-purple-400 hover:underline transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="#we-do"
                  className="text-white hover:text-purple-400 hover:underline transition-colors"
                >
                  WHAT WE DO?
                </Link>
                <Link
                  href="#about"
                  className="text-white hover:text-purple-400 hover:underline transition-colors"
                >
                  ABOUT US
                </Link>
                <Link
                  href="#work"
                  className="text-white hover:text-purple-400 hover:underline transition-colors"
                >
                  OUR WORK
                </Link>
                <Link
                  href="#contacts"
                  className="text-white hover:text-purple-400 hover:underline transition-colors"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container relative z-10 mx-auto px-6 lg:px-13 md:py-24 flex flex-col justify-center">
          <div className="space-y-10 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Transforming Businesses with Cutting-Edge IT Solutions and Digital
              Marketing Excellence.
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Empowering your brand with innovative technology and strategic
              marketing to achieve unparalleled growth.
            </p>
            <Link
              href="#we-do"
              className="group inline-flex items-center space-x-2 bg-purple-900/50 border border-purple-500 px-6 py-3 rounded-md hover:bg-purple-900 transition-colors"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-black via-gray-900 to-emerald-900 overflow-hidden px-4 sm:px-6 lg:px-14"
        id="we-do"
      >
        {/* "We Do ..." positioned at the top-left */}
        <h2 className="absolute top-4 sm:top-6 md:top-12 left-4 sm:left-6 md:left-12 text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400">
          Discover Our Comprehensive Services
        </h2>

        <div className="container mx-auto flex-grow flex flex-col justify-center py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 mb-6 sm:mb-8">
            <div className="max-w-lg text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left text-white">
                Innovative Solutions for a Smarter Tomorrow.
              </h3>
            </div>
            <div className="relative rounded-3xl overflow-hidden w-full sm:w-auto">
              <Image
                src="/assets/service-section2.png"
                alt="Technology Solutions"
                width={500}
                height={200}
                className="object-cover w-full sm:w-[500px] h-auto"
              />
            </div>
          </div>

          {/* Services Carousel */}
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-h-[80vh]"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  <Card className="bg-gray-800 backdrop-blur-lg border border-   rounded-xl shadow-md hover:bg-gray-700 transition-colors">
                    <CardContent className="flex flex-col items-center text-center justify-center p-4 sm:p-6">
                      <div className="rounded-lg p-3 sm:p-4 bg-black border border-emerald-600/20 mb-3 sm:mb-4">
                        <Image
                          src={service.Image}
                          alt={service.title}
                          width={80}
                          height={80}
                          className="w-16 h-16 sm:w-20 sm:h-20"
                        />
                      </div>
                      <h4 className="text-white text-center whitespace-pre-line text-sm sm:text-base">
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

      {/* Digital Marketing Section */}
      <section className="bg-black py-12 px-6 lg:px-16 flex flex-col">
        <div className="container mx-auto text-center">
          {/* Top Content Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            <div className="relative max-w-lg">
              <Image
                src="/assets/digital-marketing-section.png"
                alt="Digital Marketing"
                width={450}
                height={300}
                className="object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay rounded-3xl" />
            </div>
            <div className="md:max-w-lg flex flex-col px-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white text-left">
                Elevating Brands in the Digital Era.
              </h3>
            </div>
          </div>

          {/* Carousel Section */}
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {other_services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5"
                >
                  <Card className="bg-[#001a00] border-0 min-h-[320px]">
                    <CardContent className="flex flex-col items-center text-center justify-center p-6 h-full">
                      <div className="rounded-lg p-4 bg-[#002200] mb-4 w-40 h-40 flex items-center justify-center">
                        <Image
                          src={service.Image || "/placeholder.svg"}
                          alt={service.title}
                          width={200}
                          height={200}
                          className="text-white"
                        />
                      </div>
                      <h4 className="text-white font-semibold whitespace-pre-line mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
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

      {/* About Us Section */}
      <section
        className="bg-black min-h-screen flex items-center py-12 px-6 lg:px-16"
        id="about"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">About Us</h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            {/* About Us Text */}
            <div className="space-y-5">
              <p className="text-lg text-gray-200 leading-relaxed">
                At Axoure Technologies, we specialize in delivering innovative
                IT solutions and impactful digital marketing services. Our
                expert team is dedicated to helping businesses streamline
                operations, enhance their online presence, and achieve
                sustainable growth.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                With a focus on creativity, technology, and strategy, we turn
                ideas into reality and ensure your success in the digital era.
              </p>
            </div>

            {/* Image with Refined Glow Effect */}
            <div className="relative flex justify-center">
              <div
                className="absolute -inset-6 md:-inset-8 bg-purple-500/30 rounded-full 
          filter blur-[40px] animate-pulse"
              ></div>
              <div
                className="absolute -inset-8 md:-inset-10 bg-purple-500/20 rounded-full 
          filter blur-[60px] opacity-70 animate-pulse"
              ></div>
              <div className="relative z-10">
                <Image
                  src="/assets/about.svg"
                  alt="Team Illustration"
                  width={500}
                  height={350}
                  className="w-full max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-10">
            {stats.map(
              (
                stat: {
                  title: string;
                  value: string;
                  icon: string;
                },
                index: number
              ) => {
                const Icon = statsIcon[index].icon;
                return (
                  <div
                    key={index}
                    className="bg-purple-500/10 rounded-lg p-6 backdrop-blur-lg 
            transform hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 bg-purple-500/20 rounded-full shadow-md">
                        <Icon className="w-6 h-6 text-purple-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {stat.title}
                      </h3>
                      <p className="text-3xl font-bold text-purple-300">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Testimonials & Contact Section */}
      <section className="bg-black py-12 px-6 lg:px-16" id="work">
        <div className="container mx-auto flex flex-col space-y-16">
          <div className="w-full flex flex-col text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Client Experiences with Our Services
            </h2>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-3 md:-ml-6">
                {testimonials.map(
                  (
                    testimonial: {
                      name: string;
                      description: string;
                      avatar: string;
                    },
                    index: number
                  ) => (
                    <CarouselItem
                      key={index}
                      className="pl-3 md:pl-6 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <Card className="bg-[#2F4F2F]/80 border-0 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105">
                        <CardContent className="flex flex-col space-y-4 h-full">
                          {/* Profile Picture & Name */}
                          <div className="flex items-center space-x-4">
                            <Avatar className="w-14 h-14">
                              <AvatarImage
                                src={testimonial.avatar}
                                alt={testimonial.name}
                              />
                              <AvatarFallback>
                                {testimonial.name[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-xl font-semibold text-white">
                                {testimonial.name}
                              </p>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-base text-gray-300 leading-relaxed text-left">
                            {testimonial.description}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
          <TestimonialsContact />
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-black py-12 px-[72px]" id="contacts">
        <div className="container mx-auto">
          <div className="mb-8">
            <div className="flex space-x-4 group">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                LET&apos;S TALK
              </h2>
              <ArrowRight className="w-8 h-8 text-white transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          <div className="space-y-8">
            {/* Social Links */}
            <div className="flex space-x-6">
              <Link
                href="https://www.linkedin.com/company/axuore-technologies/"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/axuore_official/"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <SiInstagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://x.com/Axuore_Official"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <SiX className="w-6 h-6" />
                <span className="sr-only">X</span>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61571339259499"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <SiFacebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-white/60" />
                <Link
                  href="tel:+919172911970"
                  className="text-lg text-white hover:text-white/80 transition-colors"
                >
                  +91 9172911970
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-white/60" />
                <Link
                  href="mailto:info.axuore@gmail.com"
                  className="text-lg text-white hover:text-white/80 transition-colors"
                >
                  info.axuore@gmail.com
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-white/60" />
                <p className="text-lg text-white">Pune, India.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/20 pt-6 text-center text-white/60">
            <p>
              &copy; {new Date().getFullYear()} Axuore Technologies. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
