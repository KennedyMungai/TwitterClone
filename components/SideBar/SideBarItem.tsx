import { IconType } from 'react-icons'

type Props = {
	href: string
	label: string
	icon: IconType
	onClick?: () => void
}

const SideBarItem = ({ href, label, icon, onClick }: Props) => {
	return <div>SideBarItem</div>
}

export default SideBarItem
