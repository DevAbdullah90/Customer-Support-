'use client'
import React, { useState, useEffect, useRef, RefObject } from 'react';

//==========================================================================
// 1. HELPER HOOKS
//==========================================================================

/**
 * A custom hook to detect when a referenced element is in the viewport.
 */
const useInView = (ref: RefObject<HTMLElement>, options?: IntersectionObserverInit): boolean => {
  const [isInView, setIsInView] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (observer.current) {
          observer.current.disconnect();
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.current.observe(currentRef);
    }

    return () => {
      if (observer.current && currentRef) {
        observer.current.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isInView;
};

/**
 * A custom hook to animate a number counting up when it becomes visible.
 */
const useCountUp = (end: string | number, duration: number = 2000): [RefObject<HTMLDivElement>, number] => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.5 }); // ✅ removed "once: true"

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = typeof end === 'string' ? parseInt(end.replace(/[^0-9]/g, ''), 10) : end;
      if (isNaN(endValue)) return;
      const incrementTime = duration / endValue;
      const timer = setInterval(() => {
        start += 1;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return [ref, count];
};


//==========================================================================
// 2. CHILD COMPONENT FOR DISPLAYING A SINGLE STAT
//==========================================================================

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  const endValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9,]/g, '');
  const [ref, count] = useCountUp(endValue, 2000);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tighter">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-lg text-gray-600 mt-3">{label}</p>
    </div>
  );
};


//==========================================================================
// 3. MAIN COMPONENT EXPORT
//==========================================================================

const SalesAndListings: React.FC = () => {
  const stats: StatItemProps[] = [
    { value: "1,200+", label: "Sales Generated" },
    { value: "500+", label: "Product Listings" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gray-50">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-40"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">
                Trusted by Businesses Worldwide
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Our platform delivers tangible results, driving growth and ensuring customer happiness.
            </p>
        </div>
        <div className="relative bg-white border border-gray-200/80 rounded-2xl p-10 shadow-sm">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
             {stats.map((stat, index) => (
                <div key={index} className="relative group p-4">
                    {/* Animated Gradient Bar on Hover */}
                    <div 
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"
                      aria-hidden="true"
                    ></div>
                    <StatItem value={stat.value} label={stat.label} />
                </div>
            ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default SalesAndListings;
