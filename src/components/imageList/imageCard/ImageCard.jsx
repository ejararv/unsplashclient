import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setModal, setModalContent } from "../../../reducers/imageReducer";
import locationSvg from "./../../../assets/location.svg";

const ImageCard = ({
  imgUrl,
  author,
  customStyles,
  id,
  avatar,
  location,
  ...props
}) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setModal("flex"));
    dispatch(
      setModalContent({
        imageUrl: imgUrl,
        imageAuthor: author,
        imageLocation: location,
        avatarUrl: avatar,
      })
    );
  };

  return (
    <ImageCardContainer onClick={(e) => handleClick(e)}>
      <ImageContainer>
        <Avatar>
          <UserPhoto src={avatar} />
          <ImageAuthor>{author}</ImageAuthor>
        </Avatar>
        <Image style={customStyles} src={imgUrl} />
        {location && (
          <LocationContainer>
            <LocationSvg src={locationSvg} />
            <ImageLocation>{location}</ImageLocation>
          </LocationContainer>
        )}
      </ImageContainer>
    </ImageCardContainer>
  );
};

const ImageCardContainer = styled.div`
  display: flex;
  max-width: 95vw;
  align-items: center;
  justify-content: center;
  margin: 3rem 1rem;
  width: fit-content;
  height: fit-content;
  cursor: zoom-in;
  break-inside: avoid;
`;
const ImageContainer = styled.div`
  display: flex;

  flex-direction: column;
`;

const ImageAuthor = styled.p`
  font-weight: 300;

  margin: auto 0.5rem;
  left: 0;
  width: 100%;
`;
const ImageLocation = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  margin: auto 0.5rem;
`;
const LocationContainer = styled.div`
  display: flex;
`;
const LocationSvg = styled.div`
  width: 2vw;
  height: 3vh;
  background: url(${(props) => props.src}) no-repeat center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Avatar = styled.div`
  display: flex;
  align-content: flex-start;
  font-size: 1.1rem;
  width: 100%;
  height: 5vh;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
`;
const UserPhoto = styled.img`
  border-radius: 50%;
  margin: auto;
`;

export default ImageCard;
