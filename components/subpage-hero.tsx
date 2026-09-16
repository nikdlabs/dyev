import Image from "next/image";
import type { ReactNode } from "react";

type SubpageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
};

export function SubpageHero({ eyebrow, title, copy, image, imageAlt, children }: SubpageHeroProps) {
  return <section className="subpage-hero"><div className="shell"><div className="subpage-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{copy}</p>{children}</div><div className="subpage-hero-image"><Image src={image} alt={imageAlt} fill priority sizes="(max-width: 900px) 100vw, 42vw" /></div></div></section>;
}
