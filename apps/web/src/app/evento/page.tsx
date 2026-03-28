import { MapPin, Clock, Calendar, Car, Navigation } from "lucide-react";
import { Button } from "@wedding-gifts-fe/ui/components/button";
import { PageHeader } from "../../components/page-header";
import { weddingConfig } from "../../config/wedding-info";

export default function EventoPage() {
  const mapUrl = weddingConfig.location.mapUrl;

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="O Evento" />
      <main className="container max-w-5xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">O Evento</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preparamos tudo com muito carinho. Veja as informações importantes sobre o nosso grande dia.
          </p>
        </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Details */}
        <div className="space-y-8">
          <div className="bg-card text-card-foreground p-6 md:p-8 rounded-2xl shadow-sm border border-border/50">
            <h2 className="text-2xl font-serif mb-6 border-b pb-4">Cerimônia e Recepção</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Data</h3>
                  <p className="text-muted-foreground">{weddingConfig.date.fullDateString}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Horário</h3>
                  <p className="text-muted-foreground">{weddingConfig.date.formattedTime}</p>
                  <p className="text-sm text-muted-foreground mt-1">{weddingConfig.date.arrivalNotice}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Local</h3>
                  <p className="text-muted-foreground">{weddingConfig.location.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{weddingConfig.location.address}</p>
                </div>
              </div>

              <div className="pt-4">
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                  <Button className="w-full sm:w-auto gap-2 text-base h-12 px-6 rounded-lg">
                    <Navigation className="w-4 h-4" />
                    Ver no mapa
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground p-6 md:p-8 rounded-2xl shadow-sm border border-border/50">
            <h2 className="text-2xl font-serif mb-6 border-b pb-4">Informações Adicionais</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Estacionamento</h3>
                  <p className="text-muted-foreground">{weddingConfig.location.parkingInfo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Map Placeholder */}
        <div className="h-[400px] md:h-auto rounded-2xl overflow-hidden shadow-sm border border-border/50 relative bg-muted flex items-center justify-center">
          {/* We use a placeholder image for the map to keep it simple */}
          <div className="absolute inset-0">
            <img 
              src={weddingConfig.location.mapImage} 
              alt="Mapa da Região" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
          </div>
          
          <div className="relative z-10 bg-background/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center max-w-xs mx-4">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif text-xl mb-2">{weddingConfig.location.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{weddingConfig.location.description}</p>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full gap-2 rounded-lg">
                Abrir Rota
              </Button>
            </a>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
