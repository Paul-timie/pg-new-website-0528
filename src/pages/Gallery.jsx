import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import yale400 from "/src/assets/images/gallery/yale400.png";
import yale800 from "/src/assets/images/gallery/yale800.png";
import yale620_1 from "/src/assets/images/gallery/yale620_1.png";
import fullSizeRender from "/src/assets/images/gallery/FullSizeRender.jpg";
import yale620_22 from "/src/assets/images/gallery/yale620_22.png";
import aspire620_2 from "/src/assets/images/gallery/620apire2.png";
import aspire620_1 from "/src/assets/images/gallery/620apire1.png";
import present from "/src/assets/images/gallery/present.png";
import asaio800_23_1 from "/src/assets/images/gallery/800asaio23_1.png";
import asaio23_1 from "/src/assets/images/gallery/asaio23_1.png";
import asaio23_11 from "/src/assets/images/gallery/asaio23_11.png";
import image3 from "/src/assets/images/gallery/3.png";
import image2 from "/src/assets/images/gallery/2.png";
import paul400 from "/src/assets/images/gallery/Paul_400.png";
import image5 from "/src/assets/images/gallery/5.png";
import asaio23_2 from "/src/assets/images/gallery/asaio23_2.png";
import conf620 from "/src/assets/images/gallery/620_conf.png";
import img1 from "/src/assets/images/gallery/IMG_1.png";
import img2 from "/src/assets/images/gallery/IMG_2.png";
import img3 from "/src/assets/images/gallery/IMG_3.png";
import img4 from "/src/assets/images/gallery/IMG_4.png";
import img6 from "/src/assets/images/gallery/IMG_6.png";
import img5 from "/src/assets/images/gallery/IMG_5.png";
import img9 from "/src/assets/images/gallery/IMG_9.png";
import img7 from "/src/assets/images/gallery/IMG_7.png";
import img8 from "/src/assets/images/gallery/IMG_8.png";
import img10 from "/src/assets/images/gallery/IMG_10.png";
import img11 from "/src/assets/images/gallery/IMG_11.png";

const images = [
  { src: yale400, alt: "Yale 400" },
  { src: yale800, alt: "Yale 800" },
  { src: yale620_1, alt: "Yale 620 1" },
  { src: fullSizeRender, alt: "Full Size Render" },
  { src: yale620_22, alt: "Yale 620 22" },
  { src: aspire620_2, alt: "620 Aspire 2" },
  { src: aspire620_1, alt: "620 Aspire 1" },
  { src: present, alt: "Present" },
  { src: asaio800_23_1, alt: "800 ASAIO 23 1" },
  { src: asaio23_1, alt: "ASAIO 23 1" },
  { src: asaio23_11, alt: "ASAIO 23 11" },
  { src: image3, alt: "Image 3" },
  { src: image2, alt: "Image 2" },
  { src: paul400, alt: "Paul 400" },
  { src: image5, alt: "Image 5" },
  { src: asaio23_2, alt: "ASAIO 23 2" },
  { src: conf620, alt: "620 Conference" },
  { src: img1, alt: "IMG 1" },
  { src: img2, alt: "IMG 2" },
  { src: img3, alt: "IMG 3" },
  { src: img4, alt: "IMG 4" },
  { src: img6, alt: "IMG 6" },
  { src: img5, alt: "IMG 5" },
  { src: img9, alt: "IMG 9" },
  { src: img7, alt: "IMG 7" },
  { src: img8, alt: "IMG 8" },
  { src: img10, alt: "IMG 10" },
  { src: img11, alt: "IMG 11" },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const resizeAllGridItems = () => {
      const allItems = document.getElementsByClassName("gallery-item");
      for (let x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
      }
    };

    const resizeGridItem = (item) => {
      const rowHeight = parseInt(
        window
          .getComputedStyle(galleryRef.current)
          .getPropertyValue("grid-auto-rows")
      );
      const rowGap = parseInt(
        window
          .getComputedStyle(galleryRef.current)
          .getPropertyValue("grid-row-gap")
      );
      const contentHeight = item
        .querySelector(".content")
        .getBoundingClientRect().height;
      const rowSpan = Math.ceil(
        (contentHeight + rowGap) / (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
    };

    //resizeAllGridItems();
    window.onload = resizeAllGridItems;
    window.addEventListener("resize", resizeAllGridItems);

    return () => {
      window.removeEventListener("resize", resizeAllGridItems);
    };
  }, []);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Gallery
      </h2>
      <div
        ref={galleryRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        style={{
          gridAutoRows: "5px", // Adjusted height to ensure better image display
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item overflow-hidden rounded-lg shadow-lg"
          >
            <div className="content">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => openLightbox(image)}
              />
            </div>
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-4xl w-full">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-auto"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
