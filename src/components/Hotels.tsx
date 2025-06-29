
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const Hotels = () => {
  const hotels = [
    {
      name: "The Oberoi, New Delhi",
      location: "New Delhi",
      rating: 5,
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Spa", "Pool", "Fine Dining"]
    },
    {
      name: "Taj Lake Palace",
      location: "Udaipur",
      rating: 5,
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Lake View", "Heritage", "Luxury"]
    },
    {
      name: "Wildflower Hall",
      location: "Shimla",
      rating: 5,
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Mountain View", "Spa", "Adventure"]
    },
    {
      name: "Taj Exotica Resort",
      location: "Goa",
      rating: 5,
      price: "₹20,000",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Beach Access", "Pool", "Water Sports"]
    },
    {
      name: "Kumarakom Lake Resort",
      location: "Kerala",
      rating: 4,
      price: "₹18,000",
      image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Backwaters", "Ayurveda", "Houseboat"]
    },
    {
      name: "Glenburn Tea Estate",
      location: "Darjeeling",
      rating: 4,
      price: "₹12,000",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Tea Garden", "Mountain View", "Heritage"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gradient text-center mb-16 font-bold">
          Luxury Hotels
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {hotels.map((hotel, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden h-full shadow-lg hover:shadow-xl">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-white text-sm font-medium">{hotel.rating}</span>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-primary text-lg font-semibold">
                        {hotel.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {hotel.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-2xl font-bold text-foreground">{hotel.price}</span>
                        <span className="text-muted-foreground text-sm">per night</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {hotel.amenities.map((amenity, idx) => (
                          <span 
                            key={idx}
                            className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
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

export default Hotels;
