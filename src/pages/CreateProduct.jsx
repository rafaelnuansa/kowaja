import React, { useEffect } from "react";
import LayoutAdmin from "../layouts/AdminLayout";
import { Col, Container, Row } from "react-bootstrap";
import FormCreateProductComponent from "../components/FormCreateProductComponent";
// import LoanTable from "../components/LoanTable";
// import TinyBarChartCard from "../components/TinyBarChartCard";
// import BorrowerChartCard from "../components/BorrowerChartCard";

function CreateProduct() {
  useEffect(() => {
    // checkAuth();
  }, []);

  return ( 
    <React.Fragment>
      <LayoutAdmin>
        <Container>
          <Row className="mt-5">
            <Col className="col-12 col-lg-8 justify-content-center">
              <FormCreateProductComponent/>
            </Col>
          </Row>
        </Container>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default CreateProduct;
