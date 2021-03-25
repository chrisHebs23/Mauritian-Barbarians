import React from "react";
import ImageLayout from "./galleryComponents/imageLayout";
import UploadForm from "./galleryComponents/UploadForm";
import { Title } from "./gallery";

export default function Upload() {
  return (
    <div>
      <Title>Upload Images</Title>
      <UploadForm />
      <ImageLayout />
    </div>
  );
}
