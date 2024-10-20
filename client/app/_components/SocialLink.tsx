import Link from 'next/link';
import type { SocialLinks } from '../_utils/types';
import Icon from './Icon';

function SocialLink({ linkTo }: { linkTo: SocialLinks }) {
  return (
    <li>
      <Link
        className="outline-round flex p-1 text-2xl font-semibold hover:text-slate-500"
        target="_blank"
        href={`https://${linkTo}.com/`}
      >
        <Icon name={linkTo} />
      </Link>
    </li>
  );
}

export default SocialLink;
