import { Container, Card } from "react-bootstrap";
import { CircleWavyCheck } from "phosphor-react";
import { Link } from "react-router-dom";

import '../styles/ReservationDone.css'

function ReservationDone() {
    return(
        <>
            <Container fluid className="reservation_container">
                <Card className="reservation_card">
                    
                    <CircleWavyCheck size={120} className="reservation_check-item"/>

                    <h1 className="reservation_title">Muito obrigado!</h1>

                    <h3 className="reservation_description">Sua reserva foi feita com sucesso</h3>

                    <Link to="/">
                        <button className="reservation_button">
                            Ok
                        </button>
                    </Link>

                </Card>
            </Container>
        </>
    );
};

export default ReservationDone;