import { Switch, Flex, Text, useColorMode, HStack } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark" ? true : false}
      />
      <Text whiteSpace="nowrap">
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
