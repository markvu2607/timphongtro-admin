import {
  Datagrid,
  EditButton,
  List,
  SearchInput,
  TextField,
  DeleteWithConfirmButton,
} from "react-admin";

export const ProvinceList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
      <DeleteWithConfirmButton mutationMode="pessimistic" />
    </Datagrid>
  </List>
);
