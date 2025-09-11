"use client";
import { MessageCircle, Phone, Mail, Clock, Users, Zap, CheckCircle, Star, Quote } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- Mockup UI Views for Interactive Demo ---
// NOTE: These internal components do not need changes for responsiveness.

const ChatView = () => (
  <div className="p-4 sm:p-6 space-y-4 h-full flex flex-col">
    {/* Messages */}
    <div className="flex-grow space-y-4 overflow-y-auto pr-2">
      {[
        { from: 'user', text: "Hi! I'm having trouble with my recent order. Can you help?", delay: 0.5 },
        { from: 'ai', text: "Of course! I'd be happy to help. Could you please provide your order number?", delay: 1.5 },
        { from: 'user', text: "It's #ORD-12345", delay: 2.5 },
        { from: 'ai', text: "Perfect! It's currently being prepared and will be dispatched tomorrow. You'll receive tracking details via email.", delay: 3.5 },
      ].map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: msg.delay }}
          className={`flex items-start gap-3 ${msg.from === 'ai' ? 'justify-end' : ''}`}
        >
          {msg.from === 'user' && <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>}
          <div className={`${msg.from === 'ai' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-gray-100 text-gray-800 rounded-tl-sm'} rounded-2xl p-3 max-w-[80%]`}>
            <p className="text-sm">{msg.text}</p>
          </div>
          {msg.from === 'ai' && <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>}
        </motion.div>
      ))}
    </div>
    {/* Input */}
    <div className="flex-shrink-0 flex gap-2">
      <input type="text" placeholder="Type your message..." className="flex-1 px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
      <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">Send</button>
    </div>
  </div>
);

