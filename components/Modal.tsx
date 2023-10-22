import { ReactElement, useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

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
				<div className='relative w-full my-6 mx-auto h-full lg:w-3/6 lg:max-w-3xl lg:h-auto'>
					{/* TODO: Add Content */}
					<div className='h-full border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none lg:w-auto focus:outline-none'>
						{/* TODO: Add Header */}
						<div className='flex items-center justify-between p-10 rounded-t'>
							<h3 className='uppercase text-white text-3xl text-center'>
								{title}
							</h3>
							<button>
								<AiOutlineClose size={20} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
