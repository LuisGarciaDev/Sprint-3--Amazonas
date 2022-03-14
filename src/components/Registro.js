import { useForm } from '../hooks/useForm';
import { registroEmailPasswordNombre } from '../actions/actionRegister';
import { useDispatch } from 'react-redux'
import { ContainerPrincipal, LogoContainer, Logo, ContainerForm, ContainerInputs, Labels, Inputs, BtnContinue, Pconditions, RegisterRedirect, Predirect, PredirectLogin } from '../styles/Registro';
import { Link } from 'react-router-dom';

export const Registro = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '@gmail.com',
        pass1: '',
        pass2: ''
    });

    const { name, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        console.log(email, pass1, name)
        dispatch(registroEmailPasswordNombre(email, pass1, name))
    }

    return (

        <ContainerPrincipal>

            <LogoContainer>
                <Logo src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646796703/sprint3/proyecto%20clon%20amazon/logo-amazon_gqntmc.png" />
            </LogoContainer>

            <ContainerForm>
                <form onSubmit={handleRegistro}>

                    <div>
                        <h2>Crear cuenta</h2>
                    </div>
                    
                    <ContainerInputs>
                        <Labels>Tu nombre</Labels>
                        <Inputs
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>

                    <ContainerInputs>
                        <Labels>Correo electrónico</Labels>
                        <Inputs
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>

                    <ContainerInputs>
                        <Labels>Contraseña</Labels>
                        <Inputs
                            type="password"
                            placeholder="Como mínimo 6 caracteres"
                            name="pass1"
                            value={pass1}
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>

                    <ContainerInputs>
                        <Labels>Vuelve a escribir la contraseña</Labels>
                        <Inputs
                            type="password"
                            name="pass2"
                            value={pass2}
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>

                    <BtnContinue type="submit">
                        Crea tu cuenta de Amazonas
                    </BtnContinue>

                    <div>
                        <Pconditions>Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de Amazonas.</Pconditions>
                    </div>

                </form>

                <RegisterRedirect>
                    <Predirect>¿Ya tienes una cuenta?</Predirect>
                    <Link to="/login" className="links">
                        <PredirectLogin>Iniciar sesión</PredirectLogin>
                    </Link>
                </RegisterRedirect>
                
            </ContainerForm>
        </ContainerPrincipal>

    )
}