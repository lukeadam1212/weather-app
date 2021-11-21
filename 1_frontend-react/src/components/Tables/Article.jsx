import React from "react";
import styled from "styled-components";

// backup images

import one from "../../assets/images/article-images/one.jpg";
import two from "../../assets/images/article-images/two.jpg";
import three from "../../assets/images/article-images/three.jpg";
import four from "../../assets/images/article-images/four.jpg";
import five from "../../assets/images/article-images/five.jpg";
import six from "../../assets/images/article-images/six.jpg";
import seven from "../../assets/images/article-images/seven.jpg"
import eight from "../../assets/images/article-images/eight.jpg";
import nine from "../../assets/images/article-images/nine.jpg";
import ten from "../../assets/images/article-images/ten.jpg";
import eleven from "../../assets/images/article-images/eleven.jpg";
import twelve from "../../assets/images/article-images/twelve.jpg"
import thirteen from "../../assets/images/article-images/thirteen.jpg"
import fourteen from "../../assets/images/article-images/fourteen.jpg"
import fifteen from "../../assets/images/article-images/fifteen.jpg"
import sixteen from "../../assets/images/article-images/sixteen.jpg"
import seventeen from "../../assets/images/article-images/seventeen.jpg"
import eighteen from "../../assets/images/article-images/eighteen.jpg"
import nineteen from "../../assets/images/article-images/nineteen.jpg"
import twenty from "../../assets/images/article-images/twenty.jpg"
import twentyOne from "../../assets/images/article-images/twenty-one.jpg"
import twentyTwo from "../../assets/images/article-images/twenty-two.jpg"

let randomImages = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyOne,
  twentyTwo,
];

// custom function
const randomImage = () => {
  const randomNumber = Math.floor(Math.random() * 22);
  return randomImages[randomNumber];
};

randomImage();

const StyledArticle = styled.div`
  height: 8rem;
  width: 98%;
  margin: 0 auto;
  margin: 0.7rem 0 0.7rem 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;

  img {
    height: 90%;
    width: 35%;
    object-fit: cover;
    border-radius: 1rem 0 0 1rem;
  }
`;

const MainArticleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-around;
  height: 90%;
  width: 55%;
  color: white;
  h5 {
    font-size: 0.7rem;
    text-align: left;
  }
  p {
    font-size: 0.5rem;
    text-align: left;
  }
`;

const ArticleTextTop = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const ArticleTextBottom = styled.div`
  height: 20%;
  width: 100%;
  text-align: right;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const StyledImage = styled.img`
  width: 2rem;
`;

const Article = ({ news }) => {
  // custom functions
  // limit words in output
  const truncate = (str, no_words) => {
    return str.split(" ").slice(0, no_words).join(" ");
  };
  return (
    <div>
      {news.slice(0, 10).map((item) => (
        <StyledArticle key={Math.floor(Math.random() * 2000000)}>
          <StyledImage
            src={
              item.image === null ? (item.image = randomImage()) : item.image
            }
            alt=""
          />
          <MainArticleText className="main-article-text">
            <ArticleTextTop className="article-text-top">
              <h5>{truncate(item.title, 10)}</h5>
              <p>{truncate(item.description, 20)}</p>
            </ArticleTextTop>
            <ArticleTextBottom className="item-text-bottom">
              <a href={item.url} target="_blank" rel="noreferrer">
                <h6>Full Article</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 18v-4h-7v-4h7v-4l6 6-6 6zm-1-16c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
                </svg>
              </a>
            </ArticleTextBottom>
          </MainArticleText>
        </StyledArticle>
      ))}
    </div>
  );
};

export default Article;
