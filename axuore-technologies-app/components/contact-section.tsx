import { ArrowRight, Phone, Mail, MapPin, Linkedin } from "lucide-react"
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="bg-black min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <div className="flex items-center space-x-4 group">
            <h2 className="text-4xl md:text-5xl font-bold text-white">LET'S TALK</h2>
            <ArrowRight className="w-8 h-8 text-white transform group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        <div className="space-y-12">
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
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61571339259499"
              target="_blank"
              className="text-white/80 hover:text-white transition-colors"
            >
              <SiFacebook className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-white/60" />
              <Link href="tel:+919172911970" className="text-lg text-white hover:text-white/80 transition-colors">
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
      </div>
    </section>
  )
}

