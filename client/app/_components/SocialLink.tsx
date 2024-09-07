import Link from 'next/link';
import type { SocialLinks } from '../_utils/types';
import Icon from './Icon';

interface SocialLinkProps {
  linkTo: SocialLinks;
}

function SocialLink({ linkTo }: SocialLinkProps) {
  return (
    <li>
      <Link
        className="flex rounded-lg p-1 text-2xl font-semibold outline-0 ring-blue-500 transition-all duration-500 hover:text-slate-500 focus-visible:ring-4"
        target="_blank"
        href={`https://${linkTo}.com/`}
      >
        <Icon name={linkTo} />
      </Link>
    </li>
  );
}

export default SocialLink;

