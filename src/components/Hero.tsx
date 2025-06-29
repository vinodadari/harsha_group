
const Hero = () => {
  return (
    <header className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat mt-16" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/40"></div>
      <div className="relative z-10 text-center px-6 py-20 max-w-6xl">
        <h1 className="text-gradient mb-8 animate-fade-in leading-tight font-bold">
          Travel Well, Stay Better
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed mb-8 animate-fade-in font-medium">
          You don`&apos;`t have to be rich to travel well.
        </p>
        <div className="animate-fade-in opacity-90">
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover India's most enchanting destinations with our curated collection of luxury hotels and resorts
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
