import {
  Datagrid,
  DeleteWithConfirmButton,
  EditButton,
  List,
  SearchInput,
  TextField,
} from "react-admin";

export const DistrictList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="province.name" />
      <EditButton />
      <DeleteWithConfirmButton mutationMode="pessimistic" />
    </Datagrid>
  </List>
);
