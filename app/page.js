


import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/main';
export default function Home() {
  return (

    <>
    <Navbar />
    <div className="content flex flex-row">
    <Sidebar />
    <Main />

    </div>
    </>
  )
}
