import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full h-90 relative top-0 left-0">
      <Image
        src="/vault_image.jpg"
        alt="Banner Image"
        fill
        className="object-cover opacity-30 grayscale"
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
    </div>
  );
}
