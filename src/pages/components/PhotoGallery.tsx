/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import axios from "axios";

export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);
  const [images, setImages] = useState<Image[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);

  const handleClick = (index: number) => {
    setIndex(index);
  };

  interface Image {
    name: string;
    src: string;
    width: number;
    height: number;
    nano: string;
  }

  interface Slide {
    name: string;
    src: string;
    width: number;
    height: number;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get<Image[]>("/api/imageKit");
        const slides = data.map((image) => ({
          name: image.name,
          src: image.src,
          width: image.width,
          height: image.height,
        }));
        setImages(data);
        setSlides(slides);
      } catch (error) {
        console.error(error);
      }
    }
    if (images.length === 0) {
      fetchData();
    }
  }, [images]);

  return (
    <div className="z-10 border-none p-3">
      <div className="h-screen overflow-scroll">
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={300}
          margin={3}
        />
      </div>
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
