"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) {
    return (
      <div className="flex gap-4 justify-center text-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center p-3 md:p-4 bg-muted/50 rounded-lg min-w-[70px] md:min-w-[90px]">
            <span className="text-2xl md:text-4xl font-bold">00</span>
            <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
              --
            </span>
          </div>
        ))}
      </div>
    );
  }

  const timeBlocks = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-2 md:gap-4 justify-center text-center">
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/10 min-w-[70px] md:min-w-[90px] shadow-sm">
          <span className="text-2xl md:text-4xl font-bold text-primary">
            {block.value.toString().padStart(2, "0")}
          </span>
          <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1 font-medium">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
