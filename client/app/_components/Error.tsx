import Image from 'next/image';

interface ErrorProps {
  code: number;
  message: string;
  pageType: 'inner' | 'outer';
  children?: React.ReactNode;
}

function Error({ code, message, pageType, children }: ErrorProps) {
  let imgCode = 404;

  if (code >= 500) imgCode = 500;
  if (code >= 401 && code < 404) imgCode = 401;

  const size = pageType === 'outer' ? 208 : 320;

  return (
    <section
      className={`flex flex-col items-center justify-center gap-12 ${
        pageType === 'inner' ? 'h-hero' : ''
      }`}
    >
      <Image
        width={size}
        height={size}
        priority
        src={`/error-${imgCode}.png`}
        alt={`${code} Error`}
      />
      <div className="flex items-center gap-4 text-slate-950 dark:text-slate-300">
        <span className="text-4xl font-semibold">{code}</span>
        <span className="text-5xl">|</span>
        <p className="text-xl">{message}</p>
      </div>
      {children}
    </section>
  );
}

export default Error;

