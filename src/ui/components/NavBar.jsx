import React,{useContext} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {


    const {user, logout} = useContext(AuthContext);

    // Navegar
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login',{replace:true}); // replace: evita que el usuario pueda regresar a la interfaz anterior
    }


    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':'' }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':'' }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':'' }` }
                        to={"/search"}
                    >                        
                        Search
                    </NavLink>
                    
                </div>
            </div>

            {/* Clase para colocar las opciones al final */}
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end"> 
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {/* signo de interrogacion indica que si es nulo no continue, caso contrario si */}
                        {user?.name} 
                    </span>
                    <button onClick={onLogout}
                        className='nav-item nav-link btn'
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
        </>
    )
}