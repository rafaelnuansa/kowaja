

import { Form } from "react-bootstrap";
function InputText(
    value, onChange, title
) {
  return (
      <Form.Group className="mb-3" controlId="title">
        <Form.Label className="fw-400 font-1">Title</Form.Label>
        <Form.Control
          className="fc-kowaja"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
  );
}

export default InputText;
