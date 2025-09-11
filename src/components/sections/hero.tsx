import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative w-full">
      <Image
        src="/pop-hero-xl-night.jpg"
        alt="Pop!_OS background"
        width={8000}
        height={1440}
        className="w-full h-auto object-cover"
        data-ai-hint="space stars"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </section>
  );
}
