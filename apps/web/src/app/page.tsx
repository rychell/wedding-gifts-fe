"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Heart, X, MessageCircle } from "lucide-react";
import { Button, buttonVariants } from "@wedding-gifts-fe/ui/components/button";
import { cn } from "@wedding-gifts-fe/ui/lib/utils";
import { weddingConfig } from "../config/wedding-info";

function DaysRemaining({ targetDate }: { targetDate: string }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const calculateDays = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setDays(Math.ceil(difference / (1000 * 60 * 60 * 24)));
      } else {
        setDays(0);
      }
    };
    calculateDays();
  }, [targetDate]);

  if (days === null) return <span className="opacity-0">{weddingConfig.messages.countdownPrefix} ... {weddingConfig.messages.countdownSuffix}</span>;
  
  return <span>{days > 0 ? `${weddingConfig.messages.countdownPrefix} ${days} ${weddingConfig.messages.countdownSuffix}` : weddingConfig.messages.countdownFinished}</span>;
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${weddingConfig.contact.phoneNumber}?text=${encodeURIComponent(weddingConfig.contact.whatsappMessage)}`;

  return (
    <main className="fixed inset-0 z-[100] flex flex-col bg-black overflow-hidden font-sans">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={weddingConfig.site.heroImage}
          alt="Casal"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Top Icons */}
      <div className="absolute top-6 left-6 z-20">
        <button 
          onClick={() => setIsMenuOpen(true)} 
          className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-6 right-6 z-20">
        <div className="p-2 text-white">
          <Heart className="w-6 h-6" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute inset-0 bg-background/95 z-[150] flex flex-col p-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="p-2 text-foreground hover:bg-muted rounded-full transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8 text-2xl font-serif">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Home</Link>
            <Link href="/historia" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Nossa História</Link>
            <Link href="/evento" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">O Evento</Link>
            <Link href="/presentes" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Lista de Presentes</Link>
          </nav>
        </div>
      )}

      {/* Center Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-4 pb-12 md:pb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-lg tracking-wide">
          {weddingConfig.couple.names}
        </h1>
        <p className="text-xl md:text-2xl text-white font-light tracking-widest uppercase mb-2 drop-shadow">
          {weddingConfig.date.formattedDate}
        </p>
        <p className="text-lg md:text-xl text-white font-medium drop-shadow">
          <DaysRemaining targetDate={weddingConfig.date.iso} />
        </p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Wave Separator */}
        <div className="w-full leading-[0]">
          <svg
            viewBox="0 -20 1440 140"
            className="w-full h-[60px] md:h-[100px] block fill-white drop-shadow-[0_-10px_15px_rgba(0,0,0,0.1)]"
            preserveAspectRatio="none"
          >
            <path d="M0,60 C400,-20 1000,140 1440,60 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* Bottom Card */}
        <div className="bg-white text-card-foreground w-full px-6 pb-8 md:pb-10 pt-4 flex flex-col items-center">
          <p className="font-serif italic text-xl md:text-2xl text-center mb-8 text-foreground/75 max-w-sm leading-relaxed">
          {weddingConfig.site.welcomeMessage}
        </p>

        <div className="w-full max-w-sm space-y-3 flex flex-col">
          <Link
            href="/presentes"
            className={cn(buttonVariants({ variant: "default" }), "w-full rounded-lg h-14 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90")}
          >
            Ver lista de presentes
          </Link>

          <Link
            href="/evento"
            className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-lg h-14 text-base font-medium border-border text-primary hover:bg-muted")}
          >
            Ver detalhes do evento
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-10 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#5C8E58]" />
            Compartilhar com amigos
          </a>
        </div>
      </div>
      </div>
    </main>
  );
}
