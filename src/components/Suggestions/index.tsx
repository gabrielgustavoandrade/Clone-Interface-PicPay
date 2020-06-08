import React from "react";

const img1 = require("../../assets/01.png");
const img2 = require("../../assets/02.png");
const img3 = require("../../assets/03.png");
const img4 = require("../../assets/04.png");
const img5 = require("../../assets/05.png");
const img6 = require("../../assets/06.png");
const img7 = require("../../assets/07.png");

const items = [
  {
    key: String(Math.random()),
    img: img1,
    name: "Recarga",
  },
  {
    key: String(Math.random()),
    img: img2,
    name: "Uber",
  },
  {
    key: String(Math.random()),
    img: img3,
    name: "Ônibus",
  },
  {
    key: String(Math.random()),
    img: img4,
    name: "TV",
  },
  {
    key: String(Math.random()),
    img: img5,
    name: "Doações",
  },
  {
    key: String(Math.random()),
    img: img6,
    name: "Boletos",
  },
  {
    key: String(Math.random()),
    img: img7,
    name: "Ajuda",
  },
];

const Suggestions = () => (
  <Container horizontal>
    {items.map((item) => (
      <Option key={item.key}>
        <Img source={item.img} />
        <Label>{item.name}</Label>
      </Option>
    ))}
  </Container>
);

export default Suggestions;

import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`
    background: #1e222b;
    height: 130px;
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
`;
