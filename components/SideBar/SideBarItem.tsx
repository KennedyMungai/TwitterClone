import { IconType } from 'react-icons'

type Props = {
	href: string
	label: string
	icon: IconType
	onClick?: () => void
}

const SideBarItem = ({ href, label, icon: Icon, onClick }: Props) => {
	return (
		<div className='flex flex-row items-center'>
			<div className='relative rounded-full h-14 items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden'>
				<Icon size={28} color='white' />
			</div>
			<div className='relative rounded-full h-14 items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden'>
				<Icon size={28} color='white' />
				<p className='hidden lg:block text-white text-xl'>{label}</p>
			</div>
		</div>
	)
}

export default SideBarItem
