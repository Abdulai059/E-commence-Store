export function ProductCard({ image, title, badge, description, actions }) {
  return (
    <div className="card bg-card-foreground shadow-sm">
      <figure>
        <img src={image.src} alt={image.alt || title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">
          {title}
          {badge && <div className="badge badge-secondary">{badge}</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {actions.map((action, index) => (
            <div key={index} className="badge badge-outline">
              {action}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}