import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import ThemeButton from '../_components/ThemeButton';
import ThemeProvider from '../_context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | MoviesWorld',
    default: 'Welcome | MoviesWorld',
  },
  description:
    "Track shows and movies you watch. Discover what's hot. Share comments, recommendations, and ratings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-slate-950 dark:text-slate-200 text-slate-600 bg-slate-100`}
      >
        <main className="min-h-screen w-full p-4">
          <section className="flex h-pad justify-end bg-movies bg-cover bg-no-repeat">
            <div className="clipped relative flex basis-3/6 items-center justify-center bg-slate-100 py-6 pl-36 pr-6 dark:bg-slate-950">
              <ThemeProvider>
                <ThemeButton absolute />
                {children}
              </ThemeProvider>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
