"use client";
import { useEffect, useState } from "react";

const useCountUp = (target: number, duration: number = 2000, start: boolean = false) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (!start) return;
      
      let current = 0;
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(current));
        }
      }, 16);
  
      return () => clearInterval(timer);
    }, [target, duration, start]);
  
    return count;
};

export default useCountUp;