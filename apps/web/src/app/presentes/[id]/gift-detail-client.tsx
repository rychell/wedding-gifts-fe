"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Gift, ShieldCheck } from "lucide-react";
import { Button } from "@wedding-gifts-fe/ui/components/button";
import { Input } from "@wedding-gifts-fe/ui/components/input";
import { Label } from "@wedding-gifts-fe/ui/components/label";
import { Textarea } from "@wedding-gifts-fe/ui/components/textarea";
import { Checkbox } from "@wedding-gifts-fe/ui/components/checkbox";
import { Badge } from "@wedding-gifts-fe/ui/components/badge";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@wedding-gifts-fe/ui/components/dialog";

type GiftType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isOpenValue?: boolean;
  isMostChosen?: boolean;
};

export function GiftDetailClient({ gift }: { gift: GiftType }) {
  const [identify, setIdentify] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [customPrice, setCustomPrice] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const finalPrice = gift.isOpenValue ? Number(customPrice) : gift.price;

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          giftId: gift.id,
          title: gift.title,
          price: finalPrice,
          name: identify ? name : undefined,
          message: identify ? message : undefined,
        }),
      });
      const { checkoutUrl } = await res.json();
      window.location.href = checkoutUrl;
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative bg-background min-h-screen">
      <div className="relative w-full h-72 bg-muted">
        {gift.image ? (
          <Image
            src={gift.image}
            alt={gift.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-primary/5">
            <Gift className="size-16" />
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 text-white hover:bg-black/20 rounded-full"
          render={<Link href="/presentes" />}
        >
          <ChevronLeft className="size-8" />
        </Button>
      </div>

      <div className="bg-white rounded-t-[2rem] -mt-8 relative z-10 p-8 shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.1)]">
        <div className="mb-8 space-y-3">
          <h1 className="text-3xl font-serif font-bold text-foreground">{gift.title}</h1>
          <p className="text-muted-foreground font-light text-base leading-relaxed">
            {gift.description}
          </p>
          {gift.isMostChosen && (
            <div>
              <Badge className="bg-secondary/30 text-secondary-foreground hover:bg-secondary/30 border-none font-medium px-3 py-1 rounded-sm shadow-none">
                Mais escolhido
              </Badge>
            </div>
          )}
        </div>

        <div className="bg-muted p-5 rounded-xl mb-8">
          {gift.isOpenValue ? (
            <div className="space-y-3">
              <Label htmlFor="custom-price" className="text-sm font-medium text-muted-foreground">Valor da contribuição (R$)</Label>
              <Input 
                id="custom-price"
                type="number" 
                placeholder="Ex: 150,00"
                value={customPrice}
                onChange={(e) => setCustomPrice(e.target.value)}
                min="1"
                step="0.01"
                className="text-lg h-12 bg-white border-border/40 shadow-sm rounded-xl focus-visible:ring-primary/20"
              />
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg text-muted-foreground">Valor:</span>
              <span className="text-3xl font-bold text-primary">
                R$ {gift.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="identify" 
              checked={identify} 
              onCheckedChange={(checked) => setIdentify(checked as boolean)} 
              className="size-6 rounded-full border-2 border-primary/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label htmlFor="identify" className="text-base font-medium cursor-pointer text-foreground/90">
              Quero me identificar
            </Label>
          </div>

          {identify && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
              <Input 
                id="name" 
                placeholder="Seu nome" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-14 bg-white border border-border/80 shadow-sm rounded-xl focus-visible:ring-primary/20 text-base"
              />
              <Textarea
                id="message"
                placeholder="Deixe uma mensagem 💛"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="bg-white border border-border/80 shadow-sm rounded-xl focus-visible:ring-primary/20 text-base resize-none"
              />
            </div>
          )}
        </div>

        <Button 
          size="lg" 
          className="w-full text-lg h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md transition-all hover:shadow-lg"
          disabled={gift.isOpenValue && (!customPrice || Number(customPrice) <= 0)}
          onClick={() => setShowConfirm(true)}
        >
          Presentear com R$ {finalPrice > 0 ? finalPrice.toFixed(2).replace('.', ',') : '...'}
        </Button>

        <p className="text-center text-sm text-muted-foreground mt-6 flex items-center justify-center gap-1.5">
          <ShieldCheck className="size-4 text-emerald-600" />
          <span className="text-muted-foreground/80">Pagamento seguro via Mercado Pago</span>
        </p>
      </div>

      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="sm:max-w-md w-[90vw] bg-white border-none shadow-2xl rounded-2xl p-0 overflow-hidden">
          <DialogHeader className="p-8 pb-4 text-center space-y-3">
            <DialogTitle className="text-2xl font-serif italic font-medium text-center text-foreground">Confirmar Presente</DialogTitle>
          </DialogHeader>
          
          <div className="px-8 py-4 space-y-3 text-left bg-white mx-0 my-0">
            <div className="space-y-1">
              <p className="text-sm text-foreground">Você está presenteando:</p>
              <p className="text-lg font-serif font-medium text-foreground">{gift.title}</p>
            </div>
            
            <div>
              <p className="text-lg font-medium text-foreground">R$ {finalPrice.toFixed(2).replace('.', ',')}</p>
            </div>

            {identify && name && (
              <div className="pt-2">
                <p className="text-base text-foreground">De: {name}</p>
              </div>
            )}
          </div>

          <DialogFooter className="flex-col gap-3 p-8 pt-6">
            <Button 
              onClick={handleConfirm} 
              disabled={isLoading}
              className="w-full rounded-xl h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin mr-2 border-2 border-current border-t-transparent rounded-full size-4" />
                  Redirecionando...
                </>
              ) : (
                "Confirmar"
              )}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowConfirm(false)}
              disabled={isLoading}
              className="w-full rounded-xl h-12 border border-border/80 text-foreground bg-white hover:bg-muted text-lg font-medium"
            >
              Voltar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
