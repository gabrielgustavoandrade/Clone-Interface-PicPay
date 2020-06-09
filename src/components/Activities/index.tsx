import React, {useState} from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import styled from 'styled-components/native';

const avatar = require("../../assets/avatar.png");

const Activities = () => {

  const [liked, setLiked] = useState(false);
  const [likedHeart, setLikedHeart] = useState(0);

  function handleToogleLiked() {
    setLiked((prevState) => !prevState);
    if(liked) setLikedHeart(0);
    else setLikedHeart(1);
  }

  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@gabrielandrade</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Gabriel Andrade</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 20,00</Value>
            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>Há dois 2 minutos</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign
                name={liked ? "heart" : "hearto"}
                size={14}
                color={liked ? "#0DB060" : "#fff"}
                onPress={handleToogleLiked}
              />
              <OptionLabel>{likedHeart}</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;

export const Container = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const Header = styled.View`
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 20px;
    padding: 15px; 
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Avatar = styled.Image``;

export const Description = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 15px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const CardBody = styled.View`
    margin-top: 20px;
`;

export const UserName = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const CardFooter = styled.View`
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Details = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 2px;
    height: 13px;
    background: rgba(255, 255, 255, 0.4);
    margin: 0 10px;
`;

export const Date = styled.Text`
    color: #fff;
    margin-left: 5px;
`;

export const Actions = styled.View`
    flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
    margin-left: 15px;
    flex-direction: row;
`;

export const OptionLabel = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 5px;
`;