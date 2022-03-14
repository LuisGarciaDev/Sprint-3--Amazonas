import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin';
import { Link } from "react-router-dom";
import SearchWords from './SearchWords'; 
import { ContainerPrincipal, LogoContainer, ImgLogo, ContainerCar, ContainerAcount, TextPequenio, TextNegrita, TextEnviar, Location, ContainerDevolucion } from '../styles/Nav';

const Nav = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    //USER
    const { name } = useSelector(state => state.login)
    //console.log(name);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    React.useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (name) => {
            if (name?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, [setIsLoggedIn]);

     
    //LOGOUT
    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    } 
    
    return (
        <ContainerPrincipal>
          
            <LogoContainer>
                <Link to="/">
                    <ImgLogo src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646796703/sprint3/proyecto%20clon%20amazon/logo-amazon_gqntmc.png" alt="logo"/>
                </Link>
            </LogoContainer>

            <ContainerDevolucion>
                    <TextEnviar>Hola</TextEnviar>

                    <Location>Elegi tu ubicación</Location>
                </ContainerDevolucion>

            <SearchWords /> 

            <Link to="/login" className="links">
                <ContainerAcount>
                    { isLoggedIn ? (
                        <div>
                            <TextPequenio>
                                Hola, {name}
                            </TextPequenio>
                          <TextNegrita onClick={() => handleLogout()}>Logout</TextNegrita>
                        </div>
                    ) : (
                           <TextPequenio>
                            Hola, Identifícate
                           </TextPequenio> 
                    )}
                </ContainerAcount>
            </Link>

                <ContainerDevolucion>
                    <TextEnviar>Devoluciones y</TextEnviar>

                    <Location>Pedidos</Location>
                </ContainerDevolucion>

                <ContainerCar src='https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646798562/sprint3/proyecto%20clon%20amazon/shopping-cart_owvyow.png' alt="cart">
                </ContainerCar>
            
        </ContainerPrincipal>
    )
}

export default Nav
