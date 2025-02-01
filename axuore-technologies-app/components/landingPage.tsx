import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="h-screen bg-black bg-[url('/assets/download.png')] bg-no-repeat lg:bg-[length:836px] text-white font-inknut bg-right">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/PNG.png"
              alt="Axuore Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-purple-400 hover:underline transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/"
              className="text-white hover:text-purple-400 hover:underline transition-colors"
            >
              WHAT WE DO?
            </Link>
            <Link
              href="/"
              className="text-white hover:text-purple-400 hover:underline transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="text-white hover:text-purple-400 hover:underline transition-colors"
            >
              OUR WORK
            </Link>
            <Link
              href="/"
              className="text-white hover:text-purple-400 hover:underline transition-colors"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto px-[72px] py-16 md:py-24">
        <div className="space-y-14 max-w-[600px]">
          <h1 className="text-4xl leading-tight">
            Transforming Businesses with Cutting-Edge IT Solutions and Digital
            Marketing Excellence.
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Empowering your brand with innovative technology and strategic
            marketing to achieve unparalleled growth.
          </p>
          <button className="group inline-flex items-center space-x-2 bg-purple-900/50 border border-purple-500 px-6 py-3 rounded-md hover:bg-purple-900 transition-colors">
            <span>Explore More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
