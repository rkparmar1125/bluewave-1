import Header from "@/components/Header";
import Footer from "@/components/Footer";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blue Wave',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning lang="en">
            {/*
                <head /> will contain the components returned by the nearest parent
                head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />

            <body className="">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}