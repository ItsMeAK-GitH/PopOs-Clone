import Image from 'next/image';
import { Button } from '@/components/ui/button';

const hardwareItems = [
  {
    title: 'Laptops',
    description: 'High-performance laptops designed to harmonize with their software while tightening security.',
    imageSrc: '/detail-laptop.jpg',
    imageHint: 'laptop computer',
    link: '#',
  },
  {
    title: 'Desktops',
    description: 'Powerful, quiet handcrafted desktops designed for tinkering and engineered for max performance.',
    imageSrc: '/detail-desktop.jpg',
    imageHint: 'desktop computer',
    link: '#',
  },
  {
    title: 'Workstations',
    description: 'Computers designed for intense tasks, offering robust performance and open-source adaptability.',
    imageSrc: '/detail-workstation.jpg',
    imageHint: 'workstation computer',
    link: '#',
  },
  {
    title: 'Keyboards',
    description: 'Handcrafted mechanical keyboards designed by keyboard enthusiasts for typing at warp speed.',
    imageSrc: '/detail-keyboard.jpg',
    imageHint: 'mechanical keyboard',
    link: '#',
  },
];

export function HardwareSection() {
  return (
    <section className="py-20 bg-[#eaf3f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-foreground/60">THE COMPLETE EXPERIENCE</p>
          <h2 className="font-body text-4xl font-normal text-foreground tracking-widest mt-2">
            HARDWARE MADE FOR POP!_OS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardwareItems.map((item) => (
            <div key={item.title} className="bg-white/60 p-8 rounded-lg text-center flex flex-col items-center">
              <div className="mb-6">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={250}
                  height={250}
                  className="rounded-full"
                  data-ai-hint={item.imageHint}
                />
              </div>
              <h3 className="text-2xl font-headline font-normal text-foreground/80 mb-2">{item.title}</h3>
              <p className="text-base text-foreground/70 leading-relaxed mb-6 flex-grow">{item.description}</p>
              <Button size="lg" className="bg-[#f3a41a] hover:bg-[#f3a41a]/90 text-black font-normal text-sm px-8 py-5 mt-auto font-headline">
                SHOP NOW
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
