'use client'

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Destinations = () => {
  const destinations = [
    {
      name: "Darjeeling",
      description: "Tea gardens, toy trains, and Himalayan views.",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ooty",
      description: "Botanical Gardens, colonial charm, and cool weather.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Goa",
      description: "Beaches, forts, and the best of nightlife and serenity.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Manali",
      description: "Skiing, adventure, and snow-capped peaks await.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Kerala",
      description: "Backwaters, spices, and tropical paradise.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Rajasthan",
      description: "Royal palaces, desert safaris, and rich culture.",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gradient text-center mb-16 font-bold">
          Top Destinations
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {destinations.map((destination, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden shadow-lg hover:shadow-xl">
                    <div className="aspect-video relative overflow-hidden">
                      <Image 
                        src={destination.image} 
                        alt={destination.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-primary text-xl font-semibold">
                        {destination.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {destination.description}
                      </CardDescription>
                    </CardHeader>
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

export default Destinations;
