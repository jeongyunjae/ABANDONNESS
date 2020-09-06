import React, { useState } from "react";

import { UploadOutlined } from "@ant-design/icons";
import Dropzone from "react-dropzone";
import Axios from "axios";

function FileUpload() {
  const [Images, setImages] = useState([]);
  const dropHandler = (files) => {
    let formData = new FormData(); //파일 전송할때 같이 전송해줘야하는것(파일정보)

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    Axios.post("/api/gallary/image", formData, config).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setImages([...Images, response.data.filePath]);
      } else {
        console.log(response.data);
      }
    });
  };
  console.log(process.env.NODE_ENV);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: 300,
              height: 240,
              margin: "0 auto",
              border: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <UploadOutlined type="plus" style={{ fontSize: "3rem" }} />
            </div>
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "auto",
        }}
      >
        {Images.map((image, index) => (
          <div key={index}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={
                process.env.NODE_ENV === "development"
                  ? `http://localhost:5000/${image}`
                  : `https://abandonness.herokuapp.com/${image}`
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
