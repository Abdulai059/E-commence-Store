function ProductImageGallery({ images, thumbnail, onThumbnailChange }) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => onThumbnailChange(image)}
            className="max-w-30 cursor-pointer overflow-hidden rounded border border-gray-500/30"
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="max-w-100 overflow-hidden rounded border border-gray-500/30 md:max-w-150">
        <img
          src={thumbnail || images[0]}
          alt="Selected product"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProductImageGallery;
