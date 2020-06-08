import React from "react";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  focused: boolean;
}

const PayButton: React.FC<Props> = ({ onPress, focused }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={focused ? ["#fff", "#ccc"] : ["#00fc6c", "#00ac4a"]}
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? "#000" : "#fff"}
        />
        <Text style={[styles.pay, focused ? styles.paySelected : {}]}>
          Pagar
        </Text>
      </Button>
    </TouchableWithoutFeedback>
  );
};
export default PayButton;

const styles = StyleSheet.create({
  pay: {
    color: "#fff",
    fontSize: 12,
  },
  paySelected: {
    color: "#000",
  },
});

export const Button = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;
