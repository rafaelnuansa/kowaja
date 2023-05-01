import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function FormCreateProductComponent() {
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
          className="fc-kowaja"
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
          className="fc-kowaja"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label className="fw-400 font-1">Select Icon</Form.Label>

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
            <Col className="col-lg-4 mb-2">
              {file ? (
                <div className="selected-file">
                  <span>{file.name}</span>
                  <Button
                    variant="link"
                    onClick={() => {
                      setFile(null);
                      setImage("");
                    }}
                  >
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
                <img
                  className="mt-3"
                  src={image}
                  alt="Selected file"
                  width="100%"
                />
              )}
            </Col>
            <div className="fw-400">Drop here</div>
          </Row>
        </div>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label className="fw-400 font-1">Select Banner</Form.Label>

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
          className="drop-area mb-5"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <Row className="d-flex justify-content-center">
            <Col className="col-lg-4 mb-2">
              {file ? (
                <div className="selected-file">
                  <span>{file.name}</span>
                  <Button
                    variant="link"
                    onClick={() => {
                      setFile(null);
                      setImage("");
                    }}
                  >
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
                <img
                  className="mt-3"
                  src={image}
                  alt="Selected file"
                  width="100%"
                />
              )}
            </Col>
            <div className="fw-400">Drop here</div>
          </Row>
        </div>
        
      </Form.Group>

      <Form.Group>

      <Row className="d-flex justify-content-center">
          <Col className="col-lg-4 ms-2 mb-4">
            <Button className="w-100" variant="kowaja" type="submit">
              Add Product
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default FormCreateProductComponent;
