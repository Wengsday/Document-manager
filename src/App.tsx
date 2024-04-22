import { theme } from "./Themes";
import {
  ChakraProvider,
  Flex,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";

import CreateDocument from "./Pages/createDocument";
import DocumentList from "./Pages/documentList";
import Home from "./Pages/viewDocument";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        textColor="white"
        align="center"
        position="sticky"
        top={0}
        width="100vw"
        justify="space-between"
        height={14}
        bgColor="#7B61FF"
        zIndex={10}
      >
        <Text position="absolute" left="5%">
          Wen
        </Text>
        <Text
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          textStyle="typography-16px-900"
        >
          Document Manager
        </Text>
      </Flex>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>View Documents</Tab>
          <Tab>Create Documents</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DocumentList></DocumentList>
          </TabPanel>
          <TabPanel>
            <CreateDocument></CreateDocument>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}
