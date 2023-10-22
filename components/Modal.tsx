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

	return (
		<>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70'>
				Modal
			</div>
		</>
	)
}

export default Modal
