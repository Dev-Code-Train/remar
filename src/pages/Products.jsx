import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Products.css';

/*  IMAGES */
import Bb1 from '../assets/BB1.jpg';
import Bb2 from '../assets/BB2.jpg';
import Bb3 from '../assets/BB3.jpg';
import Bb4 from '../assets/BB4.jpg';
import Bb5 from '../assets/BB5.jpg';
import Bb6 from '../assets/BB6.jpg';
import Bb7 from '../assets/BB7.jpg';
import Bb8 from '../assets/BB8.jpeg';
import Bed1 from '../assets/Bed1.jpg';
import Bed2 from '../assets/Bed2.jpg';
import Bed3 from '../assets/Bed3.jpg';
import Bed4 from '../assets/Bed4.jpg';
import Bed5 from '../assets/Bed5.jpg';
import Sofa1 from '../assets/Sofa1.jpg';
import Sofa2 from '../assets/Sofa2.jpg';
import Sofa3 from '../assets/Sofa3.jpg';
import Sofa4 from '../assets/Sofa4.jpg';
import Sofa5 from '../assets/Sofa5.jpg';
import Sofa6 from '../assets/Sofa6.jpg';
import Sofa7 from '../assets/Sofa7.jpg';
import Sofa8 from '../assets/Sofa8.jpg';
import Sofa9 from '../assets/Sofa9.jpg';
import Sofa10 from '../assets/Sofa10.jpg';
import Sofa11 from '../assets/Sofa11.jpg';
import Sofa12 from '../assets/Sofa12.jpg';
import Sofa13 from '../assets/Sofa13.jpg';
import Sofa14 from '../assets/Sofa14.jpg';
import Sofa15 from '../assets/Sofa15.jpg';
import Sofa16 from '../assets/Sofa16.jpg';
import Sofa17 from '../assets/Sofa17.jpg';
import Sofa18 from '../assets/Sofa18.jpg';
import Sofa19 from '../assets/Sofa19.jpg';
import Sofa21 from '../assets/Sofa21.jpg';
import Sofa22 from '../assets/Sofa22.jpg';
import Sofa23 from '../assets/Sofa23.jpg';
import Sofa25 from '../assets/Sofa25.jpg';
import Sofa26 from '../assets/Sofa26.jpg';
import Table1 from '../assets/Table1.jpg';
import Table2 from '../assets/Table2.jpg';
import Table3 from '../assets/Table3.jpg';
import Table4 from '../assets/Table4.jpg';
import Table5 from '../assets/Table5.jpg';
import Vin1 from '../assets/Vintage1.jpg';
import Vin2 from '../assets/Vintage2.jpg';
import Vin3 from '../assets/Vintage3.jpg';
import Vin4 from '../assets/Vintage4.jpg';
import Vin5 from '../assets/Vintage5.jpg';
import Vin6 from '../assets/Vintage6.jpg';
import Vin7 from '../assets/Vintage7.jpg';
import Vin8 from '../assets/Vintage8.jpg';

