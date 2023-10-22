import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import SideBarItem from './SideBarItem'
import SideBarLogo from './SideBarLogo'

type Props = {}

const SideBar = (props: Props) => {
	const items = [
		{
			label: 'Home',
			href: '/',
			icon: BsHouseFill
		},
		{
			label: 'Notifications',
			href: '/notifications',
			icon: BsBellFill
		},
		{
			label: 'Profile',
			href: '/users/123',
			icon: FaUser
		}
	]

	return (
		<section className='h-full w-[25vw] border-r border-white dark:border-zinc-800'>
			<SideBarLogo />
			{items.map(({ href, label, icon }) => {
				return (
					<SideBarItem
						key={href}
						href={href}
						label={label}
						icon={icon}
					/>
				)
			})}

			<SideBarItem
				onClick={() => {}}
				icon={BiLogOut}
				label={'Log Out'}
				href={'/'}
			/>
		</section>
	)
}

export default SideBar
