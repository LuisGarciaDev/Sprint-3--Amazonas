import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { searchProductAsync } from '../actions/actionProducts';
import { FaSearch } from "react-icons/fa";
import { ContainerBuscador, FormContainer, InputSearch, BtnSearch, SelectOption } from '../styles/Nav';

const SearchWords = () => {


    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: ({ search }) => {
            console.log(search);
            dispatch(searchProductAsync(search))
            
        }
    })



    return (
        <div>
            <ContainerBuscador>
                <FormContainer onSubmit={formik.handleSubmit}>
                  <SelectOption id="search"
                    name="search"
                    type="text"
                    aria-label="Search Products"
                    onChange={formik.handleChange}>
                       <option>Todos</option>
                       <option>tecnologia</option>
                       <option>belleza</option>
                       <option>deportes</option>
                    </SelectOption>
                <InputSearch
                    id="search"
                    name="search"
                    type="text"
                    aria-label="Search Products"
                    placeholder="Buscar producto"
                    onChange={formik.handleChange}
                />
                <BtnSearch
                    bg="warning"
                    variant="warning"
                    className="me-5"
                    type="submit"
            >
                    <FaSearch />
                </BtnSearch>
                
            </FormContainer>
            </ContainerBuscador>
        </div>
    )
}

export default SearchWords