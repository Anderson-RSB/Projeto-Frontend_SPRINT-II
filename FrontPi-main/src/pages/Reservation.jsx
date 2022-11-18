import React, { useContext } from "react";
import { Context } from "../Context/Context";
import HeaderReservation from "../components/HeaderReservation";
import FormReservation from "../components/FormReservation";
import CalendarioProduto from "../components/CalendarioProduto";
import ReservationDetail from "../components/ReservationDetail";
import Politicas from "../components/Politicas";

import { Container } from "react-bootstrap";

import { useParams } from "react-router-dom";

import '../styles/Reservation.css'

function Reservation() {

    const { carsProducts, carsImage } = useContext(Context);
    const { id } = useParams();
    const selectedProduct = carsProducts?.find((product) => product?.id == id);

    const imagesProduct = carsImage?.filter((images) => {
        const name = selectedProduct?.name?.split(" ");
        return images?.title?.includes(name[0])
    })

    console.log(imagesProduct);

    return(
        <>
            <HeaderReservation products={selectedProduct} />

            <Container fluid>
                <FormReservation />
                <CalendarioProduto product={selectedProduct} />
                <ReservationDetail products={selectedProduct}/>
                <Politicas />
            </Container>
        </>
    );
};

export default Reservation;