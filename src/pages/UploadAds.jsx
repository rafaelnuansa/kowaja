import React, { useEffect } from "react";
import LayoutAdmin from "../layouts/AdminLayout";
import { Col, Container, Row, Image } from "react-bootstrap";
import UploadAdsComponent from "../components/UploadAdsComponent";
// import BannerImage from "../assets/images/banners/Banner.png";

function UploadAds() {
  useEffect(() => {
    // checkAuth();
  }, []);

  return (
    <React.Fragment>
      <LayoutAdmin>
        <Container fluid>
          <Row className="mt-5 d-flex justify-content-center">
            <Col className="col-12 col-lg-8 mb-4">
              <UploadAdsComponent/>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center text-center" style={{ margin:"150px" }}>
          <Col className="col-12 col-8">
              < Image src="../assets/images/banners/Banner.png" />
            </Col>
          </Row>
        </Container>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default UploadAds;
