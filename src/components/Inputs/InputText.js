import { Form } from "react-bootstrap";
function InputText({ titleForm, textType, onChange, value, controlId, placeholder }) {
  console.log(titleForm);
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label className="fw-400 font-1">{titleForm}</Form.Label>
      {textType ? (
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={placeholder}
          value={value}
          className="fc-kowaja"
          onChange={onChange}
        />
      ) : (
        <Form.Control
          className="fc-kowaja"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type="text"
        />
      )}
    </Form.Group>
  );
}

export default InputText;
