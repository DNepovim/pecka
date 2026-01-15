import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { Button } from "./Button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryProps {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
}

const getImageClasses = (index: number, isOpened: boolean): string => {
  const classes: string[] = [];

  // Grid span classes based on position
  if (index === 0) {
    classes.push("md:col-span-2 md:row-span-2");
  } else if (index === 4) {
    classes.push("md:row-span-2");
  } else if (index === 8) {
    classes.push("md:col-span-2");
  } else if (index === 17) {
    classes.push("md:col-span-2 md:row-span-2");
  }

  // Hidden on mobile when gallery is closed (images after index 4, except index 8)
  if (index > 4 && index !== 8 && !isOpened) {
    classes.push("max-md:hidden");
  }

  return classes.join(" ");
};

export const Gallery: React.FC<GalleryProps> = ({ isOpened, setIsOpened }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const data = useStaticQuery(graphql`
    query GalleryImages {
      allFile(
        filter: { relativeDirectory: { eq: "gallery" } }
        sort: { name: ASC }
      ) {
        nodes {
          id
          name
          base
          childImageSharp {
            gatsbyImageData(width: 1920, placeholder: NONE)
          }
        }
      }
    }
  `);

  const images = data.allFile.nodes.filter(
    (node: { childImageSharp: { gatsbyImageData: IGatsbyImageData } | null }) =>
      node.childImageSharp?.gatsbyImageData
  );

  const slidesData = images.map(
    (node: {
      id: string;
      base: string;
      childImageSharp: { gatsbyImageData: IGatsbyImageData };
    }) => ({
      id: node.id,
      ...node.childImageSharp.gatsbyImageData,
    })
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4 mb-16 max-w-screen-2xl mx-auto">
      {images.map(
        (
          node: {
            id: string;
            base: string;
            childImageSharp: { gatsbyImageData: IGatsbyImageData };
          },
          index: number
        ) => {
          const image = getImage(node.childImageSharp.gatsbyImageData);
          if (!image) return null;

          return (
            <div
              key={node.base}
              className={`sm:cursor-pointer ${getImageClasses(index, isOpened)}`}
              onClick={() => {
                if (window.innerWidth >= 640) {
                  setLightboxIndex(index);
                }
              }}
            >
              <GatsbyImage
                image={image}
                alt=""
                className="h-full"
                objectPosition={index === 19 ? "top" : undefined}
              />
            </div>
          );
        }
      )}
      <div className="col-span-full justify-center flex">
        <button
          className={`rounded-md w-fit mx-auto bg-brown-first font-bold flex items-end gap-2 py-2 px-8 text-white ${isOpened ? "hidden" : "md:hidden"}`}
          onClick={() => {
            setIsOpened(true);
          }}
        >
          Další fotky
        </button>
        <Button
          to="https://photos.app.goo.gl/ud146RC1DaD5TTHU8"
          className="max-md:hidden"
        >
          Více fotek
        </Button>
        <Button
          to="https://photos.app.goo.gl/ud146RC1DaD5TTHU8"
          className={`${isOpened ? "md:hidden" : "hidden"}`}
        >
          Ještě více fotek
        </Button>
      </div>

      <Lightbox
        open={lightboxIndex > -1}
        index={lightboxIndex}
        on={{ exited: () => setLightboxIndex(-1) }}
        slides={slidesData}
        carousel={{ imageFit: "contain", padding: 50 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: {
            backgroundColor: "rgba(139, 90, 43, 0.9)",
            backdropFilter: "blur(5px)",
          },
        }}
        render={{
          slide: (props) => {
            const slide = (props as unknown as { slide: IGatsbyImageData & { id: string } }).slide;
            const image = getImage(slide);
            if (!image) return null;

            return (
              <GatsbyImage
                key={slide.id}
                image={image}
                alt=""
                objectFit="contain"
                className="max-h-full max-w-full"
              />
            );
          },
        }}
      />
    </div>
  );
};
