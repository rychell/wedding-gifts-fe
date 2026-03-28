import { Stars, Heart, Plane, Home, HeartHandshake } from "lucide-react";

export const weddingConfig = {
  couple: {
    names: "Mayara & Rychell",
  },
  site: {
    title: "Nosso Casamento",
    description: "Site do casamento de Mayara e Rychell",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop",
    welcomeMessage: `"Sua presença já é o nosso maior presente..."`,
  },
  date: {
    iso: "2026-06-21T16:00:00-03:00",
    formattedDate: "21 Junho de 2026",
    formattedTime: "16:00 horas",
    fullDateString: "Domingo, 21 Junho de 2026",
    arrivalNotice: "Pedimos a gentileza de chegar com 30 minutos de antecedência.",
  },
  location: {
    name: "Buffet Casa Maraponga",
    address: "R. Paurilo Barroso, 521 - Jardim Cearense, Fortaleza",
    mapUrl: "https://maps.app.goo.gl/kD7ehfxWtxBS9Z7dA",
    mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop",
    description: "Um lugar cercado por natureza e muita história.",
    parkingInfo: "Ao chegar, sirva-se com as comidinhas na entrada enquanto a gente chega",
  },
  contact: {
    phoneNumber: "5585988579650",
    whatsappMessage: "Oi! Vi o site do casamento e queria saber mais.",
  },
  messages: {
    thankYouTitle: "Obrigado pelo presente!",
    thankYouMessage: "Seu carinho faz parte da nossa história 💛",
    countdownFinished: "Chegou o dia! 💛",
    countdownPrefix: "Faltam",
    countdownSuffix: "dias 💛",
  },
  timeline: [
    {
      year: "2018",
      title: "Como tudo começou",
      description: "Nos conhecemos através de amigos em comum em uma festa. Uma conversa que durou horas e o primeiro beijo.",
      icon: Stars,
    },
    {
      year: "2019",
      title: "O Pedido de Namoro",
      description: "Durante uma viagem inesquecível para a praia, com direito a jantar romântico e muita emoção.",
      icon: Heart,
    },
    {
      year: "2021",
      title: "Nossa primeira viagem internacional",
      description: "Exploramos juntos novos lugares, culturas e percebemos que queríamos viajar a vida toda lado a lado.",
      icon: Plane,
    },
    {
      year: "2023",
      title: "Morando Juntos",
      description: "O grande passo de dividir o mesmo teto, construir nosso lar e adotar nosso primeiro cachorrinho.",
      icon: Home,
    },
    {
      year: "2024",
      title: "O Noivado",
      description: "O momento mais especial. Um pedido surpresa cheio de lágrimas de alegria e um 'SIM' com muita certeza.",
      icon: HeartHandshake,
    },
  ],
};
