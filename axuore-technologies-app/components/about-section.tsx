import { Users, Target, Flag } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const stats = [
    {
      title: "Active Clients",
      value: "100+",
      icon: Users,
    },
    {
      title: "Projects Done",
      value: "100+",
      icon: Target,
    },
    {
      title: "Success Rate",
      value: "98%",
      icon: Flag,
    },
  ]

  return (
    <section className="bg-black min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16">About Us .....</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed">
              At Axoure Technologies, we specialize in delivering innovative IT solutions and impactful digital
              marketing services. Our expert team is dedicated to helping businesses streamline operations, enhance
              their online presence, and achieve sustainable growth.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              With a focus on creativity, technology, and strategy, we turn ideas into reality and ensure your success
              in the digital era.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full filter blur-3xl"></div>
            <div className="relative z-10">
              <Image
                src="/assets/about.svg"
                alt="Team Illustration"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-purple-500/10 rounded-lg p-6 backdrop-blur-sm 
                         transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{stat.title}</h3>
                  <p className="text-3xl font-bold text-purple-300">{stat.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

