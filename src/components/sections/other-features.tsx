import Image from 'next/image';

const features = [
  {
    title: 'Hybrid Graphics',
    description: 'Set phasers to stunning performance. Toggle between battery-saving and high-powered graphics, or launch individual apps on GPU power.',
    imageSrc: '/hybrid-graphics-pop.jpg',
    imageHint: 'graphics settings menu'
  },
  {
    title: 'Gaming',
    description: 'Steam, Lutris, and GameHub create an incredible gaming experience in selection and performance. Let your game library roam free on one OS.',
    imageSrc: '/gaming-pop.jpg',
    imageHint: 'first person game'
  },
  {
    title: 'Do Not Disturb',
    description: 'Get rid of any and all notifications for however long you like. Cast out ye heathens, for there is many a work to be done!',
    imageSrc: '/dnd-pop.jpg',
    imageHint: 'do not disturb calendar'
  }
];

export function OtherFeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-body text-4xl font-normal text-foreground tracking-widest">
            OTHER FEATURES
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={600}
                height={400}
                className="shadow-xl mb-6"
                data-ai-hint={feature.imageHint}
              />
              <h3 className="text-3xl font-headline font-normal text-foreground/80 mb-2">{feature.title}</h3>
              <p className="text-base text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
