import { useForm, SubmitHandler } from "react-hook-form";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Input,
  SimpleGrid,
  Button,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import  theme  from "../Themes";
import axios from "axios";

type Inputs = {
  name: string;
  type: string | undefined;
  description: string;
  base64: String;
};

const getBase64 = (file): Promise<String> => {
  return new Promise((resolve) => {
    let baseURL;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};

export default function CreateDocument() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await sendToS3(data);
  };

  const [file, setFile] = useState<File>();

  const sendToS3 = async (data) => {
    const base64String = await getBase64(file);
    const fileName = file?.type

    const s3Input: Inputs = {
      name: data.name,
      type: fileName,
      description: data.description,
      base64: base64String,
    };
    axios
      .post(`http://localhost:4000/documents`, s3Input)
    window.location.reload();
  };

  const handleFileChange = (event) => {
    const newFile = event.target.files[0];
    setFile(newFile);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <ChakraProvider theme={theme}>
        <Box p={4} alignItems="left">
          <Text pb={6} pt={0} fontSize={12} color="red">
            Fields marked with an * are compulsory
          </Text>
          <SimpleGrid columns={2} gap={0} columnGap={5}>
            <VStack pr={4}>
              <Text pb={0} align="left">
                Name of the Document*
              </Text>
              <Input placeholder="Document Name" {...register("name")} />
            </VStack>
          </SimpleGrid>
          <SimpleGrid columns={1} gap={0} columnGap={5}>
            <VStack pr={4}>
              <Text pb={0} pt={4}>
                Description of the Document
              </Text>
              <Input placeholder="Description" {...register("description")} />
            </VStack>
            <VStack pr={4} pt={12}>
              <input type="file" onChange={handleFileChange} />
            </VStack>
            <Center>
              <Button mt={8} colorScheme="teal" type="submit">
                Submit
              </Button>
            </Center>
          </SimpleGrid>
        </Box>
      </ChakraProvider>
    </form>
  );
}
