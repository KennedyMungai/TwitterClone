import { ReactElement, useCallback } from 'react'

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
	const handleClose = useCallback(() => {
		if (disabled) {
			return
		}

		onClose()
	}, [disabled, onClose])

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return
		}
		onSubmit()
	}, [disabled, onSubmit])

	if (!isOpen) {
		return null
	}

	return <div>Modal</div>
}

export default Modal
