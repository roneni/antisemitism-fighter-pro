export const metadata = {
  title: 'Fight Antisemitism',
  description: 'Instantly refute antisemitic claims with facts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
