import styled from "styled-components";
import bannerJPG from "../../assets/images/jan-starek-wYqG10rqsXw-unsplash.jpg";

const Banner = () => {
  return (
    <StyledBanner>
      <StyledHeader>
        Welcome to Atlan, we provide the latest data insights in Indian Premier
        League(IPL)
      </StyledHeader>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  background: url(${bannerJPG}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 12rem;
  background-position: 65% 15%;
  padding: 1rem 2rem;

  @media screen and (max-width: 894px) {
    height: 10rem;
    padding: 1rem;
  }
`;

const StyledHeader = styled.h1`
  color: #ededf7;
  font-size: 1.7rem;
  max-width: 50%;
  min-width: 50%;
  word-wrap: wrap;

  @media screen and (max-width: 894px) {
    font-size: 1.3rem;
    min-width: 100%;
  }
`;

export default Banner;
