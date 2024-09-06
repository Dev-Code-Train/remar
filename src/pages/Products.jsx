import React from 'react';
import '../styles/Products.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const products = [
  {
    id: 1,
    category: 'Sofás',
    image: 'path/to/sofa.jpg',
    name: 'Sofá de Cuero',
    dimensions: '200 x 90 x 85 cm',
    price: '$800',
  },
  {
    id: 2,
    category: 'Mesas',
    image: 'path/to/mesa.jpg',
    name: 'Mesa de Comedor',
    dimensions: '150 x 90 x 75 cm',
    price: '$300',
  },
  {
    id: 3,
    category: 'Sillas',
    image: 'path/to/silla.jpg',
    name: 'Silla de Oficina',
    dimensions: '60 x 60 x 120 cm',
    price: '$150',
  },
];

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="products-container">
      <h2>Productos</h2>
      <Slider {...settings} className="products-carousel">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-dimensions">{product.dimensions}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;