import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Twitter Clone',
	description: 'The clone to a simplistic twitter frontend'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={open_sans.className}>{children}</body>
		</html>
	)
}
