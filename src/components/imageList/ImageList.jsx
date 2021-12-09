import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ImageCard from "./imageCard/ImageCard";

const ImageList = () => {
  const images = useSelector((state) => state.imagesList.images);

  if (images.length) {
    return (
      <>
        <ImageListContainer>
          {images.map((image) => (
            <TransitionGroup>
              <CSSTransition key={image.id} timeout={20}>
                <ImageCard
                  imgUrl={image.urls.regular}
                  id={image.id}
                  author={image.user.name}
                  location={image.user.location}
                  avatar={image.user.profile_image.small}
                />
              </CSSTransition>
            </TransitionGroup>
          ))}
        </ImageListContainer>
      </>
    );
  } else {
    return <NotFound>Not Found</NotFound>;
  }
};

export default ImageList;

const ImageListContainer = styled.div`
  column-count: 3;
  column-gap: 5px;
  break-inside: avoid;

  /* grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem; */
`;
const NotFound = styled.p`
  display: flex;
  font-weight: 400;
  font-size: 3rem;
  align-items: center;
  justify-content: center;
`;
