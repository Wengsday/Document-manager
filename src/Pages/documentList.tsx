import {
  Table,
  Thead,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Box,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";

import axios from "axios";
import { triggerBase64Download } from "react-base64-downloader";
import React, { useState, useEffect } from "react";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  type Document = {
    id: string;
    name: string;
    type: string;
    description: string;
    created: string;
    updated: string;
  };

  useEffect(() => {
    async function getDocuments() {
      const documentsList = await axios.get(`http://localhost:4000/documents`);
      setDocuments(documentsList);
    }
    getDocuments();
  });

  return (
    <Box w="100">
      <TableContainer alignSelf="center">
        <Table variant="simple">
          <TableCaption>Documents</TableCaption>
          <Thead>
            <Tr>
              <Th>Document ID</Th>
              <Th>Document Type</Th>
              <Th>Description</Th>
              <Th>View</Th>
              <Th>Created At</Th>
              <Th>Updated At</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {documents.map((item) => (
              <Tr>
                <Td>{item.id}</Td>
                <Td>{item.type}</Td>
                <Td>{item.description}</Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    onClick={() => downloadDocument(item.id, item.name)}
                  >
                    Download Document
                  </Button>
                </Td>
                <Td>{item.created}</Td>
                <Td>{item.updated}</Td>
                <Td>
                  <CloseIcon
                    onClick={() => deleteDocument(item.id)}
                  ></CloseIcon>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

async function downloadDocument(id: String, name: string) {
  const downloadedDoc = await axios.get(
    `http://localhost:4000/documents/${id}`
  );

  if (downloadedDoc.data.type.includes("image")) {
    triggerBase64Download(downloadedDoc.data.s3body, name);
  } else {
    downloadPDF(downloadedDoc.data.s3body, name);
  }
}

function downloadPDF(base64, name) {
  const linkSource = base64;
  const downloadLink = document.createElement("a");
  const fileName = name + ".pdf";

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}

async function deleteDocument(id: String) {
  const downloadedDoc = await axios.delete(
    `http://localhost:4000/documents/${id}`
  );
}

export default DocumentList;
