import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
    title: "Inovação Tecnológica",
    description: "Soluções modernas para o mundo digital",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
    title: "Design Criativo",
    description: "Experiências visuais que encantam",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    title: "Desenvolvimento Ágil",
    description: "Do conceito à realidade em tempo recorde",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="carousel-container relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-2 animate-slide-up">
              {slide.title}
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/90 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm text-foreground hover:bg-card transition-colors duration-200 shadow-lg"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm text-foreground hover:bg-card transition-colors duration-200 shadow-lg"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator ${index === currentSlide ? "active" : ""}`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
