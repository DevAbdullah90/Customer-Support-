"use client";
import { useState, useEffect, useRef } from "react";
import {
  Inbox,
  BarChart2,
  Zap,
  Users,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Smile,
  Clock,
  PieChart,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- Rich, Hyper-Realistic Mockup UI Views ---
// NOTE: These internal components do not need changes.

const InboxView = () => (
  <motion.div key="inbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="p-5 space-y-3 bg-gray-50 h-full">
    <div className="flex justify-between items-center"><h2 className="font-bold text-lg text-gray-800">Conversation with Sarah J.</h2><span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">OPEN</span></div>
    <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-4 h-[85%] overflow-y-auto">
      <div className="flex items-start gap-2.5"><Image src="/avatar-1.jpg" alt="Sarah J." width={32} height={32} className="rounded-full" /><div><div className="bg-gray-100 rounded-lg rounded-bl-none p-2 max-w-xs"><p className="text-xs font-bold text-gray-800">Sarah Johnson</p><p className="text-sm text-gray-700">Hi&lsquo; I&apos;m having trouble with my recent order #12345. The tracking hasn&apos;t updated in 3 days.</p></div><p className="text-xs text-gray-400 mt-1">2 min ago</p></div></div>
      <div className="flex items-start gap-2.5 justify-end"><div><div className="bg-blue-500 text-white rounded-lg rounded-br-none p-2 max-w-xs"><p className="text-xs font-bold">You (Alex)</p><p className="text-sm">Hi Sarah&lsquo; I&apos;m sorry to hear that. Let me look into it for you right away.</p></div><p className="text-xs text-gray-400 mt-1 text-right">1 min ago</p></div><Image src="/avatar-2.jpg" alt="Agent Alex" width={32} height={32} className="rounded-full" /></div>
    </div>
  </motion.div>
);

const AnalyticsView = () => (
  <motion.div key="analytics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="p-5 bg-gray-50 h-full">
    <h2 className="font-bold text-lg text-gray-800 mb-3">Performance Dashboard</h2>
    <div className="grid grid-cols-3 gap-3 mb-3"><div className="bg-white p-2 rounded-lg border"><p className="text-xs text-gray-500">Avg. Response</p><p className="text-lg font-bold text-gray-800">32m</p></div><div className="bg-white p-2 rounded-lg border"><p className="text-xs text-gray-500">Resolved</p><p className="text-lg font-bold text-gray-800">1,248</p></div><div className="bg-white p-2 rounded-lg border"><p className="text-xs text-gray-500">CSAT</p><p className="text-lg font-bold text-gray-800">9.2/10</p></div></div>
    <div className="bg-white p-3 rounded-lg border h-[65%]"><p className="font-semibold text-sm text-gray-700 mb-2">Tickets Trend</p><div className="h-[85%] w-full flex items-end"><svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M 0 40 C 10 10, 20 10, 30 25 S 50 45, 60 30 S 80 0, 90 10 L 100 20" fill="none" stroke="#3b82f6" strokeWidth="2" /></svg></div></div>
  </motion.div>
);

const AutomationView = () => (
  <motion.div key="automation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="p-5 bg-gray-50 h-full">
    <h2 className="font-bold text-lg text-gray-800 mb-3">Workflow: Urgent Orders</h2>
    <div className="space-y-2"><div className="p-2 bg-white border rounded-lg"><p className="text-xs font-bold text-purple-600 mb-1">TRIGGER</p><div className="flex items-center gap-2 text-sm"><MessageSquare className="w-4 h-4 text-gray-500"/>When a new ticket is created</div></div><div className="h-4 border-l-2 border-dashed border-gray-300 ml-5"></div><div className="p-2 bg-white border rounded-lg"><p className="text-xs font-bold text-amber-600 mb-1">CONDITION</p><div className="flex items-center gap-2 text-sm"><AlertTriangle className="w-4 h-4 text-gray-500"/>If subject contains &lsquo;Urgent&rsquo; OR &lsquo;Order&rsquo;</div></div><div className="h-4 border-l-2 border-dashed border-gray-300 ml-5"></div><div className="p-2 bg-white border rounded-lg"><p className="text-xs font-bold text-blue-600 mb-1">ACTION</p><div className="flex items-center gap-2 text-sm"><ArrowRight className="w-4 h-4 text-gray-500"/>Assign to &lsquo;Tier 2 Support&rsquo;</div></div></div>
  </motion.div>
);

const CustomerInsightsView = () => (
    <motion.div key="insights" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="p-5 bg-gray-50 h-full">
      <div className="flex items-center gap-3 mb-3"><Image src="/avatar-1.jpg" alt="Sarah J." width={48} height={48} className="rounded-full" /><div><h2 className="font-bold text-lg text-gray-800">Sarah Johnson</h2><p className="text-xs text-gray-500">sarah.j@example.com</p></div></div>
      <div className="grid grid-cols-2 gap-2 text-center mb-3"><div className="bg-white p-2 rounded-lg border"><p className="text-xs text-gray-500">Lifetime Spend</p><p className="font-bold text-base text-gray-800">$1,420</p></div><div className="bg-white p-2 rounded-lg border"><p className="text-xs text-gray-500">Sentiment</p><p className="font-bold text-base text-green-600 flex items-center justify-center gap-1">Positive <Smile className="w-4 h-4"/></p></div></div>
      <div className="bg-white p-3 rounded-lg border h-[60%]"><p className="font-semibold text-sm text-gray-700 mb-2">Recent Activity</p><ul className="text-xs text-gray-600 space-y-1.5"><li className="flex items-center gap-2"><Clock className="w-3 h-3 text-gray-400"/>Viewed &lsquo;Winter Jacket&rsquo; - 1h ago</li><li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500"/>Order #12345 Delivered - 2d ago</li></ul></div>
    </motion.div>
);

const features = [
  { id: "inbox", icon: Inbox, title: "Unified Agent Inbox", description: "Manage all customer conversations from email, chat, and social media in one single, streamlined view.", component: <InboxView /> },
  { id: "analytics", icon: BarChart2, title: "Real-Time Analytics", description: "Track key performance indicators like response time and customer satisfaction with our beautiful dashboards.", component: <AnalyticsView /> },
  { id: "automation", icon: Zap, title: "Intelligent Automation", description: "Automate repetitive tasks with simple, no-code workflows. From tagging tickets to assigning agents.", component: <AutomationView /> },
  { id: "insights", icon: Users, title: "360° Customer Insights", description: "Get a complete view of every customer, including their order history and past conversations.", component: <CustomerInsightsView /> },
];

const ProductShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) { setActiveFeature(entry.target.id); } });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    featureRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => featureRefs.current.forEach(ref => ref && observer.unobserve(ref));
  }, []);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-24 md:py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">A Better Way to Work</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">SupportHub is designed from the ground up to be powerful yet simple to use. Discover how our core features can revolutionize your workflow.</p>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block h-screen sticky top-0">
        <div className="container mx-auto px-4 h-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[550px]">
            <div className="w-full h-full rounded-2xl shadow-2xl border bg-gray-100 overflow-hidden">
              <div className="h-10 bg-gray-200 flex items-center px-4"><div className="flex gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div><div className="w-3 h-3 bg-gray-300 rounded-full"></div><div className="w-3 h-3 bg-gray-300 rounded-full"></div></div></div>
              <AnimatePresence mode="wait">{features.find((f) => f.id === activeFeature)?.component}</AnimatePresence>
            </div>
          </div>
          <div className="h-[550px] overflow-y-scroll no-scrollbar [scroll-snap-type:y_mandatory]">
            <div className="space-y-0">
              {features.map((feature, index) => (
                <div key={feature.id} id={feature.id} ref={(el) => { featureRefs.current[index] = el; }} className="h-[550px] flex flex-col justify-center transition-opacity duration-500 text-left [scroll-snap-align:center]" style={{ opacity: activeFeature === feature.id ? 1 : 0.3 }}>
                  <div className="inline-flex items-center gap-4 mb-4"><div className="p-3 rounded-full bg-blue-600 text-white"><feature.icon className="w-6 h-6" /></div><h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3></div>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE & TABLET VIEW --- */}
      <div className="lg:hidden block space-y-16">
        {features.map((feature) => (
          <div key={feature.id} className="container mx-auto px-4">
            {/* UI Mockup for Mobile */}
            <div className="relative h-[400px] sm:h-[500px] mb-8">
                <div className="w-full h-full rounded-2xl shadow-2xl border bg-gray-100 overflow-hidden">
                    <div className="h-10 bg-gray-200 flex items-center px-4"><div className="flex gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div><div className="w-3 h-3 bg-gray-300 rounded-full"></div><div className="w-3 h-3 bg-gray-300 rounded-full"></div></div></div>
                    {/* Render the component directly, no animation needed here */}
                    {feature.component}
                </div>
            </div>
            {/* Feature Description for Mobile */}
            <div className="text-center">
                <div className="inline-flex items-center gap-4 mb-4"><div className="p-3 rounded-full bg-blue-600 text-white"><feature.icon className="w-6 h-6" /></div><h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3></div>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;