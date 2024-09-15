import Image from 'next/image';
import { getLogoSRC } from '../_utils/collectionsLogo';

interface Logo {
  title: string;
  logoKey: string;
}

function CollectionLogo({ title, logoKey }: Logo) {
  const src = getLogoSRC(logoKey);

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={`${title} collection logo`}
      className="h-20 w-auto"
    />
  );
}

export default CollectionLogo;
