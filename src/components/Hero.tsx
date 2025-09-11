"use client";
import {
  ArrowRight,
  MessageSquare,
  Ticket,
  Sparkles,
  Search,
  AlertTriangle,
  Clock,
  BarChart,
  Zap,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // --- Reusable Avatar Component ---
  const Avatar = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
    <div className={`relative w-6 h-6 rounded-full overflow-hidden border-2 border-white ${className}`}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );

  return (
    <section className="relative w-full pt-24 pb-12 md:pt-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        {/* Main Text Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Resolve Issues Faster,
            <span className="block">No Matter Where Your{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Customers
              </span>{" "}
              Are
            </span>
          </h1>
          <p
            className={`text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Centralize your support tickets, communicate effortlessly, and meet deadlines with SupportHub – the all-in-one support tool for e-commerce teams.
          </p>
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <button className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>

        {/* --- RESPONSIVE FEATURE CARDS CONTAINER --- */}
        <div
          className={`relative mt-16 md:mt-20 h-auto md:h-96 transition-opacity duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Card 1: Performance Analytics (Far Left) - Hidden on Tablet and Mobile */}
          <div
            className={`w-80 p-5 bg-white rounded-3xl shadow-2xl border border-gray-100 transition-all duration-1000 ease-out z-0 
              hidden lg:block lg:absolute lg:left-1/2 lg:top-8 
              ${ isVisible ? "lg:opacity-100 lg:translate-x-[-155%] lg:rotate-[-16deg]" : "lg:opacity-0 lg:translate-x-[-145%] lg:rotate-[-20deg]" }`}
            style={{ transitionDelay: "700ms" }}
          >
            <h3 className="font-bold text-gray-900 mb-3">Performance Analytics</h3>
            <div className="flex items-end justify-between h-24 px-2">
              <div className="w-4 bg-blue-200 rounded-t-sm" style={{ height: '60%' }}></div>
              <div className="w-4 bg-blue-400 rounded-t-sm" style={{ height: '80%' }}></div>
              <div className="w-4 bg-blue-200 rounded-t-sm" style={{ height: '50%' }}></div>
              <div className="w-4 bg-blue-400 rounded-t-sm" style={{ height: '90%' }}></div>
              <div className="w-4 bg-blue-200 rounded-t-sm" style={{ height: '70%' }}></div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">Tickets Resolved Weekly</p>
          </div>

          {/* Card 2: Unified Inbox (Left) */}
          <div
            className={`relative mx-auto mb-8 md:mb-0 md:absolute md:left-1/2 md:top-0 w-80 p-5 bg-white rounded-3xl shadow-2xl border border-gray-100 transition-all duration-1000 ease-out z-10 
              ${ isVisible ? "opacity-100 translate-y-0 md:translate-x-[-110%] lg:-translate-x-[110%] md:rotate-[-8deg]" : "opacity-0 translate-y-4 md:translate-x-[-100%] lg:-translate-x-[100%] md:rotate-[-12deg]" }`}
            style={{ transitionDelay: "500ms" }}
          >
            <h3 className="font-bold text-gray-900 mb-3">Unified Agent Inbox</h3>
            <div className="space-y-3">
              <div className="flex justify-start"><div className="bg-gray-100 rounded-lg rounded-bl-none p-2 max-w-[85%]"><p className="text-xs text-gray-700">Hey team, has anyone checked the latest analytics?</p></div></div>
              <div className="flex justify-end"><div className="bg-blue-500 text-white rounded-lg rounded-br-none p-2 max-w-[85%]"><p className="text-xs">Great news! I&apos;ll update the report.</p></div></div>
            </div>
          </div>

          {/* Card 3: Manage Tickets (Center) */}
          <div
            className={`relative mx-auto mb-8 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-8 w-80 p-5 bg-white rounded-3xl shadow-2xl border border-gray-100 transition-all duration-1000 ease-out z-20 
              ${ isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95" }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="font-bold text-gray-900 mb-4">Manage Tickets Effortlessly</h3>
            <div className="space-y-3">
              <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-2.5"><div className="flex items-center justify-between"><h4 className="font-semibold text-xs text-gray-800">Landing Page Redesign</h4><span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">LIVE</span></div><div className="flex items-center -space-x-1.5 mt-2"><Avatar src="/avatar-1.jpg" alt="User 1" /><Avatar src="/avatar-2.jpg" alt="User 2" /><Avatar src="/avatar-3.jpg" alt="User 3" /></div></div>
              <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-2.5"><div className="flex items-center justify-between"><h4 className="font-semibold text-xs text-gray-800">Feature Development</h4><span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">PAUSED</span></div><div className="flex items-center -space-x-1.5 mt-2"><Avatar src="/avatar-4.jpg" alt="User 4" /><Avatar src="/avatar-5.jpg" alt="User 5" /></div></div>
            </div>
          </div>

          {/* Card 4: AI-Powered Assistance (Right) */}
          <div
            className={`relative mx-auto mb-8 md:mb-0 md:absolute md:left-1/2 md:top-0 w-80 p-5 bg-white rounded-3xl shadow-2xl border border-gray-100 transition-all duration-1000 ease-out z-10 
              ${ isVisible ? "opacity-100 translate-y-0 md:translate-x-[10%] lg:translate-x-[10%] md:rotate-[8deg]" : "opacity-0 translate-y-4 md:translate-x-0 lg:translate-x-0 md:rotate-[12deg]" }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="font-bold text-gray-900 mb-3">AI-Powered Assistance</h3>
            <div className="flex items-center gap-2 p-2 bg-gray-100/80 rounded-lg mb-3"><Sparkles className="w-4 h-4 text-purple-500" /><p className="text-xs font-medium text-gray-700 truncate">What tasks are causing delays?</p><Search className="w-4 h-4 text-gray-400" /></div>
            <div className="border border-gray-200 rounded-lg p-2"><p className="text-xs font-semibold text-blue-600 mb-1">Content Creation</p><div className="flex items-center gap-1 text-xs text-red-600"><AlertTriangle className="w-3 h-3" /><span>Waiting on resource approval</span></div></div>
          </div>

          {/* Card 5: Automated Workflows (Far Right) - Hidden on Tablet and Mobile */}
          <div
            className={`w-80 p-5 bg-white rounded-3xl shadow-2xl border border-gray-100 transition-all duration-1000 ease-out z-0 
              hidden lg:block lg:absolute lg:left-1/2 lg:top-8 
              ${ isVisible ? "opacity-100 lg:translate-x-[55%] lg:rotate-[16deg]" : "opacity-0 lg:translate-x-[45%] lg:rotate-[20deg]" }`}
            style={{ transitionDelay: "800ms" }}
          >
            <h3 className="font-bold text-gray-900 mb-3">Automated Workflows</h3>
            <div className="space-y-2"><div className="flex items-center gap-2 text-xs"><CheckCircle className="w-4 h-4 text-green-500" /><span className="font-medium text-gray-800">New Ticket Received</span></div><div className="h-4 border-l-2 border-dashed border-gray-300 ml-2"></div><div className="flex items-center gap-2 text-xs"><Zap className="w-4 h-4 text-purple-500" /><span className="font-medium text-gray-800">Tag as &quot;Urgent&quot;</span></div><div className="h-4 border-l-2 border-dashed border-gray-300 ml-2"></div><div className="flex items-center gap-2 text-xs"><ArrowRight className="w-4 h-4 text-gray-500" /><span className="font-medium text-gray-800">Assign to Tier 2 Team</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;