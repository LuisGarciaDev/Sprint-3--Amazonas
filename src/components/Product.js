import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { RiShoppingCartLine, RiPlayFill } from "react-icons/ri";
import { ContainerPrincipal, Containers, ContainerOne, ImgsProduct, ContainerTwo, ContainerThree, DivOne, NameProduct, MarcaProduct, DivTwo, PriceInfo, PriceProduct, Price, Delivery, LinksBlue, PagoInfo, PagoCuotas, TitleCaracteristicas, Caracteristicas, ContainerFour, ImgProduct, Buttons, BtnOne, BtnTwo, ContainerIcon, Transaccion, PlusContainer, ContainerTres } from '../styles/DetailsProduct';
import { FaStar } from "react-icons/fa";
import ReactImageMagnify from 'react-image-magnify';
import { showDetailProductAsync } from '../actions/actionProducts';

export const Product = () => {


    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);
    //console.log(products);

    useEffect(() => {
        dispatch(showDetailProductAsync())
    }, []);

    //Image Exchange
    const [imagen, setImagen] = useState();
    const cambiarImagen = (element) => {
        setImagen(element)
    }



    return (
        <div className='mt-5'>
        

{
            products.map((e, i) => (
            <div key={i}>
            <ContainerPrincipal>
            <Containers>
                <ContainerOne>
                    <ImgsProduct src={e.imagen1} alt="product" onClick={()=>cambiarImagen(e.imagen1)}/>
                    <ImgsProduct src={e.imagen2} alt="product" onClick={()=>cambiarImagen(e.imagen2)}/>
                    <ImgsProduct src={e.imagen3} alt="product" onClick={()=>cambiarImagen(e.imagen3)}/>
                </ContainerOne>

                <ContainerTwo>
                    
                    <ImgProduct style={{resize: "none", height: "200px"}}>
                        {imagen!==undefined?
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'producto',
                                isFluidWidth: true,
                                src: imagen
                            },
                            largeImage: {
                                src: imagen,
                                width: 1000,
                                height: 1600
                            },
                            shouldUsePositiveSpaceLens: true
                        }} />:<ReactImageMagnify {...{
                            smallImage: {
                                alt: 'producto',
                                isFluidWidth: true,
                                src: e.imagen,
                            },
                            largeImage: {
                                src: e.imagen,
                                width: 1000,
                                height: 1600
                            },
                            shouldUsePositiveSpaceLens: true,
                            enlargedImageContainerDimensions: {
                                width: '120%',
                                height: '80%'
                            }
                        }} />}

                    </ImgProduct>
                </ContainerTwo>

                    <ContainerThree>
                        <DivOne>
                            <NameProduct><strong>{e.nameproduct}</strong></NameProduct>
                            <MarcaProduct><strong>Marca: {e.marcaproduct}</strong></MarcaProduct>
                            <ContainerTres>
                                <p className={e.rate > 1 ? 'good' : 'bad'}><FaStar /></p>
                                <p className={e.rate > 2 ? 'good' : 'bad'}><FaStar /></p>
                                <p className={e.rate > 3 ? 'good' : 'bad'}><FaStar /></p>
                                <p className={e.rate > 4 ? 'good' : 'bad'}><FaStar /></p>
                                <p className={e.rate >= 5 ? 'good' : 'bad'}><FaStar /></p>
                            </ContainerTres>
                        </DivOne>

                        <DivTwo>
                            <PriceInfo>
                                <PriceProduct>Precio:</PriceProduct>
                                <Price><strong>${e.priceproduct}</strong>.00</Price>
                                <Delivery><strong>Envío GRATIS.</strong></Delivery>
                                <LinksBlue><strong>Detalles</strong></LinksBlue>
                            </PriceInfo>

                            <PagoInfo>
                                <PagoCuotas>Hasta <strong>18 meses sin intereses</strong> de $5,592</PagoCuotas>
                                <LinksBlue><strong>Ver mensualidades</strong></LinksBlue>
                            </PagoInfo>

                            <PagoInfo>
                                <LinksBlue><strong>Solicita tu tarjeta Amazon Recargable</strong></LinksBlue>
                                <PagoCuotas>y obtén $100 de descuento en tu primera compra mayor a $500</PagoCuotas>
                            </PagoInfo>

                            <PlusContainer>
                                <PagoCuotas>Color: <strong>{e.colorproduct}</strong></PagoCuotas>
                            </PlusContainer>

                            <PlusContainer>
                                <PagoCuotas>Estilo: <strong>{e.styleproduct}</strong></PagoCuotas>
                            </PlusContainer>
                        </DivTwo>

                        <TitleCaracteristicas><strong>Acerca de este artículo</strong></TitleCaracteristicas>

                        <div>
                            <Caracteristicas>{e.descripcionproduct}</Caracteristicas>
                        </div>
                </ContainerThree>

                <ContainerFour>
                    <Price><strong>${e.priceproduct}.00</strong></Price>

                    <PriceInfo>
                        <Delivery><strong>Envío GRATIS.</strong></Delivery>
                        <LinksBlue><strong>Detalles</strong></LinksBlue>
                    </PriceInfo>

                    <Buttons>
                        <BtnOne
                           type="button"
                        >
                            <ContainerIcon>
                                <RiShoppingCartLine />
                            </ContainerIcon>
                            <strong>Agregar al Carrito</strong>
                        </BtnOne>

                        <Link to="#" className="links">
                            <BtnTwo> 
                                <ContainerIcon>
                                    <RiPlayFill />
                                </ContainerIcon>
                                <strong>Comprar ahora</strong>
                            </BtnTwo>
                        </Link>
                        
                    </Buttons>

                    <Transaccion><strong>Transacción segura</strong></Transaccion>
                </ContainerFour>
            </Containers>
            </ContainerPrincipal>
                    </div>
                ))
            }
        </div>
    )
}
