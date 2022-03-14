import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { listProductsAsync, showDetailProductAsync } from '../actions/actionProducts';
import { ContainerPrincipal, BtnShowDetail, ContainerImg, ImgProduct, ContainerSecond, TitleProduct, ContainerTres, PUno, PDos, ContainerRate } from '../styles/List';
import { FaStar } from "react-icons/fa";
import Nav from './Nav';
import Footer from './Footer';

const ListProducts = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);

    useEffect(() => {
        dispatch(listProductsAsync());
    }, []);

    return (
        <>

            <Nav />

            {
                products.map((e, i) => (
                    <ContainerPrincipal key={i}>
                        <Link to={"/amazona/" + e.codeproduct} className="links">
                            
                        <BtnShowDetail                            
                         onClick={() => {
                            dispatch(showDetailProductAsync(e.codeproduct))
                        }}
                        >

                            <ContainerImg>
                                <ImgProduct src={e.imagen} alt="producto" />
                            </ContainerImg>

                            <ContainerSecond>
                                <TitleProduct><strong>{e.nameproduct}</strong></TitleProduct>

                                <ContainerTres>
                                    <PUno>US$</PUno>
                                    <PDos><strong>{e.priceproduct}.00</strong></PDos>
                                </ContainerTres>

                                <ContainerRate>
                                    <p className={e.rate > 1 ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.rate > 2 ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.rate > 3 ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.rate > 4 ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.rate >= 5 ? 'good' : 'bad'}><FaStar /></p>
                                </ContainerRate>

                                <ContainerTres>
                                    <p>Envío gratis a</p>
                                    <PDos><strong>Colombia</strong></PDos>
                                </ContainerTres>
                            </ContainerSecond>
                        </BtnShowDetail>
                        </Link>
                    </ContainerPrincipal>
                ))
            }
            <Footer />
        </>
  )
}

export default ListProducts