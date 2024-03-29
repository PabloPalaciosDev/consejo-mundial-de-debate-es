import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LanguageIcon from '@mui/icons-material/Language';
import GavelIcon from '@mui/icons-material/Gavel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import logo_cmd from '../../assets/images/logo-cmd1.jpg';
import { useNavigate, Link } from 'react-router-dom'; // Importa useNavigate

function NavBar() {
    const navigate = useNavigate(); // Hook para la navegación

    // Función para manejar la navegación
    const navigateTo = (path) => {
        navigate(path);
    };

    const items = [
        {
            label: 'Inicio',
            icon: <HomeIcon style={{ color: '#016143', marginRight: '7px'}} />,
            command: () => { navigateTo('/'); }
        },
        {
            label: 'Sobre Nosotros',
            icon: <GroupsIcon style={{ color: '#016143', marginRight: '7px'}} />,
            items: [
                {
                    label: '¿Quienes Somos?',
                    icon: <QuestionMarkIcon style={{ color: '#016143', marginRight: '7px'}} />,
                    command: () => { navigateTo('/sobre-nosotros'); }
                },
                {
                    label: 'Junta Directiva',
                    icon: <GavelIcon style={{ color: '#016143', marginRight: '7px'}} />,
                    command: () => { navigateTo('/junta-directiva'); }
                }
            ]
        },
        {
            label: 'Países Miembros',
            icon: <LanguageIcon style={{ color: '#016143', marginRight: '7px'}} />,
            command: () => { navigateTo('/miembros'); }
        },
        {
            label: 'Proyectos',
            icon: <BusinessCenterIcon style={{ color: '#016143', marginRight: '7px'}} />,
            command: () => { navigateTo('/proyectos-cmd'); }
        },
        {
            label: 'Calendario de Torneos',
            icon: <CalendarMonthIcon style={{ color: '#016143', marginRight: '7px'}} />,
            command: () => { navigateTo('/calendario'); }
        }
    ];

    return (
      <div className="navbar">
        <nav className="card">
          <Link to="/">
            <Image src={logo_cmd} alt="logo-cmd" width="50%" />
          </Link>
          <Menubar model={items} className="menu-bar-container" />
        </nav>
      </div>
    );
}

export default NavBar;
