import FollowBar from '@/components/FollowBar/FollowBar'
import MainContent from '@/components/MainContent/MainContent'
import Modal from '@/components/Modal'
import SideBar from '@/components/SideBar/SideBar'

export default function Home() {
	return (
		<main className='h-[100vh] w-screen flex flex-row'>
			<Modal
				isOpen
				title={'Test'}
				onClose={() => {}}
				onSubmit={() => {}}
				actionLabel={''}
			/>
			<SideBar />
			<MainContent />
			<FollowBar />
		</main>
	)
}
