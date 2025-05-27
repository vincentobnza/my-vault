import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full h-90 relative top-0 left-0">
      <Image
        src="/banner_image.jpg"
        alt="Banner Image"
        fill
        className="object-cover object-center opacity-20"
      />
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent grid place-items-center">
        <div className="w-full max-w-screen-sm mx-auto space-y-6 text-center text-zinc-200">
          <h1 className="bg-gradient-to-t from-amber-800 to-amber-100 bg-clip-text text-transparent text-3xl md:text-6xl font-semibold">
            Vincent&apos;s Vault
          </h1>
          <p className="w-3/4 mx-auto text-sm md:text-[15px] opacity-80">
            A collection of my tools and resources for developers, designers,
            and anyone who loves to create. Explore, learn, and build with the
            best tools available.
          </p>
        </div>
      </div>
    </div>
  );
}
