import React, { ReactNode } from 'react'

type Props = {
	href: string
	label: string
	icon: ReactNode
}

const SideBarItem = ({ href, label, icon }: Props) => {
	return <div>SideBarItem</div>
}

export default SideBarItem
