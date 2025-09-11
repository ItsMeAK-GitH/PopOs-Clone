import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/pop-hero-xl-night.jpg"
        alt="Pop!_OS background"
        fill
        className="object-cover"
        data-ai-hint="space stars"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </section>
  );
}
