import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/photo.jpg"
        alt="Татьяна Золотарева"
        fill
        className="object-cover object-top"
        priority
        sizes="100vw"
      />
      {/* Gradient at the bottom — smooth transition into the glass about section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
    </section>
  )
}
