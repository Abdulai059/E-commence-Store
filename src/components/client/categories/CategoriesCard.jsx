function CategoriesCard({ category }) {
  const { name, image_url } = category;

  return (
    <div className="group relative w-full rounded-xl bg-white py-4 shadow-2xs transition-all duration-300 hover:shadow-2xl">
      {/* Image Wrapper */}
      <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-gray-500/10 hover:border-red-400 sm:h-28 sm:w-28 md:h-30 md:w-30">
        <img
          src={image_url}
          alt={name}
          className="h-full w-full object-cover p-3 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      {/* Title */}
      <h3 className="mt-4 text-center text-sm font-semibold sm:text-base">{name}</h3>
    </div>
  );
}

export default CategoriesCard;
