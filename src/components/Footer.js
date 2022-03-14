import React from 'react';
import { Link } from "react-router-dom";
import { ContainerPrincipal, FirstContainer, Containers, Title, Items, LogoContainer, Logo, Credits, ScrollToTop, BackTopContainer, Indication } from '../styles/Footer';
import '../styles/index.css';


const Footer = () => {

    

    return (
        <ContainerPrincipal>

            <ScrollToTop>
                    <BackTopContainer>
                    <Link to="/" className="links"><Indication>Ir al inicio de página</Indication></Link>
                    </BackTopContainer>
                
            </ScrollToTop>

            <FirstContainer>
                <Containers>
                    <Link to="/" className="links"><Title>Conócenos</Title></Link>
                    <Link to="/" className="links"><Items>Trabajar en Amazonas</Items></Link>
                    <Link to="/" className="links"><Items>Información corporativa</Items></Link>
                    <Link to="/" className="links"><Items>Departamento de prensa</Items></Link>
                </Containers>

                <Containers>
                    <Link to="/" className="links"><Title>Gana dinero con nosotros</Title></Link>
                    <Link to="/" className="links"><Items>Vender en Amazonas</Items></Link>
                    <Link to="/" className="links"><Items>Vender en Amazonas Handmade</Items></Link>
                    <Link to="/" className="links"><Items>Publica tu libro en Kindle</Items></Link>
                    <Link to="/" className="links"><Items>Programa de afiliados</Items></Link>
                    <Link to="/" className="links"><Items>Anuncia tus productos</Items></Link>
                </Containers>
                    
                <Containers>
                    <Link to="/" className="links"><Title>Podemos ayudarte</Title></Link>
                    <Link to="/" className="links"><Items>Amazonas y COVID-19</Items></Link>
                    <Link to="/" className="links"><Items>Devolver o reemplazar productos</Items></Link>
                    <Link to="/" className="links"><Items>Gestionar contenido y dispositivos</Items></Link>
                    <Link to="/" className="links"><Items>Ayuda</Items></Link>
                </Containers>

                <Containers>
                    <Link to="/" className="links"><Title>Métodos de pago</Title></Link>
                    <Link to="/" className="links"><Items>Tarjetas de crédito y débito</Items></Link>
                    <Link to="/" className="links"><Items>Tarjetas de regalo</Items></Link>
                    <Link to="/" className="links"><Items>Meses sin intereses</Items></Link>
                    <Link to="/" className="links"><Items>Amazonas Cash</Items></Link>
                    <Link to="/" className="links"><Items>Amazonas Recargable</Items></Link>  
                </Containers>
            </FirstContainer>

            <LogoContainer>
                <Link to="/">
                    <Logo src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646796703/sprint3/proyecto%20clon%20amazon/logo-amazon_gqntmc.png" alt="logo" />
                </Link>
            </LogoContainer>

            <div>
                <Credits>© 2021, Amazonas By Luis Garcia</Credits>
            </div>
        </ContainerPrincipal>
    )
}

export default Footer
