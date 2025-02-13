// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";

// export default function Contact() {
//   const initialFormData = {
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [dialogMessage, setDialogMessage] = useState("");

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

//     try {
//       const response = await fetch(`${baseUrl}/api/send-email`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setDialogMessage(result.message);
//         setIsDialogOpen(true);
//         setFormData(initialFormData);
//       } else {
//         setDialogMessage(
//           result.message || "Failed to send the message. Please try again."
//         );
//         setIsDialogOpen(true);
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setDialogMessage("Failed to send the message. Please try again.");
//       setIsDialogOpen(true);
//     }
//   };

//   return (
//     <section className="bg-black min-h-screen flex justify-center items-center px-6 md:px-16">
//       <div className="w-full max-w-3xl relative">
//         <div className="absolute inset-0 bg-white/10 rounded-3xl filter blur-lg pointer-events-none"></div>
//         <Card className="relative bg-[#2F4F2F]/30 border border-[#1a2f1a]/50 shadow-lg backdrop-blur-xl rounded-3xl">
//           <CardContent className="p-10 md:p-12">
//             <h2 className="text-3xl font-semibold text-white text-center mb-8 tracking-wide">
//               Service Inquiry Form
//             </h2>
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <Input
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="bg-[#1a2f1a]/50 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <Input
//                 name="email"
//                 type="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="bg-[#1a2f1a]/50 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <Input
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="bg-[#1a2f1a]/50 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <select
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 className="bg-[#1a2f1a]/50 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
//               >
//                 <option value="" disabled>
//                   Select a Service
//                 </option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="Mobile App Development">
//                   Mobile App Development
//                 </option>
//                 <option value="UI/UX Design">UI/UX Design</option>
//                 <option value="Cloud Computing">Cloud Computing</option>
//                 <option value="IT Consulting">IT Consulting</option>
//               </select>
//               <Textarea
//                 name="message"
//                 placeholder="Project Details/Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="bg-[#1a2f1a]/50 border border-gray-600 text-white placeholder-gray-400 px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]"
//               />
//               <Button
//                 type="submit"
//                 className="w-full bg-[#1a2f1a]/50 hover:bg-[#2F4F2F]/50 text-white py-3 text-lg font-medium rounded-lg shadow-md transition-transform transform hover:scale-105"
//               >
//                 Submit
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Submission Status</DialogTitle>
//             <DialogDescription>{dialogMessage}</DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    try {
      const response = await fetch(`${baseUrl}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setDialogMessage(result.message);
        setIsDialogOpen(true);
        setFormData(initialFormData);
      } else {
        setDialogMessage(result.message || "Failed to send the message. Please try again.");
        setIsDialogOpen(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setDialogMessage("Failed to send the message. Please try again.");
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-neutral-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-blue-500 mb-6 text-center">Service Inquiry Form</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-500">
            Full Name
          </Label>
          <Input
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="border-gray-200"
          />
        </div>

        {/* Email & Phone Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-500">
              Email Address
            </Label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-200"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-500">
              Phone Number
            </Label>
            <Input
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="border-gray-200"
            />
          </div>
        </div>

        {/* Service Selection */}
        <div className="space-y-2">
          <Label className="text-gray-500">Select a Service</Label>
          <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
            <SelectTrigger className="border-gray-200">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Web Development">Web Development</SelectItem>
              <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
              <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
              <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
              <SelectItem value="IT Consulting">IT Consulting</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-500">
            Project Details/Message
          </Label>
          <Textarea
            name="message"
            placeholder="Enter project details or message"
            value={formData.message}
            onChange={handleChange}
            className="border-gray-200 min-h-[120px]"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4">
          <Button type="reset" variant="ghost" className="text-gray-500 hover:text-gray-700" onClick={() => setFormData(initialFormData)}>
            Reset
          </Button>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-8">
            Submit
          </Button>
        </div>
      </form>

      {/* Dialog for Submission Status */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submission Status</DialogTitle>
            <DialogDescription>{dialogMessage}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
