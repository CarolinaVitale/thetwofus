import Icon from './Icon';
import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import ProductDialog from './ProductDialog';

export default function ProductCollection() {
  const [selected, setSelected] = useState(null);
  return <>
<section id="collection" className="collection">
      <div className="section-top">
      <div>
      <p className="eyebrow">FIND YOUR LITTLE THING</p>
      <h2>Small things.<br />Very good energy.</h2>
      </div>
      <p>Meet our Thanksgiving edit.<br />Four designs for gathering, giving thanks,<br />and making yourself right at home.</p>
      </div>
      <div className="collection-bar">
      <span>THE THANKSGIVING EDIT</span>
      <span>FOUR DESIGNS. ALL THE FEELS.</span>
      </div>
      <div className="products">
{products.map((product, index) => (
<ProductCard key={product.id} product={product} index={index} onSelect={setSelected} />
))}</div>
      <div className="future">
      <span>THIS IS JUST THE BEGINNING.</span>
      <p>Sweatshirts now. Tees, paper goods, and more little joys to come.</p>
      <span><Icon /></span>
      </div>
      </section>

    <ProductDialog product={selected} onClose={() => setSelected(null)} />
  </>;
}
