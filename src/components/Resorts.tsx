
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resorts = () => {
  const resorts = [
    { 
      location: "Darjeeling", 
      name: "Summit Grace Hotel & Spa",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury mountain retreat with panoramic Himalayan views"
    },
    { 
      location: "Goa", 
      name: "Kyriad Hotel Candolim",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Beachfront paradise with modern amenities"
    },
    { 
      location: "Shimla", 
      name: "Sukhsagar Regency",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Colonial charm in the heart of the hills"
    },
    { 
      location: "Coorg", 
      name: "Serene Woods",
      image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Coffee plantation resort amidst lush greenery"
    },
    { 
      location: "Alleppey", 
      name: "Warmth Lake Heaven",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Backwater bliss with traditional Kerala hospitality"
    }
  ];

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gradient text-center mb-16 font-bold">
          Featured Resorts
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {resorts.map((resort, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden h-full shadow-lg hover:shadow-xl">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={resort.image} 
                        alt={resort.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {resort.location}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-primary text-lg font-semibold">
                        {resort.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {resort.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary" />
          <CarouselNext className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary" />
        </Carousel>
      </div>
    </section>
  );
};

export default Resorts;
