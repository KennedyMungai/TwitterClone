import { ReactElement } from 'react'

type Props = {
	isOpen: boolean
	onClose: () => void
	onSubmit: () => void
	title?: string
	body?: ReactElement
	footer?: ReactElement
	actionLabel: string
	disabled?: boolean
}

const Modal = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled
}: Props) => {
	return <div>Modal</div>
}

export default Modal
