// components/Carousel.js
import React, { useState } from "react";
import styles from "./Carousel.module.css";

const imageUrls = [
  "../../public/images/2.jpg",
  "../../public/images/5.jpg",
  "../../public/images/motosierra.png",
];

const itemsPerPage = 3;

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPageCount = Math.ceil(imageUrls.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedPhotos = imageUrls.slice(startIdx, endIdx);

  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPageCount);
  };

  const prevSlide = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + totalPageCount) % totalPageCount
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.column}>
        {displayedPhotos.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            className={styles.slide}
          />
        ))}
      </div>
      <div className={styles.navButtons}>
        <button onClick={prevSlide} className={styles.navButton}>
          Previous
        </button>
        <button onClick={nextSlide} className={styles.navButton}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
