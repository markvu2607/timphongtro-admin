import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  SearchInput,
  TextField,
} from "react-admin";

export const DistrictList = () => (
  <List
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="province.id" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
