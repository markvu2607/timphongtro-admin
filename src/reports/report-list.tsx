import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  SearchInput,
  TextField,
} from "react-admin";

export const ReportList = () => (
  <List
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="reason" />
      <TextField source="description" />
      <TextField source="post.id" />
      <TextField source="status" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
