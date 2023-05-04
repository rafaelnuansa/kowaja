import React, { useEffect } from "react";
import LayoutAdmin from "../layouts/AdminLayout";
import { Col, Container, Card, Row } from "react-bootstrap";
import TinyLineChartCard from "../components/TinyLineChartCard";
import LoanTable from "../components/LoanTable";
// import TinyBarChartCard from "../components/TinyBarChartCard";
// import BorrowerChartCard from "../components/BorrowerChartCard";

function LoanApp() {
  useEffect(() => {
    // checkAuth();
  }, []);

  return (
    <React.Fragment>
      <LayoutAdmin>
        <Container fluid>

          <Row className="mt-4 mb-4">
            <Col className="col-12 col-lg-4 mb-4">
              <Card className="card-kowaja-linear">
                <div className="d-flex justify-content-between">
                  <Col className="mt-3">
                    <h6 className="fw-400">Approved</h6>
                    <h4 className="fw-bold mb-4">2,643</h4>
                    <span className="font-1">^ 1.10% Since Yesterday</span>
                  </Col>
                  <Col>
                    <TinyLineChartCard />
                  </Col>
                </div>
              </Card>
            </Col>

            <Col className="col-12 col-lg-4 mb-4">
              <Card className="card-kowaja-linear">
                <div className="d-flex justify-content-between">
                  <Col className="mt-3">
                    <h6 className="fw-400">Rejected</h6>
                    <h4 className="fw-bold mb-4">2,643</h4>
                    <span className="font-1">^ 1.10% Since Yesterday</span>
                  </Col>
                  <Col>
                    <TinyLineChartCard />
                  </Col>
                </div>
              </Card>
            </Col>

            <Col className="col-12 col-lg-4 mb-4">
              <Card className="card-kowaja-linear">
                <div className="d-flex justify-content-between">
                  <Col className="mt-3">
                    <h6 className="fw-400">Pending</h6>
                    <h4 className="fw-bold mb-4">2,643</h4>
                    <span className="font-1">^ 1.10% Since Yesterday</span>
                  </Col>
                  <Col>
                    <TinyLineChartCard />
                  </Col>
                </div>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col className="col-12 col-lg-12 mb-4">
              <LoanTable/>
            </Col>
          </Row>
        </Container>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default LoanApp;
