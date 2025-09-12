"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Robert H.",
    quote:
      "When I first got my System76 laptop I decided I'd use Pop!_OS until it annoyed me, and would then switch to my distro-of-choice. Two years later not only am I still using it, it's become my distro-of-choice. It's radically cut how much time I spend hand-hacking configuration files, which gives me more time to spend on my projects.",
  },
  {
    name: "Robert H.",
    quote:
      "When I first got my System76 laptop I decided I'd use Pop!_OS until it annoyed me, and would then switch to my distro-of-choice. Two years later not only am I still using it, it's become my distro-of-choice. It's radically cut how much time I spend hand-hacking configuration files, which gives me more time to spend on my projects.",
  },
  {
    name: "Robert H.",
    quote:
      "When I first got my System76 laptop I decided I'd use Pop!_OS until it annoyed me, and would then switch to my distro-of-choice. Two years later not only am I still using it, it's become my distro-of-choice. It's radically cut how much time I spend hand-hacking configuration files, which gives me more time to spend on my projects.",
  },
  {
    name: "Robert H.",
    quote:
      "When I first got my System76 laptop I decided I'd use Pop!_OS until it annoyed me, and would then switch to my distro-of-choice. Two years later not only am I still using it, it's become my distro-of-choice. It's radically cut how much time I spend hand-hacking configuration files, which gives me more time to spend on my projects.",
  },
];

export function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-body text-4xl font-normal text-foreground tracking-widest">
            TESTIMONIALS
          </h2>
        </div>
        <div className="relative">
          <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div
                    className="relative bg-cover bg-center py-24"
                    style={{ backgroundImage: "url('/pop-testimonialr.jpg')" }}
                  >
                    <div className="bg-[#0f2d4e]/80 text-white p-12 text-center max-w-2xl mx-auto">
                      <h3 className="text-3xl font-headline mb-4">
                        {testimonial.name}
                      </h3>
                      <p className="text-lg font-body font-light leading-relaxed">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black border-none h-16 w-16" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black border-none h-16 w-16" />
          </Carousel>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-3 w-3 rounded-full ${
                  current === i + 1 ? "bg-primary" : "bg-primary/50"
                } transition-colors`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
