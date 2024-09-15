import marvel from '../../public/marvel-logo.png';
import detective_Comics from '../../public/detective_Comics-logo.png';
import star_Wars from '../../public/star_Wars-logo.png';
import jurassic_World from '../../public/jurassic_World-logo.png';
import harry_Potter from '../../public/harry_Potter-logo.png';
import lord_Of_The_Rings from '../../public/lord_Of_The_Rings-logo.png';
import james_Bond from '../../public/james_Bond-logo.webp';

export const collectionsLogo = {
  marvel,
  detective_Comics,
  star_Wars,
  james_Bond,
  jurassic_World,
  harry_Potter,
  lord_Of_The_Rings,
};

export function getLogoSRC(key: string) {
  switch (key) {
    case 'marvel':
      return collectionsLogo.marvel;
    case 'detective_Comics':
      return collectionsLogo.detective_Comics;
    case 'star_Wars':
      return collectionsLogo.star_Wars;
    case 'jurassic_World':
      return collectionsLogo.jurassic_World;
    case 'james_Bond':
      return collectionsLogo.james_Bond;
    case 'harry_Potter':
      return collectionsLogo.harry_Potter;
    case 'lord_Of_The_Rings':
      return collectionsLogo.lord_Of_The_Rings;

    default:
      collectionsLogo.lord_Of_The_Rings;
  }
}