const PhoneView = () => (
    <div className="p-4 sm:p-6 space-y-3 h-full overflow-y-auto">
        {[
            { name: "John D.", status: "Answered", duration: "5m 12s", incoming: true },
            { name: "Sarah J.", status: "Answered", duration: "12m 34s", incoming: true },
            { name: "Mike C.", status: "Missed", duration: "", incoming: true },
            { name: "You", status: "Outgoing", duration: "2m 5s", incoming: false },
        ].map((call, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg border border-gray-600"
            >
                <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${call.status === 'Missed' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                        <Phone className="w-4 h-4" />
                    </div>
                    <div>
                        <p className="font-semibold text-white text-sm">{call.name}</p>
                        <p className={`text-xs ${call.status === 'Missed' ? 'text-red-400' : 'text-gray-400'}`}>{call.status}</p>
                    </div>
                </div>
                <p className="text-sm text-gray-300">{call.duration}</p>
            </motion.div>
        ))}
    </div>
);

const EmailView = () => (
    <div className="p-4 sm:p-6 h-full flex flex-col">
        <div className="flex-shrink-0 mb-3">
            <p className="text-xs text-gray-400">From: Emily R. {'<emily.r@example.com>'}</p>
            <h3 className="font-semibold text-white">Re: Question about return policy</h3>
        </div>
        <div className="flex-grow bg-gray-700/50 p-3 rounded-lg border border-gray-600 text-sm text-gray-300 overflow-y-auto">
            <p>Hi team,</p><br/><p>I was wondering what the return policy is for items purchased on sale? I couldn&apos;t find the information on your website.</p><br/><p>Thanks,</p><p>Emily</p>
        </div>
    </div>
);


const CustomerSupport = () => {
  const [activeTab, setActiveTab] = useState('chat');

  const supportFeatures = [
    { icon: <MessageCircle className="w-7 h-7" />, title: "Live Chat Support", description: "< 30s avg. response" },
    { icon: <Phone className="w-7 h-7" />, title: "24/7 Phone Support", description: "99.9% uptime" },
    { icon: <Mail className="w-7 h-7" />, title: "Email Ticketing", description: "< 2hr response time" }
  ];

  const testimonials = [ // double the array for a seamless loop
    { name: "Sarah Johnson", role: "E-commerce Manager", image: "/avatar-1.jpg", text: "The AI support system has transformed our customer service. Response times are incredible and satisfaction is at an all-time high!" },
    { name: "Michael Chen", role: "CEO, Fashion Hub", image: "/avatar-2.jpg", text: "We've seen a 40% increase in customer retention since implementing this solution. The personalized support experience is game-changing." },
    { name: "Emily Rodriguez", role: "Customer Success", image: "/avatar-3.jpg", text: "Our support team can now handle 3x more queries with the same resources. The AI assistance is incredibly intelligent and helpful." },
    { name: "Johnathan Doe", role: "Operations Lead", image: "/avatar-4.jpg", text: "An absolutely essential tool for any serious e-commerce business. It has saved us countless hours and improved our support quality immensely." },
    { name: "Sarah Johnson", role: "E-commerce Manager", image: "/avatar-1.jpg", text: "The AI support system has transformed our customer service. Response times are incredible and satisfaction is at an all-time high!" },
    { name: "Michael Chen", role: "CEO, Fashion Hub", image: "/avatar-2.jpg", text: "We've seen a 40% increase in customer retention since implementing this solution. The personalized support experience is game-changing." },
    { name: "Emily Rodriguez", role: "Customer Success", image: "/avatar-3.jpg", text: "Our support team can now handle 3x more queries with the same resources. The AI assistance is incredibly intelligent and helpful." },
    { name: "Johnathan Doe", role: "Operations Lead", image: "/avatar-4.jpg", text: "An absolutely essential tool for any serious e-commerce business. It has saved us countless hours and improved our support quality immensely." },
  ];

  const TABS = [
    { id: 'chat', label: 'Live Chat', component: <ChatView /> },
    { id: 'phone', label: 'Phone', component: <PhoneView /> },
    { id: 'email', label: 'Email', component: <EmailView /> },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Customer Support Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Support That Never Sleeps</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Provide exceptional customer service with our AI-powered support system that handles inquiries, resolves issues, and delights customers 24/7.
          </p>
        </div>

        {/* Support Features */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-gray-50 rounded-2xl border border-gray-200/80 p-4 md:p-8 mb-20">
          {supportFeatures.map((feature, index) => (
            <div key={index} className="px-4 md:px-8 py-6 text-center flex flex-col items-center">
              <div className="p-4 bg-white rounded-full shadow-md mb-4 border border-gray-200/80">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Support Demo */}
      <div className="w-full bg-gray-900 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
            {/* Grid container for responsive layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text content */}
                <div className="text-white text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Experience Our Support System, Live.</h3>
                    <p className="text-lg text-gray-400 mb-8">
                    See how our AI-powered support system handles real customer inquiries with intelligence, empathy, and speed across every channel.
                    </p>
                    
                    {/* Support Tabs */}
                    <div className="relative flex gap-2 md:gap-4 mb-8 p-1 bg-gray-800 rounded-xl max-w-sm mx-auto lg:mx-0">
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="relative z-10 w-full py-2.5 rounded-lg text-sm font-semibold capitalize transition-colors duration-300"
                                style={{ color: activeTab === tab.id ? 'white' : '#9ca3af' }}
                            >
                                {tab.label}
                            </button>
                        ))}
                        <motion.div
                            layoutId="active-tab-indicator"
                            className="absolute inset-0 z-0 bg-blue-600 rounded-lg"
                            style={{
                                width: `calc(100% / ${TABS.length})`,
                                x: `${TABS.findIndex(t => t.id === activeTab) * 100}%`,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                </div>
            
                {/* Support Interface Mockup */}
                <div className="h-96 sm:h-[450px] bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 flex flex-col">
                    <div className="flex-shrink-0 bg-gray-900/50 p-3 text-white border-b border-gray-700">
                        <h4 className="font-semibold text-sm">AI Support Agent</h4>
                        <div className="flex items-center gap-1.5 text-xs text-green-400"><div className="w-1.5 h-1.5 bg-current rounded-full"></div>Online</div>
                    </div>
                    <AnimatePresence mode="wait">
                        {TABS.find(t => t.id === activeTab)?.component}
                    </AnimatePresence>
                </div>
            </div>
        </div>
      </div>
      
      {/* Customer Testimonials Marquee */}
      <div className="py-20 bg-white overflow-hidden">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Customers Say</h3>
        <div className="relative">
          <div className="flex animate-marquee-normal">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[90vw] sm:w-80 max-w-sm mx-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Quote className="w-8 h-8 text-gray-200 mb-4" />
                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       <style jsx global>{`
        @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .animate-marquee-normal {
            animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CustomerSupport;