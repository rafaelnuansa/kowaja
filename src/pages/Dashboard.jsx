import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import LayoutAdmin from "../layouts/AdminLayout";
import { Col, Container, Card, Row } from "react-bootstrap";
import TinyLineChartCard from "../components/TinyLineChartCard";
import TinyBarChartCard from "../components/TinyBarChartCard";
import BannerSlider from "../components/BannerSlider";
import BorrowerChartCard from "../components/BorrowerChartCard";
import LenderChartCard from "../components/LenderChartCard";
import ApproveChartCard from "../components/ApproveChartCard";

function Dashboard() {
  // const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
    };
    checkAuth();
  }, []);

  return (
    <React.Fragment>
      <LayoutAdmin>
        <Container fluid>
          
        <Row className="mt-4 mb-4">
          <Col className="col-12 col-lg-8 mb-5">
            <div className="card border-0 shadow-sm overflow-hidden bg-linear-1">
              <div className="card-body p-3 d-block d-md-flex align-items-between">
                <div className="col-12 col-md-6 p-4 text-white">
                  <h5>Welcome to your dashboard!</h5>
                  <p className="font-1 mt-4">
                    Try our new Admin Dashboard Template, build with live
                    Ant-Design components. Customize it to your needs and
                    release to production!
                  </p>
                </div>
                <div className="col-12 col-md-12">
                  <img
                    src="assets/images/rightColumnImg.png"
                    className="img-fluid"
                    alt="rightimg"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-lg-4 mb-4">
                  <TinyBarChartCard />
          </Col>
          <Col className="col-12 col-lg-4 mb-4">
            <Card className="card card-kowaja-white">
              <div className="d-flex justify-content-between">
                <Col className="mt-3">
                  <h6 className="fw-400 text-muted">Borrower</h6>
                  <h4 className="fw-bold mb-4">2,643</h4>
                  <span className="font-1">^ 1.10% Since Yesterday</span>
                </Col>
                <div className="col">
                  <BorrowerChartCard/>
                </div>
              </div>
            </Card>
          </Col>


          <Col className="col-12 col-lg-4 mb-4">
            <Card className="card-kowaja-white">
              <div className="d-flex justify-content-between">
                <Col className="mt-3">
                  <h6 className="fw-400 text-muted">Lender</h6>
                  <h4 className="fw-bold mb-4">2,643</h4>
                  <span className="font-1">^ 1.10% Since Yesterday</span>
                </Col>
                <div className="col">
                  <LenderChartCard />
                </div>
              </div>
            </Card>
          </Col>
          
          <Col className="col-12 col-lg-4 mb-4">
            <Card className="card-kowaja-white">
              <div className="d-flex justify-content-between">
                <Col className="mt-3">
                  <h6 className="fw-400 text-muted">Approved</h6>
                  <h4 className="fw-bold mb-4">2,643</h4>
                  <span className="font-1">^ 1.10% Since Yesterday</span>
                </Col>
                <Col>
                  <ApproveChartCard />
                </Col>
              </div>
            </Card>
          </Col>
          
          <Col className="col-12 col-lg-12 mb-4">
            <Card className="card-kowaja-white">
            <h5 className="fw-400">All Banner</h5>
                <BannerSlider/>
            </Card>
          </Col>

          
          <Col className="col-12 col-lg-4 mb-4">
            <Card className="card-kowaja-white">
              <div className="d-flex justify-content-between">
                <Col className="mt-3">
                  <h6 className="fw-400 text-muted">Approved</h6>
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
            <Card className="card-kowaja-white">
              <div className="d-flex justify-content-between">
                <Col className="mt-3">
                  <h6 className="fw-400 text-muted">Approved</h6>
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
            <Card className="card-kowaja-white">
              <div className="d-flex justify-content-between">
                <Col className="mt-3">
                  <h6 className="fw-400 text-muted">Approved</h6>
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
        </Container>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default Dashboard;
