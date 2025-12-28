function CategoriesCard({ category }) {
  const { name, image_url } = category;

  return (
    <div className="group relative w-40 rounded-xl bg-white shadow-2xs transition-all duration-300 hover:shadow-2xl p-4">
      
      {/* Image Wrapper */}
      <div className="mx-auto h-30 w-30 rounded-full overflow-hidden border-2 border-transparent hover:border-red-400 flex items-center justify-center">
        <img
          src={image_url}
          alt={name}
          className="h-full w-full object-cover p-2 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-center text-base font-semibold">{name}</h3>
    </div>
  );
}

export default CategoriesCard;
