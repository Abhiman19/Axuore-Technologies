"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  // Initial Form State
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  // State for Form Data
  const [formData, setFormData] = useState(initialFormData);

  // Handle Input Change
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent Page Reload

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    try {
      const response = await fetch(`${baseUrl}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Show Success Message
        setFormData(initialFormData); // ✅ Reset the form after successful submission
      } else {
        alert(result.message || "Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <section className="bg-black min-h-screen py-16 px-[72px] flex justify-center">
      <div className="w-full max-w-3xl">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-purple-500/10 rounded-3xl filter blur-3xl pointer-events-none"></div>

        <Card className="relative bg-[#2F4F2F]/80 border-0 backdrop-blur-sm rounded-3xl">
          <CardContent className="p-10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Service Inquiry Form
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400 px-4 py-3"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400 px-4 py-3"
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400 px-4 py-3"
              />
              <Input
                name="service"
                placeholder="Service of Interest"
                value={formData.service}
                onChange={handleChange}
                className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400 px-4 py-3"
              />
              <Textarea
                name="message"
                placeholder="Project Details/Message"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#1a2f1a] border-0 text-white placeholder:text-gray-400 px-4 py-3 min-h-[120px]"
              />
              <Button
                type="submit"
                className="w-full bg-[#1a2f1a] hover:bg-[#2F4F2F] text-white py-3 text-lg"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
