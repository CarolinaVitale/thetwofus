import Icon from './Icon';
import { useEffect, useRef } from 'react';

export default function ProductDialog({ product, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (product && !dialog.open) dialog.showModal();
    if (!product && dialog.open) dialog.close();
  }, [product]);

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
  }

  return (
    <dialog ref={dialogRef} onClose={onClose} onClick={closeOnBackdrop} aria-labelledby="product-title">
      {product && <>
        <button className="close" aria-label="Close product details" onClick={() => dialogRef.current.close()}>×</button>
        <img src={'/assets/' + product.id + '.png'} alt={product.name + ' cream sweatshirt'} />
        <div className="detail-copy">
          <p className="eyebrow">THE THANKSGIVING EDIT</p>
          <h2 id="product-title">{product.name}</h2><p>{product.description}</p>
          <p>Cream crewneck sweatshirt · Design preview</p>
          <p className="detail-note">Our first collection is taking shape. Prices, sizing, and availability are coming soon.</p>
          <button className="button dark" onClick={() => dialogRef.current.close()}>Keep exploring <Icon /></button>
        </div>
      </>}
    </dialog>
  );
}
