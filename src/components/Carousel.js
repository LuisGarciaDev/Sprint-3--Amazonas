/* import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { listProductsAsync, showDetailProductAsync } from '../actions/actionProducts';
import Carousel from 'react-elastic-carousel';
import { FirstContainer, ImgCarouselTwo, BtnShowDetail } from '../styles/Carousel2';

const CarouselHome = () => {

    let history = useNavigate();

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);
    //console.log(products)

    useEffect(() => {
        dispatch(listProductsAsync());
    }, []);

    return (
        <FirstContainer>

            <h3>Nuestros productos</h3>
            <Carousel itemsToShow={5} pagination={false}>
                {
                    products.map((e, i) => (
                        <div key={i}>
                            <BtnShowDetail
                                // onClick={() => {
                                // localStorage.setItem('codeProduct', e.codeproduct)
                                // history("/details")
                                // }}

                                onClick={() => {
                                    console.log('pruebaa')
                                dispatch(showDetailProductAsync(e.codeproduct))
                                localStorage.setItem('codeProduct', e.codeproduct)
                                history("/amazona/" + e.codeproduct)
                             }}
                            >
                                <ImgCarouselTwo src={e.imagen} alt="products" />
                            </BtnShowDetail>
                        </div>
                    ))
                }
            </Carousel>
        </FirstContainer>
    )
}

export default CarouselHome
 */