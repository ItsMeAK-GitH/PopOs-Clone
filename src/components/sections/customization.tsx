import Image from 'next/image';

export function CustomizationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/hyper-customization.webp"
              alt="Pop!_OS customization options"
              width={1200}
              height={750}
              className="rounded-lg"
              data-ai-hint="desktop settings menu"
            />
          </div>
          <div>
            <h3 className="text-4xl font-headline font-normal text-foreground/80">Customization</h3>
            <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
              Get comfy with an extensive, easy-to-find list of preferences. Set dock orientation, window tiling, Super navigation, keyboard layout and shortcuts, privacy controls, and more. Your computer, your tool, your way. YOURS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
