import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './globals.css';
import Head from './head';
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
            <Head />
            {/*
                <head /> will contain the components returned by the nearest parent
                head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <body className="">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
