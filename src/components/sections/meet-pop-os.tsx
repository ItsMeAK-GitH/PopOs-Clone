export function MeetPopOsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold text-foreground tracking-widest">
          MEET POP!_OS
        </h2>
        <div className="mt-8 aspect-video max-w-4xl mx-auto">
          <iframe
            className="w-full h-full rounded-lg shadow-xl"
            src="https://www.youtube.com/embed/SrWw2LeZ21U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
