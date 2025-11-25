import React, { FC } from "react";
import { Text, TextProps } from "@chakra-ui/react";

type CompletedTextProps = TextProps & {
  completed?: boolean;
};

export const CompletedText: FC<CompletedTextProps> = ({ children, completed, ...props }) => (
  <Text
    textDecoration={completed ? "line-through" : "none"}
    opacity={completed ? 0.6 : 1}
    {...props}
  >
    {children}
  </Text>
);

