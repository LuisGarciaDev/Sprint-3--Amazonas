import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { registerComentAsync, updateComentAsync, updateComentSync } from '../actions/actionComents';
import { Container,  ContainerNewOp, NewOpTitle, NewOpText } from '../styles/Opinios';
import Opinions from './Opinions';
import { Form, FloatingLabel } from 'react-bootstrap';

const NewComent = () => {

    const dispatch = useDispatch()

    const [ values, handleInputChange, reset, setValues ] = useForm({
        nameuser: '',
        emailuser: '',
        title: '',
        opinion: '',
    })

    const { nameuser, emailuser, title, opinion } = values


    const [updateForm, setUpdateForm] = useState(false)

    const handleUpdate = (coments) => {
        dispatch(updateComentSync(coments.id, coments))
        setUpdateForm(true)
        setValues({
            ...coments
        })
    }
    const handlePut = (e) => {
        e.preventDefault()
        dispatch(updateComentAsync(values))
        console.log(values)
        reset()
        setUpdateForm(false)
    }
    const handlePost = (e) => {
        e.preventDefault()
        dispatch(registerComentAsync(nameuser, emailuser, title, opinion))
        reset()
    }



    return (
        <Container>

            <ContainerNewOp>
                <NewOpTitle><strong>Escribir opinión de nuestros productos</strong></NewOpTitle>

                <NewOpText>Comparte tu opinión con otros clientes</NewOpText>
                        <Form>

                    <Form.Group>
                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="nameuser">Nombre de usuario</Form.Label>
                            <Form.Control
                                type="text"
                                name="nameuser"
                                
                                value={nameuser}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="emailuser">Correo electrónico</Form.Label>
                            <Form.Control

                                type="text"
                                name="emailuser"
                                
                                value={emailuser}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="title">Título para su opinión</Form.Label>
                            <Form.Control

                                type="text"
                                name="title"
                                
                                value={title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="opinion">¿Por qué le gustan o disgustan nuestros productos?</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="">
                                <Form.Control
                                    as="textarea"
                                    name="opinion"
                                    
                                    value={opinion}
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    onChange={handleInputChange}
                                />
                            </FloatingLabel>
                        </div>

                        <br />

                        <div>


                            <div className="d-flex gap-2 my-3">

                                {
                                    !updateForm
                                        ?
                                        <button
                                            className="btn2 btn-light"
                                            type="submit" onClick={handlePost}>Publicar opinión</button>
                                        :
                                        <button
                                            className="btn2 btn-light"
                                            type="submit" onClick={handlePut}>Editar Comentario</button>

                                }
                            </div>
                        </div>


                    </Form.Group>
                </Form>
            </ContainerNewOp>

            <div>
                <Opinions handleUpdate={handleUpdate} />
            </div>
        </Container>
    )
}

export default NewComent