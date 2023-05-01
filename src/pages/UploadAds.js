import React, { useEffect } from "react";
import LayoutAdmin from "../layouts/AdminLayout";
import { Col, Container, Row } from "react-bootstrap";
import UploadAdsComponent from "../components/UploadAdsComponent";
// import LoanTable from "../components/LoanTable";
// import TinyBarChartCard from "../components/TinyBarChartCard";
// import BorrowerChartCard from "../components/BorrowerChartCard";

function UploadAds() {
  useEffect(() => {
    // checkAuth();
  }, []);

  return (
    <React.Fragment>
      <LayoutAdmin>
        <Container>
          <Row className="mt-5 d-flex justify-content-center">
            <Col className="col-12 col-lg-8 mb-4">
              <UploadAdsComponent/>
            </Col>
          </Row>
        </Container>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default UploadAds;
