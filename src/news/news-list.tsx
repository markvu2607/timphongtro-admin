import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

export const NewsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="thumbnail" />
      <TextField source="shortDescription" />
      <TextField source="content" />
      <TextField source="province.id" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
