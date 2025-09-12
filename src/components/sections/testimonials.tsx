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
    name: "Stuart L",
    quote:
      "My favorite thing about Pop!_OS is that it literally gets out of your way and I can get so much work done without any problems. My favorite feature has to be the docker and the sweet animations!!!",
  },
  {
    name: "Jane D",
    quote:
      "The workflow is just incredible. Auto-tiling, keyboard shortcuts, and the launcher make me so much more productive. I can't imagine going back to another OS.",
  },
  {
    name: "Alex P",
    quote:
      "As a developer, having a Linux-based OS that just works out of the box with all my tools is a dream come true. Pop!_OS is that dream.",
  },
  {
    name: "Samira K",
    quote:
      "I love how customizable everything is. I've been able to tweak the desktop to be exactly what I want. It feels truly personal.",
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-body text-4xl font-normal text-foreground tracking-widest">
            TESTIMONIALS
          </h2>
        </div>
        <div
          className="relative rounded-lg bg-cover bg-center py-24 px-4"
          style={{ backgroundImage: "url('/pop-testimonialr.jpg')" }}
        >
          <Carousel setApi={setApi} className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <div className="bg-black/20 text-white p-12 rounded-lg text-center">
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
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black border-none h-16 w-16" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black border-none h-16 w-16" />
          </Carousel>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-3 w-3 rounded-full ${
                  current === i + 1 ? "bg-white" : "bg-white/50"
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
