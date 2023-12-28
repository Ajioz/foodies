"use client";

import React, { useRef, useState } from "react";
import style from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const imageInputRef = useRef();
  const [pickImage, setPickImage] = useState();

  const handlePickClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPickImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickImage((prev) => (prev = fileReader.result));
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={style.picker}>
      <label htmlFor={label}>{label}</label>
      <div className={style.controls}>
        <div className={style.preview}>
          {!pickImage ? (
            <p>No Image Picked Yet</p>
          ) : (
            <Image src={pickImage} fill alt="Selected Image" />
          )}
        </div>
        <input
          className={style.input}
          type="file"
          id={label}
          accept="image/png, image/jpg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={style.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
