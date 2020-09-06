import React from "react";

import { UploadOutlined } from "@ant-design/icons";
import Dropzone from "react-dropzone";
import Axios from "axios";

function FileUpload() {
  const dropHandler = (files) => {
    let formData = new FormData(); //파일 전송할때 같이 전송해줘야하는것(파일정보)

    const config = {
      header: { "content-type": "multipart/form-data" }, //컨텐츠 정보를 백엔드에 같이 보내줌
    };
    Axios.post("/api/gallary/image", formData, config).then((response) => {
      if (response.data.success) {
        alert("파일저장 성공");
      } else {
        alert("파일저장 실패");
      }
    });
  };
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
    </div>
  );
}

export default FileUpload;
