import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  backHref?: any;
}

export function PageHeader({ title, backHref = "/" }: PageHeaderProps) {
  return (
    <header className="flex items-center gap-3 px-6 py-5">
      <Link href={backHref} className="text-foreground hover:opacity-80 transition-opacity">
        <ChevronLeft className="w-6 h-6 text-muted-foreground" />
      </Link>
      <h1 className="text-2xl font-serif text-foreground">{title}</h1>
    </header>
  );
}
