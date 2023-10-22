'use client'
import { useRouter } from 'next/navigation'
import { BsTwitter } from 'react-icons/bs'

type Props = {}

const SideBarLogo = (props: Props) => {
	const router = useRouter()

	return (
		<div className='rounded-full w-20 h-20 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition' onClick={() => router.push('/')}>
			<BsTwitter className='text-blue-500 text-5xl' />
		</div>
	)
}

export default SideBarLogo
