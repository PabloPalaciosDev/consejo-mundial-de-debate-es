import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StorageIcon from '@mui/icons-material/Storage';
import logo_cmd from '../../assets/images/logo-cmd1.jpg'



function NavBar() {

    const items = [
        {
            label: 'Inicio',
            icon: <HomeIcon style={{ color: '#074DA3', marginRight: '7px'}} />,
            url: '/'
        },
        {
            label: 'Sobre Nosotros',
            icon: <GroupsIcon style={{ color: '#074DA3', marginRight: '7px'}} />,
            url: 'sobre-nosotros',
            items: [
                {
                    label: '¿Quienes Somos?',
                    icon: <QuestionMarkIcon style={{ color: '#074DA3', marginRight: '7px'}} />,
                    url: 'sobre-nosotros'
                },
                {
                    label: 'Junta Directiva',
                    icon: <GroupIcon style={{ color: '#074DA3', marginRight: '7px'}} />,
                    url: 'junta-directiva'
                }
            ]
        },
        {
            label: 'Proyectos',
            icon: <BusinessCenterIcon style={{ color: '#074DA3', marginRight: '7px'}} />,
            url: 'proyectos-cmd',
        },
        {
            label: 'Base de Datos',
            icon: <StorageIcon style={{ color: '#074DA3', marginRight: '7px'}} />,
            url: 'base-de-datos',
        },
        /*
        {
            label: 'Calendario de Eventos',
            icon: 'pi pi-calendar',
            url: '/calendario-eventos'
        }
        */
    ];

    return (
        <div className='navbar'>
            <Image src={logo_cmd} alt="logo-cmd" width="250" />
            <nav className="card">
                <Menubar model={items} className='menu-bar-container' />
            </nav>
        </div>
    )
}


export default NavBar;