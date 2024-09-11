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
import Bed1 from '../assets/Bed1.jpg';
import Bed2 from '../assets/Bed2.jpg';
import Bed3 from '../assets/Bed3.jpg';
import Sofa1 from '../assets/Sofa1.jpg';
import Sofa2 from '../assets/Sofa2.jpg';
import Sofa3 from '../assets/Sofa3.jpg';
import Sofa4 from '../assets/Sofa4.jpg';
import Sofa5 from '../assets/Sofa5.jpg';
import Table1 from '../assets/Table1.jpg';
import Table2 from '../assets/Table2.jpg';
import Table3 from '../assets/Table3.jpg';
import Table4 from '../assets/Table4.jpg';
import Vin1 from '../assets/Vintage1.jpg';
import Vin2 from '../assets/Vintage2.jpg';
import Vin3 from '../assets/Vintage3.jpg';
import Vin5 from '../assets/Vintage5.jpg';
import Vin6 from '../assets/Vintage6.jpg';
import Vin7 from '../assets/Vintage7.jpg';

const products = {
  sofas: [
    { id: 1, image: Sofa1, name: 'Sillón de cuero reclinable', price: '250€' },
    { id: 2, image: Sofa2, name: 'Chaiselonge', price: '499€' },
    { id: 3, image: Sofa3, name: 'Sofá de cuero', price: '599€' },
    { id: 4, image: Sofa4, name: 'Sofá blanco', price: '239€' },
    { id: 5, image: Sofa5, name: 'Chaiselonge blanco', price: '799€' },
  ],
  table: [
    { id: 1, image: Table1, name: 'Mesa marrón', price: '200€' },
    { id: 2, image: Table2, name: 'Mesa blanca', price: '200€' },
    { id: 3, image: Table3, name: 'Mesa madera', price: '280€' },
    { id: 4, image: Table4, name: 'Mesa bajera', price: '129€' },
  ],
  beds: [
    { id: 1, image: Bed1, name: 'Cama Litera', price: '185€' },
    { id: 2, image: Bed2, name: 'Cama de Matrimonio', price: '79€' },
    { id: 3, image: Bed3, name: 'Cama de Matrimonio', price: '430€' },
  ],
  vintage: [
    { id: 1, image: Vin1, name: 'Cómoda', price: 'Contacten para disponibilidad y precio' },
    { id: 2, image: Vin2, name: 'Cómoda cajonera', price: 'Contacten para disponibilidad y precio' },
    { id: 3, image: Vin3, name: 'Mueble-bar', price: 'Contacten para disponibilidad y precio' },
    { id: 5, image: Vin5, name: 'Lince', price: 'Contacten para disponibilidad y precio' },
    { id: 6, image: Vin6, name: 'Sopera', price: 'Contacten para disponibilidad y precio' },
    { id: 7, image: Vin7, name: 'Figura galgo', price: 'Contacten para disponibilidad y precio' },
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

  return (
    <div className="products-container">
      <h2 data-aos="fade-up">Productos</h2>

      {/* Carousel for Sofas */}
      <div className="carousel-section">
        <h3 data-aos="fade-up" className="carousel-title">Sofás</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}  /* Centra las imágenes */
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="products-carousel"
          data-aos="fade-up"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Móviles pequeños
            640: { slidesPerView: 1, spaceBetween: 20 }, // Móviles
            768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
            1024: { slidesPerView: 3, spaceBetween: 30 }, // Escritorio
          }}
        >
          {products.sofas.map((product) => (
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

      {/* Carousel for Chairs */}
      <div className="carousel-section">
        <h3 data-aos="fade-up" className="carousel-title">Mesas</h3>
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
          {products.table.map((product) => (
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

      {/* Carousel for Beds */}
      <div className="carousel-section">
        <h3 data-aos="fade-up" className="carousel-title">Camas</h3>
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
          {products.beds.map((product) => (
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

          {/* Carousel for Sofas */}
      <div className="carousel-section">
        <h3 data-aos="fade-up" className="carousel-title">Sofás</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}  /* Centra las imágenes */
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="products-carousel"
          data-aos="fade-up"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Móviles pequeños
            640: { slidesPerView: 1, spaceBetween: 20 }, // Móviles
            768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
            1024: { slidesPerView: 3, spaceBetween: 30 }, // Escritorio
          }}
        >
          {products.sofas.map((product) => (
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

      {/* Carousel for Vintage */}
      <div className="carousel-section">
      <h3 data-aos="fade-up" className="carousel-title">Vintage</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}  /* Centra las imágenes */
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="products-carousel"
          data-aos="fade-up"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Móviles pequeños
            640: { slidesPerView: 1, spaceBetween: 20 }, // Móviles
            768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
            1024: { slidesPerView: 3, spaceBetween: 30 }, // Escritorio
          }}
        >
          {products.vintage.map((product) => (
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

      {/* Modal for image preview */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};
