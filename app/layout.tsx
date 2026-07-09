export const metadata = {

  title: "CineVerse AI",

  description: "AI Movie & Web Series Assistant",

};

export default function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {

  return (

    <html lang="en">

      <body style={{ margin: 0 }}>{children}</body>

    </html>

  );

}
