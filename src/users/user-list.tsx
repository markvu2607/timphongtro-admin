import {
  BooleanField,
  Datagrid,
  EmailField,
  List,
  SearchInput,
  TextField,
  DeleteButton,
  EditButton,
} from "react-admin";

export const UserList = () => (
  <List
    sort={{ field: "email", order: "ASC" }}
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
  >
    <Datagrid>
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="name" />
      <TextField source="phone" />
      <BooleanField source="isVerified" />
      <TextField source="avatar" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
