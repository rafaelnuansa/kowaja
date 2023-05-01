import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const UploadAdsComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Select a file</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>

      <div
        className="drop-area"
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop a file here, or click to select a file</p>
      </div>

      {selectedFile && (
        <p>Selected file: {selectedFile.name}</p>
      )}
    </Form>
  );
};

export default UploadAdsComponent;
