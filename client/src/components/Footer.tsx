import SocialLink from './SocialLink';

function Footer() {
  const internalLinks: ('facebook' | 'instagram' | 'youtube' | 'twitter')[] = [
    'facebook',
    'instagram',
    'youtube',
    'twitter',
  ];

  return (
    <footer className="flex flex-col items-center justify-center gap-6 border-t-2 border-slate-300 py-10 dark:border-slate-500">
      <ul className="flex gap-4">
        {internalLinks.map((link) => (
          <SocialLink key={link} linkTo={link} />
        ))}
      </ul>
      <p className="font-lights text-xs">
        &copy; MoviesWorld {new Date().getFullYear()}. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
