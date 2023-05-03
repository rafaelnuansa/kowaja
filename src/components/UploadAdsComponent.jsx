import React, { useState, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const UploadAdsComponent = () => {

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
  return (
    <Form>

      <Form.Group className="mb-3" controlId="image">

        <h2 className="text-center mb-3 fw-bold f-color-heading-ads">Upload File Here</h2>
        <h4 className="text-center mb-5 f-color-heading-ads">Upload your file to advertise now</h4>
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
          className="drop-area-ads mb-5"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <Row className="d-flex justify-content-center">
            <Col className="col-lg-4 mb-2">
              {file ? (
                <div className="selected-file">
                  {file.name.length <= 20 ? (
                    <span>{file.name}</span>
                  ) : (
                    <span>{file.name.slice(0, 20) + '...'}</span>
                  )}
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
            <div className="fw-400 text-center">or Drop file here</div>
          </Row>
        </div>

      </Form.Group>
      <Form.Group>
        <Row className="d-flex justify-content-center">
          <Col className="col-lg-4 ms-2 mb-4">
            <Button className="w-100" variant="kowaja" type="submit">
              Create News
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default UploadAdsComponent;
