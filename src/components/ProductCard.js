export default function ProductCard({ product, index, onSelect }) {
  return (
    <button className="product" onClick={() => onSelect(product)}>
      <div className="product-photo">
        <img src={'/assets/' + product.id + '.png'} alt={product.name + ' cream sweatshirt'} loading="lazy" />
        {product.badge && <span className={'tag ' + (product.badgeColor || '')}>{product.badge}</span>}
        <span className="view">Explore ↗</span>
      </div>
      <div className="product-info"><h3>{product.name}</h3><span>{String(index + 1).padStart(2, '0')}</span></div>
      <p>{product.tagline}</p>
    </button>
  );
}
