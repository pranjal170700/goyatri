import React from "react";
import styled from "styled-components";
import myImage from "../assets/myImage.jpg";

export default function Features() {
  return (
    <Section>
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="features">
        <div className="featur">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            deserunt consequatur repudiandae, illum eligendi asperiores.
          </p>
          <div className="info">
            <img src={myImage} alt="" />
            <div className="details">
              <h4>Pranjal Singh</h4>
              <span>Student GLA University</span>
            </div>
          </div>
        </div>
        <div className="featur">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            deserunt consequatur repudiandae, illum eligendi asperiores.
          </p>
          <div className="info">
            <img src={myImage} alt="" />
            <div className="details">
              <h4>Pranjal Singh</h4>
              <span>Student GLA University</span>
            </div>
          </div>
        </div>
        <div className="featur">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            deserunt consequatur repudiandae, illum eligendi asperiores.
          </p>
          <div className="info">
            <img src={myImage} alt="" />
            <div className="details">
              <h4>Pranjal Singh</h4>
              <span>Student GLA University</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .features {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .featture {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .features {
      flex-direction: column;
      margin: 0;
      .feature {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
