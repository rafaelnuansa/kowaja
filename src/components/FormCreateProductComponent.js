import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function FormCreateProductComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [bannerImage, setBannerImage] = useState("");
  const [bannerFile, setBannerFile] = useState(null);
  const bannerRef = useRef(null);
  const imageRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile && selectedFile.type.substr(0, 5) === "image") {
      setImageFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDropBanner = (e) => {
    e.preventDefault();
    const selectedFileBanner = e.dataTransfer.files[0];

    if (selectedFileBanner && selectedFileBanner.type.substr(0, 5) === "image") {
      setBannerFile(selectedFileBanner);

      const reader = new FileReader();
      reader.onload = (event) => {
        setBannerImage(event.target.result);
      };
      reader.readAsDataURL(selectedFileBanner);
    }
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
          placeholder="Enter your product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label className="fw-400 font-1">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your product description"
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
          ref={imageRef}
          onChange={(e) => {
            setImageFile(e.target.files[0]);
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
              {imageFile ? (
                <div className="selected-file">
                  <span>{imageFile.name}</span>
                  <Button
                    variant="link"
                    onClick={() => {
                      setImageFile(null);
                      setImage("");
                    }}
                  >
                    X
                  </Button>
                </div>
              ) : (
                <Button
                  className="browse-button btn-kowaja w-100"
                  onClick={() => imageRef.current.click()}
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
          ref={bannerRef}
          onChange={(e) => {
            setBannerFile(e.target.files[0]);
            setBannerImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <div
          className="drop-area mb-5"
          onDrop={handleDropBanner}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <Row className="d-flex justify-content-center">
            <Col className="col-lg-4 mb-2">
              {bannerFile ? (
                <div className="selected-file">
                  <span>{bannerFile.name}</span>
                  <Button
                    variant="link"
                    onClick={() => {
                      setBannerFile(null);
                      setBannerImage("");
                    }}
                  >
                    X
                  </Button>
                </div>
              ) : (
                <Button
                  className="browse-button btn-kowaja w-100"
                  onClick={() => bannerRef.current.click()}
                >
                  Select file
                </Button>
              )}
              {bannerImage && (
                <img
                  className="mt-3"
                  src={bannerImage}
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
