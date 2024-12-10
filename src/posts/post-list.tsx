import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  NumberField,
  SearchInput,
  TextField,
} from "react-admin";

export const PostList = () => (
  <List
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <DateField source="createdAt" />
      <TextField source="thumbnail" />
      <TextField source="address" />
      <TextField source="district.id" />
      <TextField source="province.id" />
      <TextField source="user.id" />
      {/* TODO: add publish button */}
    </Datagrid>
  </List>
);
