import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContainerPrincipal, ContainerTitle, Title, ContainerUser, ImgUser, NameUser, ContainerComent, TitleComent, Coment, Options, ContainerComentario, BtnBorrar, BtnEdit } from '../styles/Opinios';
import { listComentAsync, deleteAsync } from '../actions/actionComents';

const Opinions = ({ handleUpdate }) => {

    const { coments } = useSelector((store) => store.coments)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listComentAsync())
    }, [])

    return (
        <ContainerPrincipal>

            <div>
            <ContainerTitle>
                <Title>Opiniones de clientes</Title>
            </ContainerTitle>
            
            {

                (coments) ?
                
                    (
                        
                        coments.map((e, i) => (
                    <ContainerComentario key={i}>
                <ContainerUser>
                    <ImgUser src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189827/sprint3/profile-2_ywaxlb.jpg" alt="user" />
                    <NameUser>{e.nameuser}</NameUser>
                </ContainerUser>

                <ContainerComent>
                    <TitleComent><strong>{e.title}</strong></TitleComent>
                    <Coment>{e.opinion}</Coment>
                </ContainerComent>

                <div>
                    <Options>A 45 personas les resultó útil</Options>
                    <Options>Informar de un abuso</Options>
                    
                    <div>
                        <BtnEdit type="button"
                                 value="update"
                                 onClick={() => handleUpdate(e)}
                        >
                            Editar comentario
                        </BtnEdit>
                        
                        <BtnBorrar type="button"
                                   value="delete"
                                   onClick={() => dispatch(deleteAsync(e.emailuser))}
                        >
                            Borrar comentario
                        </BtnBorrar>
                    </div>
                    
                </div>
                    </ContainerComentario>
                        ))
                            
                    ) :
                    <p>Unavailable data</p>
            }
            </div>
        </ContainerPrincipal>
    )
}

export default Opinions
