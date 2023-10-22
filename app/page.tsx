import MainContent from '@/components/MainContent/MainContent'
import SideBar from '@/components/SideBar/SideBar'

export default function Home() {
	return (
		<main className='h-[90vh] w-screen'>
			<SideBar />
			<MainContent />
		</main>
	)
}
