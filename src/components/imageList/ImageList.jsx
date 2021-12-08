import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ImageCard from "./imageCard/ImageCard";

const ImageList = () => {
  const images = useSelector((state) => state.imagesList.images);

  if (images.length) {
    return (
      <ImageListContainer>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            imgUrl={image.urls.regular}
            id={image.id}
            author={image.user.name}
            location={image.user.location}
            avatar={image.user.profile_image.small}
          />
        ))}
      </ImageListContainer>
    );
  } else {
    return <div>no results</div>;
  }
};

const ImageListContainer = styled.div`
  column-count: 3;
  column-gap: 5px;
  break-inside: avoid;
  /* grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem; */
`;

export default ImageList;
