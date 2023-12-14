import styles from "./categoriesSubTabs.module.css";
import Image from "next/image";
import Carousel from "react-grid-carousel";

const images = require.context("../../../public/images");
const tools = images.keys().map((image) => images(image));

export default function IluminariesCategory() {
  return (
    <div style={{ width: "1000px", margin: "auto", paddingBottom: "200px" }}>
      <Carousel
        cols={3}
        rows={1}
        loop
        autoplay={2000}
        className={styles.customCarousel}
      >
        {tools.map((image, index) => (
          <Carousel.Item key={index} style={styles.images}>
            <Image src={image.default} width={300} height={300} alt="holi" />
            <div className={styles.overlay}>hello</div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
