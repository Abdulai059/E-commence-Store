import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateProductImages } from "../api/products/useCreateProductImages";
import toast from "react-hot-toast";

export function useProductImage() {
  const { createImages, isCreating } = useCreateProductImages();

  const {
    register,
    handleSubmit: rhfHandleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productId: "",
      productName: "",
    },
  });

  const [imageFiles, setImageFiles] = useState([null, null, null, null]);
  const [imagePreviews, setImagePreviews] = useState([null, null, null, null]);

  const handleFileChange = (index, file) => {
    if (!file) return;

    const newFiles = [...imageFiles];
    newFiles[index] = file;
    setImageFiles(newFiles);

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPreviews = [...imagePreviews];
      newPreviews[index] = reader.result;
      setImagePreviews(newPreviews);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (index) => {
    const newFiles = [...imageFiles];
    newFiles[index] = null;
    setImageFiles(newFiles);

    const newPreviews = [...imagePreviews];
    newPreviews[index] = null;
    setImagePreviews(newPreviews);
  };

  const handleClearAll = () => {
    reset();
    setImageFiles([null, null, null, null]);
    setImagePreviews([null, null, null, null]);
  };

  const onSubmit = (data) => {
    const filesToUpload = imageFiles.filter((file) => file !== null);

    if (filesToUpload.length === 0) {
      toast.error("Please select at least one image");
      return;
    }

    const images = imageFiles
      .map((file, index) => {
        if (!file) return null;
        return {
          product_id: data.productId,
          image_url: file,
          position: index,
          product_name: data.productName || null,
        };
      })
      .filter(Boolean);

    createImages(images, {
      onSuccess: () => {
        handleClearAll();
      },
    });
  };

  const handleSubmit = rhfHandleSubmit(onSubmit);

  return {
    register,
    handleSubmit,
    errors,
    imageFiles,
    imagePreviews,
    isCreating,
    handleFileChange,
    handleRemoveImage,
    handleClearAll,
    watch,
    setValue,
  };
}
