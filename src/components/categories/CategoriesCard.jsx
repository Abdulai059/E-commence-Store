function CategoriesCard({ category }) {
  const { name, image_url } = category;
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <img
          src={image_url}
          alt={name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="mt-1 mb-3 text-lg font-medium">{name}</h3>
      </div>
    </div>
  );
}

export default CategoriesCard;
