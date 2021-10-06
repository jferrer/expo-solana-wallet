import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

import tw from "../lib/tailwind";
import { useDeviceContext } from "twrnc";

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  useDeviceContext(tw);

  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    ...tw`w-full flex-row  mb-4 justify-between`,
  },
});

export default memo(Header);
