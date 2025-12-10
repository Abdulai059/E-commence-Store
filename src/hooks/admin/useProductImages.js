import { useState } from "react";

export function useProductImages(initialCount = 4) {
  const [imagePreviews, setImagePreviews] = useState(Array(initialCount).fill(null));

  const handleFileChange = (index, file, setValue) => {
    if (!file) return;

    // Update React Hook Form value
    setValue(`images.${index}`, file);

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPreviews = [...imagePreviews];
      newPreviews[index] = reader.result;
      setImagePreviews(newPreviews);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (index, setValue) => {
    setValue(`images.${index}`, null);

    const newPreviews = [...imagePreviews];
    newPreviews[index] = null;
    setImagePreviews(newPreviews);
  };

  const handleClearAll = (reset) => {
    reset({
      images: Array(initialCount).fill(null),
      productId: "",
      productName: "",
    });
    setImagePreviews(Array(initialCount).fill(null));
  };

  return {
    imagePreviews,
    handleFileChange,
    handleRemoveImage,
    handleClearAll,
  };
}
