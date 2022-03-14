import React from 'react';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { loginEmailPassword, loginGoogle, loginFacebook } from '../actions/actionLogin';
import { ContainerPrincipal, LogoContainer, Logo, ContainerForm, ContainerInputs, Labels, Inputs, BtnContinue, Pconditions, BtnOtherAcount, LogoOtherAcount, RegisterRedirect, Predirect, BtnRegister, BtnOtherAcountP } from '../styles/Login';

function Login() {

    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassword(email, password));
    }

    const handleGoogle = () => {
        dispatch(loginGoogle());
    }
    const handleFacebook = () => {
        dispatch(loginFacebook());
    }

    return (

        <ContainerPrincipal>
        <LogoContainer>
            <Logo src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646796703/sprint3/proyecto%20clon%20amazon/logo-amazon_gqntmc.png" />
        </LogoContainer>
        <ContainerForm>
            <form onSubmit={handleLogin}>
                <div>
                    <h2>Iniciar sesión</h2>
                </div>

                <ContainerInputs>
                    <Labels>
                        Dirección de correo electrónico
                    </Labels>
                    <Inputs
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </ContainerInputs>

                <ContainerInputs>
                    <Labels>
                        Contraseña
                    </Labels>
                    <Inputs
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </ContainerInputs>

                <div>
                    <BtnContinue type="submit">
                        Continuar
                    </BtnContinue>
                </div>

                <div>
                    <div>
                        <BtnOtherAcount onClick={() => handleGoogle()}>
                            <LogoOtherAcount src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1647056209/sprint3/proyecto%20clon%20amazon/imagengoogle_x3gfiy.jpg" />
                            <BtnOtherAcountP>Continuar con mi cuenta de Google</BtnOtherAcountP>
                        </BtnOtherAcount>
                    </div>

                    <div>
                    
                        <BtnOtherAcount onClick={() => handleFacebook()}>
                            <LogoOtherAcount src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1647056308/sprint3/proyecto%20clon%20amazon/imagenfb_c8hchy.png" />
                            <BtnOtherAcountP>Continuar con mi cuenta de Facebook</BtnOtherAcountP>
                        </BtnOtherAcount>
                    </div>
                </div>

                <div>
                    <Pconditions>Al continuar, aceptas las <Link to="#" className="links-three">Condiciones de uso y el Aviso de privacidad de Amazonas.</Link></Pconditions>
                </div>

            </form>
        </ContainerForm>

        <RegisterRedirect>
            <Predirect>
                ¿Eres nuevo en Amazonas?
            </Predirect>

            <Link to="/register" className="links">
                    <BtnRegister>Crea tu cuenta en Amazonas</BtnRegister>
            </Link>
        </RegisterRedirect>
    </ContainerPrincipal>

        );
    }

    export default Login;