const products = {
  Sofás: [
    { id: 1, image: Sofa1, name: 'Sillón de cuero reclinable', price: '250€' },
    { id: 2, image: Sofa2, name: 'Chaiselonge', price: '499€' },
    { id: 3, image: Sofa3, name: 'Sofá de cuero', price: '599€' },
    { id: 4, image: Sofa4, name: 'Sofá blanco', price: '239€' },
    { id: 5, image: Sofa5, name: 'Chaiselonge blanco', price: '799€' },
    { id: 6, image: Sofa6, name: 'Sofa rojo', price: '219€' },
    { id: 7, image: Sofa7, name: 'Sofa gris', price: '159€' },
    { id: 8, image: Sofa8, name: 'Chaiselonge', price: '239€' },
    { id: 9, image: Sofa9, name: 'Sofá-cama', price: '219€' },
    { id: 10, image: Sofa10, name: 'Sofa gris', price: '219€' },
    { id: 11, image: Sofa11, name: 'Sofa para exterior', price: '449€' },
    { id: 12, image: Sofa12, name: 'Chaiselonge gris', price: '499€' },
    { id: 13, image: Sofa13, name: 'Sofá con reposabrazos para bebidas', price: '219€' },
    { id: 14, image: Sofa14, name: 'Sofá-cama', price: '480€' },
    { id: 15, image: Sofa15, name: 'Sofá-cama Ibiza', price: '7249€' },
    { id: 16, image: Sofa16, name: 'Sofá blanco', price: '240' },
    { id: 17, image: Sofa17, name: 'Chaiselonge', price: '239€' },
    { id: 18, image: Sofa18, name: 'Sofá azul', price: '219€' },
    { id: 19, image: Sofa19, name: 'Chaiselonge gris', price: '749€' },
    { id: 21, image: Sofa21, name: 'Sillón de cuero reclinable', price: '249€' },
    { id: 22, image: Sofa22, name: 'Sofá amarillo', price: '240€' },
    { id: 23, image: Sofa23, name: 'Sofá gris', price: '249€' },
    { id: 25, image: Sofa25, name: 'Chaiselonge gris', price: '749€' },
    { id: 26, image: Sofa26, name: 'Sillón beige reclinable', price: '249€' },
  ],
  Mesas: [
    { id: 1, image: Table1, name: 'Mesa marrón', price: '200€' },
    { id: 2, image: Table2, name: 'Mesa blanca', price: '200€' },
    { id: 3, image: Table3, name: 'Mesa madera', price: '280€' },
    { id: 4, image: Table4, name: 'Mesa bajera', price: '129€' },
    { id: 5, image: Table5, name: 'Mesa negra', price: '200€' },
  ],
  Camas: [
    { id: 1, image: Bed1, name: 'Cama Litera', price: '185€' },
    { id: 2, image: Bed2, name: 'Cama de Matrimonio', price: '79€' },
    { id: 3, image: Bed3, name: 'Cama de Matrimonio', price: '430€' },
    { id: 4, image: Bed4, name: 'Canape', price: '189€' },
    { id: 5, image: Bed5, name: 'Variedad en colchones modelo Adela', price: '100€-129€' },
  ],
  Armarios: [
    { id: 1, image: Bb1, name: 'Armario blanco con espejo', price: '230€' },
    { id: 2, image: Bb2, name: 'Armario madera con espejo', price: '230€' },
    { id: 3, image: Bb3, name: 'Armario blanco', price: '230€' },
    { id: 4, image: Bb4, name: 'Armario madera', price: '285€' },
    { id: 5, image: Bb5, name: 'Aparador boby', price: '199€' },
    { id: 6, image: Bb6, name: 'Armario madera con espejo', price: '149€' },
    { id: 7, image: Bb7, name: 'Comoda blanca y cajones madera', price: '230€' },
    { id: 8, image: Bb8, name: 'Armarios blancos', price: '229€-249€' },

  ],
  Vintage: [
    { id: 1, image: Vin1, name: 'Cómoda', price: 'Contacten para disponibilidad y precio' },
    { id: 2, image: Vin2, name: 'Cómoda cajonera', price: 'Contacten para disponibilidad y precio' },
    { id: 3, image: Vin3, name: 'Mueble-bar', price: 'Contacten para disponibilidad y precio' },
    { id: 4, image: Vin4, name: 'Mueble-bar', price: 'Contacten para disponibilidad y precio' },
    { id: 5, image: Vin5, name: 'Lince', price: 'Contacten para disponibilidad y precio' },
    { id: 6, image: Vin6, name: 'Sopera', price: 'Contacten para disponibilidad y precio' },
    { id: 7, image: Vin7, name: 'Figura galgo', price: 'Contacten para disponibilidad y precio' },
    { id: 8, image: Vin8, name: 'Mesa bajera', price: 'Contacten para disponibilidad y precio' },
  ],
};

export const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderCarousels = () => {
    return Object.keys(products).map((category) => (
      <div className="carousel-section" key={category}>
        <h3 data-aos="fade-up" className="carousel-title">{category}</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="products-carousel"
          data-aos="fade-up"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {products[category].map((product) => (
            <SwiperSlide key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onClick={() => openModal(product.image)}
              />
              <div className="product-details">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">{product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    ));
  };

  return (
    <div className="products-container">
      <h2 data-aos="fade-up">Productos</h2>
      <p data-aos="fade-up" className="intro-text">Estos son algunos de los artículos que podrás encontrar en nuestra tienda.</p>
      {renderCarousels()}

      {/* Modal for image preview */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}

      <p data-aos="fade-up" className="closing-text">Si estás interesado, no dudes en contactarnos.</p>
    </div>
  );
};