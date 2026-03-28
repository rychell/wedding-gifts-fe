import Link from "next/link";
import { weddingConfig } from "../config/wedding-info";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 bg-background mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {weddingConfig.site.title}. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground">
          Feito com ❤️ para celebrar o nosso amor.
        </p>
      </div>
    </footer>
  );
}