import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getImages } from "../../actions/images";
import bg from "./../../assets/background.jpg";
import Input from "../UI/input/input";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(false);

  const [prompts, setPrompts] = useState(false);
  const navigate = useNavigate();
  const images = useSelector((state) => state.imagesList.images);
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.stopPropagation();
    setSearch(e.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
    if (search.length > 2) {
      setPrompts(true);
      setSearchTimeout(
        setTimeout(
          (value) => {
            dispatch(getImages(value));
          },
          400,
          e.target.value
        )
      );
    } else {
      setPrompts(false);
    }
  };
  const pressHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(getImages(e.target.value));
      navigate("/images");
    }
  };

  const clickHandler = (title) => {
    dispatch(getImages(title));
    navigate("/images");
  };
  return (
    <Container>
      <Header>
        <Input
          placeholder="Search free high-resolution photos"
          type="search"
          value={search}
          onKeyPress={pressHandler}
          onChange={searchHandler}
        />

        <PromptContainer>
          {prompts &&
            images
              .slice(0, 4)
              .map((i) =>
                i.tags.map((t) =>
                  t.hasOwnProperty("title") ? (
                    <Prompt onClick={() => clickHandler(t.title)}>
                      {t.title}
                    </Prompt>
                  ) : (
                    <Prompt>No results found</Prompt>
                  )
                )
              )}
        </PromptContainer>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: url(${bg}) center no-repeat;
  background-size: cover;
`;
const Header = styled.div`
  position: absolute;
  display: inline-block;
  width: 60vw;
  margin: 5rem;
`;
const PromptContainer = styled.div`
  height: 10vh;
  display: flex;
  flex-flow: wrap;
`;
const Prompt = styled.li`
  list-style: none;
  margin: 2px;
  height: fit-content;
  width: fit-content;
  position: relative;
  padding: 0.3vh 0.5vw;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  padding: 1rem;
  border: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  cursor: default;

  &:hover {
    background: #808080;
  }
`;

export default MainPage;
