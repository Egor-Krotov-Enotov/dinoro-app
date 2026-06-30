import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** Wrap in a <Link href="/"> — default true */
  linked?: boolean;
  priority?: boolean;
}

export default function Logo({ linked = true, priority = false }: LogoProps) {
  const img = (
    <Image
      src="/logos/dinoro-logo.svg"
      alt="Dinoro.mx — Comparador de préstamos en México"
      width={138}
      height={34}
      priority={priority}
      className="h-[27px] w-auto sm:h-[34px]"
      unoptimized
    />
  );

  if (!linked) return img;

  return (
    <Link href="/" className="flex items-center" aria-label="Inicio — Dinoro.mx">
      {img}
    </Link>
  );
}
