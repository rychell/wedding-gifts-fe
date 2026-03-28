import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@wedding-gifts-fe/ui/components/button";
import { weddingConfig } from "../../config/wedding-info";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ThankYouPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const nome = resolvedSearchParams.nome as string | undefined;

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-8 text-center">
      <Heart className="w-16 h-16 text-[#cc5c5c] fill-[#cc5c5c] mb-8 drop-shadow-sm" />
      
      <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
        {weddingConfig.messages.thankYouTitle}
      </h1>
      
      <p className="font-serif text-lg md:text-xl text-foreground/80 mb-12">
        {weddingConfig.messages.thankYouMessage}
      </p>

      {nome && (
        <p className="font-serif text-xl mb-12">
          Obrigado, {nome}!
        </p>
      )}

      <div className="flex flex-col gap-4 w-full max-w-xs items-center">
        <Button 
          render={<Link href="/presentes" />} 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white rounded-xl w-full h-14 text-lg font-medium"
        >
          Ver mais presentes
        </Button>
        <Button 
          variant="outline" 
          render={<Link href="/" />} 
          size="lg" 
          className="border border-border/80 text-foreground bg-white hover:bg-muted rounded-xl w-full h-14 text-lg font-medium shadow-sm"
        >
          Voltar para o início
        </Button>
      </div>
    </div>
  );
}
