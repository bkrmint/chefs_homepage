import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'RMINT Chef Home Page',
  description: 'Create Your Tastiest NFTs',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:site": "@RMINT_Official",
    "twitter:image" : "https://ucarecdn.com/55527cd8-0b71-42ef-abc3-90d6955546ac/Screenshot20230911211025.png",
    "og:url" : "rmint.co",
    "og:image" : "https://ucarecdn.com/55527cd8-0b71-42ef-abc3-90d6955546ac/Screenshot20230911211025.png",
    "og:type" : "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  )
}
