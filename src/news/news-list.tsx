import { Box } from "@mui/material";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
  ImageField,
} from "react-admin";
import { PublishButton, UnpublishButton } from "./buttons";

export const NewsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="shortDescription" />
      <ImageField source="thumbnail.src" />
      <TextField source="province.name" />
      <TextField source="status" />
      <TextField source="createdAt" />
      <TextField source="publishedAt" />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <PublishButton />
        <UnpublishButton />
        <EditButton />
        <DeleteButton />
      </Box>
    </Datagrid>
  </List>
);
