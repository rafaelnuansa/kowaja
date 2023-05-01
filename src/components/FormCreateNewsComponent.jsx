import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function FormCreateNewsComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    setFile(selectedFile);
  
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };
  

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("dragging");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragging");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan data yang di-submit (misalnya, kirim ke server)
    console.log({ title, description, image });
    // Reset form
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label className="fw-400 font-1">Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label className="fw-400 font-1">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

   
      <Form.Group className="mb-3" controlId="image">
  <Form.Label className="fw-400 font-1">Gambar</Form.Label>

  <input
    className="upload-file-kowaja d-none"
    type="file"
    ref={inputRef}
    onChange={(e) => {
      setFile(e.target.files[0]);
      setImage(URL.createObjectURL(e.target.files[0]));
    }}
  />
  <div
    className="drop-area"
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
  >
    <Row className="d-flex justify-content-center">
      <Col className="col-lg-4 mb-4">
        {file ? (
          <div className="selected-file">
            <span>{file.name}</span>
            <Button variant="link" onClick={() => {
              setFile(null);
              setImage("");
            }}>
              X
            </Button>
          </div>
        ) : (
          <Button
            className="browse-button btn-kowaja w-100"
            onClick={() => inputRef.current.click()}
          >
            Select file
          </Button>
        )}
        {image && (
          <img className="mt-3" src={image} alt="Selected file" width="100%" />
        )}
      </Col>
    <div className="fw-400">
      Drop here
    </div>
    </Row>
  </div>
</Form.Group>


      <Button variant="kowaja" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormCreateNewsComponent;
