import {TbDashboard} from 'react-icons/tb';
import {MdEmail} from 'react-icons/md'
import {IoIosChatbubbles} from 'react-icons/io';
import {HiSquares2X2} from 'react-icons/hi2';
import {RiContactsBookFill, RiSettings4Fill} from 'react-icons/ri';
import {BsFillCalendarFill,BsPersonVideo3, BsShopWindow} from 'react-icons/bs';
import {FaFileInvoice} from 'react-icons/fa'


export const categories = [
    {name: 'Dashboard',icon: <TbDashboard size={22}/>},
    {name: 'Email',icon: <MdEmail size={22}/>,newicon:'1'},
    {name: 'Chat',icon: <IoIosChatbubbles size={22}/>,color:'#7879F1'},
    {name: 'Kanban',icon: <HiSquares2X2 size={22}/>,color:'#6418C3',rightcolor:'2px solid #6418C3',newicon:'1'},
    {name: 'Contact',icon: <RiContactsBookFill size={22}/>,color:'#7879F1'},
    {name: 'Calender',icon: <BsFillCalendarFill size={22} />,color:'#7879F1'},
    {name: 'Courses',icon: <BsPersonVideo3 size={22}/>,color:'#7879F1',newicon:'1'},
    {name: 'Shop',icon: <BsShopWindow size={22}/>,color:'#7879F1'},
    {name: 'Invoices',icon: <FaFileInvoice size={22}/>,color:'#7879F1',newicon:'1'},
    {name: 'Settings',icon: <RiSettings4Fill size={22}/>,color:'#7879F1'}
    
]
