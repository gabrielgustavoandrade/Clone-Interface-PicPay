import React from "react";
import styled from "styled-components/native";

const img8 = require("../../assets/08.png");
const img9 = require("../../assets/09.png");
const img10 = require("../../assets/10.png");
const img11 = require("../../assets/11.png");
const img12 = require("../../assets/12.png");

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: "Saiba como pagar um boleto com PicPay",
    color: "#172c4a",
  },

  {
    key: String(Math.random()),
    img: img9,
    title: "Conheça nossas promoções",
    color: "#6a0159",
  },

  {
    key: String(Math.random()),
    img: img10,
    title: "Compre de quem está perto",
    color: "#4139c8",
  },

  {
    key: String(Math.random()),
    img: img11,
    title: "Pague sua contas sem sair de casa",
    color: "#00ab4b",
  },

  {
    key: String(Math.random()),
    img: img12,
    title: "Deixe seu dinheiro render",
    color: "#ba2f76",
  },
];

interface Props {
  bgColor?: any;
}

const Tips: React.FC<Props> = () => {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.color}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};

export default Tips;

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity<Props>`
  background: ${(props) => props.bgColor};
  width: 150px;
  height: 200px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;
