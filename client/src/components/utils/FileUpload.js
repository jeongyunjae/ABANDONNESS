import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import Dropzone from "react-dropzone";
import { uploadImages } from "../../actions/upload_actions";

import "./FileUpload.css";

function FileUpload(props) {
  const dispatch = useDispatch();
  const [Images, setImages] = useState([]);
  const dropHandler = (files) => {
    let formData = new FormData(); //파일 전송할때 같이 전송해줘야하는것(파일정보)

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    dispatch(uploadImages(formData, config)).then((response) => {
      if (response.payload.success) {
        setImages([...Images, response.payload.filePath]);
        props.refreshFunction([...Images, response.payload.filePath]);
      } else {
        console.log(response.payload);
      }
    });
  };

  const deleteImageHandler = (image) => {
    let targetImgIndex = Images.indexOf(image);
    let deletedImg = [...Images];
    deletedImg.splice(targetImgIndex, 1);
    setImages(deletedImg);
    props.refreshFunction(deletedImg);
  };

  return (
    <div style={{ margin: "15px 0", justifyContent: "space-between" }}>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            className="uploading"
            style={{
              margin: "0 auto",
              border: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <UploadOutlined type="plus" style={{ fontSize: "1rem" }} />
            </div>
          </div>
        )}
      </Dropzone>

      <div
        style={{
          float: "left",
          margin: "25px 0px",
          height: "250px",
          overflowY: "auto",
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => deleteImageHandler()} key={index}>
            <img
              style={{ width: "100%", height: "240px" }}
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
