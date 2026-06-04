import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="intro-photo w-full">
      <Image
        src="/photo.jpg"
        alt="Татьяна Золотарева"
        width={640}
        height={640}
        className="intro-photo__image"
        priority
        sizes="100vw"
      />
    </div>
  )
}
