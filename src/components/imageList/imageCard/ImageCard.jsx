import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setModal, setModalContent } from "../../../reducers/imageReducer";

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
  const modalDisplay = useSelector((state) => state.imagesList.modalDisplay);

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
    console.log(imgUrl);
    console.log("flex");
  };

  return (
    <ImageCardContainer onClick={(e) => handleClick(e)}>
      <ImageContainer>
        
          <Avatar image={avatar}>
            <UserPhoto src={avatar} />
            <ImageAuthor>{author}</ImageAuthor>
          </Avatar>
      
        <Image style={customStyles} src={imgUrl} />
        <ImageLocation>{location}</ImageLocation>
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

const ImageAuthor = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
`;
const ImageLocation = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  break-inside: avoid;
`;
const Avatar = styled.div`
  display: flex;

  width: 5vw;
  height: 5vh;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
`;
const UserPhoto = styled.img`
  border-radius: 50%;
`;

export default ImageCard;
