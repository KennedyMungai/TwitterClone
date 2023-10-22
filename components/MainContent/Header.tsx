'use client'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

type Props = { label: string }

const Header = ({ label }: Props) => {
	const router = useRouter()

	const handleBack = useCallback(() => {
		router.back()
	}, [router])

	return <div>Header</div>
}

export default Header
