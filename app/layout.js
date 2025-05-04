import './globals.css';

export const metadata = {
  title: 'Fight Antisemitism',
  description: 'Instantly refute antisemitic claims with facts and dignity.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
