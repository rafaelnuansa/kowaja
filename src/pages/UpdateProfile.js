import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Alert, Container, Col, Row } from "react-bootstrap";
import LayoutAdmin from "../layouts/AdminLayout";

export default function UpdateProfile() {
  const { currentUser, updateDisplayName } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await updateDisplayName(displayName);
      navigate("/dashboard");
    } catch {
      setError("Failed to update profile");
    }

    setLoading(false);
  }

  return (
    <LayoutAdmin>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Update Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="displayName">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button
                    disabled={loading}
                    className="w-100 mt-4"
                    type="submit"
                  >
                    Update
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </LayoutAdmin>
  );
}
