'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaFeather } from 'react-icons/fa'

type Props = {}

const SideBarTweet = (props: Props) => {
	const router = useRouter()

	return (
		<div
			className='w-full flex items-center justify-center'
			onClick={() => router.push('/')}
		>
			<div className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer'>
				<FaFeather size={24} color={'white'} />
			</div>
			<div className='mt-6 hidden lg:block px-6 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition duration-300'>
				<p className='hidden lg:block text-center font-semibold text-white text-[20px]'>
					Tweet
				</p>
			</div>
		</div>
	)
}

export default SideBarTweet
