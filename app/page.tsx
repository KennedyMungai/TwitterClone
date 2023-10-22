import FollowBar from '@/components/FollowBar/FollowBar'
import MainContent from '@/components/MainContent/MainContent'
import SideBar from '@/components/SideBar/SideBar'

export default function Home() {
	return (
		<main className='h-[90vh] w-screen flex flex-row'>
			<SideBar />
			<MainContent />
			<FollowBar />
		</main>
	)
}
