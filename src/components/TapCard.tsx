// Gambar kad tap. yang condong ikut tetikus (Aceternity 3D Card).
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

export default function TapCard({ alt, chip }: { alt: string; chip: string }) {
  return (
    <CardContainer containerClassName="h-full" className="w-full">
      <CardBody className="relative w-full">
        <CardItem translateZ={40} className="w-full">
          <img
            src="/media/tap-card.webp"
            alt={alt}
            width="540"
            height="900"
            loading="lazy"
            decoding="async"
            className="aspect-[3/5] w-full rounded-[var(--radius-media)] object-cover shadow-[0_30px_50px_-30px_rgb(20_32_74/0.55)]"
          />
        </CardItem>
        <CardItem
          translateZ={90}
          className="label absolute -bottom-3 -left-3 rounded-full bg-navy px-4 py-2 text-white shadow-[0_12px_24px_-12px_rgb(20_32_74/0.7)]"
        >
          {chip}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
