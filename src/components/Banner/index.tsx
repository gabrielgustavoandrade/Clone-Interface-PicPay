import React from "react";

import styled from 'styled-components/native';

const img13 = require("../../assets/13.png");

const Banner = () => {
  return (
    <Container>
      <Details>
          <Title>Cobre alguém</Title>

          <Description>
              Mantenha suas parcerias em dia, use o PicPay oara fazer suas cobranças.
          </Description>
      </Details>
      <Image source={img13} />
    </Container>
  );
};

export default Banner;

export const Container = styled.View`
    background: #6882BB;
    margin: 25px 16px;
    border-radius: 8px;
    height: 150px;
    flex-direction: row;
    align-items: center;
    padding: 15px;
`;

export const Details = styled.View`
    flex: 1;
`;

export const Image = styled.Image``;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 15px;
`;
