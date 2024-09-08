import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import ThemeProvider from '../_context/ThemeContext';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

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
        <main>
          <section className="relative px-40 pt-10 3xl:px-72">
            <ThemeProvider>
              <Navbar />
              {children}
            </ThemeProvider>
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
