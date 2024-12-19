import {
  BooleanField,
  Datagrid,
  EmailField,
  List,
  SearchInput,
  TextField,
  DeleteButton,
  EditButton,
  useRecordContext,
} from "react-admin";

const UserField = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <img
        src={record.avatar}
        alt={record.name}
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
      <span>{record.name}</span>
    </div>
  );
};

export const UserList = () => (
  <List
    sort={{ field: "email", order: "ASC" }}
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
  >
    <Datagrid>
      <TextField source="id" />
      <EmailField source="email" />
      <UserField />
      <TextField source="phone" />
      <BooleanField source="isVerified" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
