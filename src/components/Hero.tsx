import { MoveRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full pt-48 flex items-center justify-center text-center overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 w-full h-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="max-w-7xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-black  tracking-tighter animate-fade-in-up">
            The Future of Customer Interaction is Here
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Our AI agents handle calls, confirm orders, and even act as sales representatives, revolutionizing your customer interactions and driving growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up animation-delay-600">
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span>Get Started for Free</span>
              <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="text-black hover:text-primary font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
          <div className="flex justify-center items-center gap-4 mt-12 text-gray-500 animate-fade-in-up animation-delay-900">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <span>Based on 10,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;