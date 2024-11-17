export const metadata = {
  title: "Docs!!",
  description: "Coming Soon!",
  keywords: "Hello Word",
  openGraph: {
    title: "balxzzy - REST API Documentation",
    description:
      "balxzzy is a free, simple REST API created by balxzzy for the common good. Feel free to use it, but please avoid DDoS attacks.",
    url: "https://api.balxzzy.xyz",
    type: "website",
    images: [
      {
        url: "https://nyimpen.vercel.app/component/logoku.png",
        width: 800,
        height: 600,
        alt: "balxzzy Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}