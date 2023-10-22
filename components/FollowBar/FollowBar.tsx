import React from 'react'

type Props = {}

const FollowBar = (props: Props) => {
	return (
		<section className='h-full w-[25vw] border-l border-zinc-800 p-6 hidden lg:block'>
			<div className='bg-neutral-800 rounded-xl p-4'>
				<h2 className='text-white text-xl font-semibold text-center'>
					Who To Follow
				</h2>
				<div className='flex flex-col gap-6 mt-4'>
					{/* TODO User List*/}
				</div>
			</div>
		</section>
	)
}

export default FollowBar
