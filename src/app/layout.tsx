import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Universeum Expedition- Travel Package Provider',
  description: 'Discover amazing travel destinations and packages',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}