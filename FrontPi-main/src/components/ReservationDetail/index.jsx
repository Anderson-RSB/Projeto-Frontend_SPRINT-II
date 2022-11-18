import { Container } from "react-bootstrap";
import { MapPin } from "phosphor-react";

function ReservationDetail({ products }) {
  return (
    <>
      <Container fluid>
        <h1>Detalhe da reserva</h1>

        <div>
          <img src="" alt="" />
        </div>

        <Container fluid>
          <div className="info_product">
            <h2 className="title_category">
              {products?.category?.qualification}
            </h2>
            <h2 className="title_car">{products?.name}</h2>
          </div>

          <div className="info_location">
            <MapPin size={30} />
            <h2 className="title_location">
              {products?.city?.name}, {products?.city?.country}
            </h2>
          </div>

          <div>
            <div>
                <h2>Check in</h2>
            </div>
            <div>
                <h2>Check out</h2>
            </div>
          </div>

          <button>Confirmar reserva</button>
        </Container>
      </Container>
    </>
  );
}

export default ReservationDetail;