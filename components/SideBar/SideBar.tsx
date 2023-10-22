import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'

type Props = {}

const SideBar = (props: Props) => {
	const items = [
		{
			label: 'Home',
			href: '/',
			icon: <BsHouseFill />
		},
		{
			label: 'Notifications',
			href: '/notifications',
			icon: <BsBellFill />
		},
		{
			label: 'Profile',
			href: '/users/123',
			icon: <FaUser />
		}
	]

	return (
		<section className='h-full w-[25vw] border-r border-white dark:border-zinc-800'>
			SideBar
		</section>
	)
}

export default SideBar
