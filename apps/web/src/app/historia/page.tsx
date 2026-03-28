import { PageHeader } from "../../components/page-header";
import { weddingConfig } from "../../config/wedding-info";

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Nossa História" />
      <main className="container max-w-4xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Nossa História</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada momento que vivemos juntos nos trouxe até aqui. Conheça um pouco da nossa jornada.
          </p>
        </div>

      <div className="relative space-y-12">
        {/* Central Line */}
        <div className="absolute left-[19px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

        {weddingConfig.timeline.map((event, index) => {
          const Icon = event.icon;
          const isEven = index % 2 === 0;

          return (
            <div key={event.year} className={`relative flex items-center w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}>
              
              {/* Timeline Dot & Icon */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full border-4 border-background bg-primary/20 flex items-center justify-center shadow-sm z-10">
                <Icon className="w-4 h-4 text-primary" />
              </div>

              {/* Content Card */}
              <div className={`w-[calc(100%-3.5rem)] ml-[3.5rem] md:ml-0 md:w-[calc(50%-3rem)] ${isEven ? 'md:mr-[3rem] text-left md:text-right' : 'md:ml-[3rem] text-left'} bg-card text-card-foreground p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow`}>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {event.year}
                </span>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>
      </main>
    </div>
  );
}
