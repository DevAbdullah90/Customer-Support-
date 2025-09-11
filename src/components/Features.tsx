"use client";
import { 
  MessageCircle, 
  ShoppingCart, 
  BarChart, 
  BrainCircuit, 
  ArrowUpRight, 
  Sparkles, 
  Zap, 
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Phone,
  Package,
  Globe,
  Radio,
  Layers,
  Activity,
  Target
} from "lucide-react";
import React, { useState } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
  key: string;
  stats?: string;
  cardType: "kanban" | "chart" | "table" | "network" | "team" | "dashboard";
  uniqueData: any;
}

const features: Feature[] = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "AI Chat Management",
    description: "Track and manage customer conversations with intelligent routing and status updates.",
    benefits: ["Smart Routing", "Status Tracking", "Priority Management", "Auto Escalation"],
    gradient: "from-blue-500 to-cyan-500",
    key: "1",
    stats: "0.3s response",
    cardType: "kanban",
    uniqueData: [
      { text: "Need help with order #12345", time: "2 min ago", tag: "Urgent", color: "red" },
      { text: "Return policy question", time: "15 min ago", tag: "Support", color: "blue" },
      { text: "Product recommendation", time: "1 hour ago", tag: "Sales", color: "green" }
    ]
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Support Analytics",
    description: "Comprehensive metrics and insights into your customer support performance.",
    benefits: ["Real-time Metrics", "Performance Tracking", "Trend Analysis", "ROI Insights"],
    gradient: "from-purple-500 to-pink-500",
    key: "2",
    stats: "40% more insights",
    cardType: "chart",
    uniqueData: [85, 92, 78, 95, 88, 90, 87]
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "System Monitoring",
    description: "Real-time monitoring of AI performance, response times, and system health.",
    benefits: ["Live Monitoring", "Performance Alerts", "Health Checks", "Auto Recovery"],
    gradient: "from-green-500 to-emerald-500",
    key: "3",
    stats: "99.9% uptime",
    cardType: "table",
    uniqueData: [
      { status: "200", type: "AI Response", name: "chat/v1/message", color: "green" },
      { status: "200", type: "Order Check", name: "orders/v1/status", color: "green" },
      { status: "404", type: "Product Lookup", name: "products/v1/search", color: "red" },
      { status: "200", type: "User Auth", name: "auth/v1/verify", color: "green" }
    ]
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Platform Integrations",
    description: "Connect seamlessly with your existing e-commerce platforms and tools.",
    benefits: ["Shopify Integration", "WooCommerce Support", "API Connections", "Custom Webhooks"],
    gradient: "from-orange-500 to-red-500",
    key: "4",
    stats: "50+ integrations",
    cardType: "network",
    uniqueData: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "PrestaShop"]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Collaboration",
    description: "Invite and manage team members with role-based access and permissions.",
    benefits: ["Role Management", "Team Invites", "Access Control", "Activity Tracking"],
    gradient: "from-indigo-500 to-purple-500",
    key: "5",
    stats: "Unlimited users",
    cardType: "team",
    uniqueData: [
      { name: "Sarah Johnson", role: "Admin", avatar: "SJ" },
      { name: "Mike Chen", role: "Manager", avatar: "MC" },
      { name: "Emily Davis", role: "Agent", avatar: "ED" }
    ]
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Performance Dashboard",
    description: "Real-time dashboard with key metrics, KPIs, and actionable insights.",
    benefits: ["Live Metrics", "KPI Tracking", "Custom Reports", "Data Export"],
    gradient: "from-teal-500 to-blue-500",
    key: "6",
    stats: "Real-time data",
    cardType: "dashboard",
    uniqueData: {
      metrics: [
        { label: "Response Time", value: "0.3s", change: "+5%" },
        { label: "Satisfaction", value: "98.5%", change: "+2%" },
        { label: "Resolved", value: "1,247", change: "+12%" }
      ]
    }
  }
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderKanbanCard = () => (
    <div className="space-y-3">
      {feature.uniqueData.map((item: any, idx: number) => (
        <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <p className="text-sm text-white/90 mb-2">{item.text}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/60">{item.time}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              item.color === 'red' ? 'bg-red-500/20 text-red-300' :
              item.color === 'blue' ? 'bg-blue-500/20 text-blue-300' :
              'bg-green-500/20 text-green-300'
            }`}>
              {item.tag}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderChartCard = () => (
    <div className="flex items-end justify-between h-24 space-x-2">
      {feature.uniqueData.map((height: number, idx: number) => (
        <div key={idx} className="flex flex-col items-center">
          <div 
            className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-t w-6 transition-all duration-500 hover:scale-110"
            style={{ height: `${height}%` }}
          ></div>
          <span className="text-xs text-white/60 mt-2">{idx + 1}</span>
        </div>
      ))}
    </div>
  );

  const renderTableCard = () => (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2 text-xs text-white/60 pb-2 border-b border-white/20">
        <span>Status</span>
        <span>Type</span>
        <span>Name</span>
      </div>
      {feature.uniqueData.map((row: any, idx: number) => (
        <div key={idx} className="grid grid-cols-3 gap-2 text-xs">
          <span className={`font-mono ${row.color === 'green' ? 'text-green-400' : 'text-red-400'}`}>
            {row.status}
          </span>
          <span className="text-white/80">{row.type}</span>
          <span className="text-white/60 font-mono truncate">{row.name}</span>
        </div>
      ))}
    </div>
  );

  const renderNetworkCard = () => (
    <div className="relative">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
          <Layers className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {feature.uniqueData.map((platform: string, idx: number) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300">
            {platform}
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeamCard = () => (
    <div className="space-y-3">
      {feature.uniqueData.map((member: any, idx: number) => (
        <div key={idx} className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {member.avatar}
            </div>
            <div>
              <p className="text-sm text-white/90 font-medium">{member.name}</p>
              <p className="text-xs text-white/60">{member.role}</p>
            </div>
          </div>
          <button className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-500/30 transition-all duration-300">
            Invite
          </button>
        </div>
      ))}
    </div>
  );

  const renderDashboardCard = () => (
    <div className="space-y-4">
      {feature.uniqueData.metrics.map((metric: any, idx: number) => (
        <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white/60">{metric.label}</span>
            <span className={`text-xs ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {metric.change}
            </span>
          </div>
          <div className="text-lg font-bold text-white">{metric.value}</div>
        </div>
      ))}
    </div>
  );

  const renderCardContent = () => {
    switch (feature.cardType) {
      case "kanban":
        return renderKanbanCard();
      case "chart":
        return renderChartCard();
      case "table":
        return renderTableCard();
      case "network":
        return renderNetworkCard();
      case "team":
        return renderTeamCard();
      case "dashboard":
        return renderDashboardCard();
      default:
        return null;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
      style={{
        animation: `fadeInUp 0.8s ease-out ${index * 0.15}s forwards`,
        opacity: 0,
      }}
    >
      {/* Main Card */}
      <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden">
        
        {/* Gradient Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} 
             style={{ padding: '2px' }}>
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl"></div>
        </div>

        {/* Card Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {feature.icon}
            </div>
            {feature.stats && (
              <div className="bg-white/10 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                {feature.stats}
              </div>
            )}
          </div>

          {/* Title & Description */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>

          {/* Unique Card Content */}
          <div className="flex-1 mb-4">
            {renderCardContent()}
          </div>

          {/* Benefits List */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
              <Sparkles className="w-3 h-3" />
              <span className="font-medium">Key Benefits:</span>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {feature.benefits.slice(0, 4).map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} flex-shrink-0`}></div>
                  <span className="truncate">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-4 pt-3 border-t border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Learn more</span>
              <div className={`w-6 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[size:60px_60px]"></div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              Everything You Need,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              and More
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of AI-powered features designed to transform your customer experience and drive business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.key} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <span>Explore All Features</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;