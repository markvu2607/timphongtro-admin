import { Box } from "@mui/material";
import {
  BooleanField,
  Datagrid,
  EmailField,
  List,
  SearchInput,
  TextField,
  EditButton,
  WithRecord,
  RaRecord,
  DeleteWithConfirmButton,
} from "react-admin";

const UserField = ({ user }: { user: RaRecord }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <img
        src={user.avatar}
        alt={user.name}
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
      <span>{user.name}</span>
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
      <WithRecord
        label="Id"
        render={(record) => <Box sx={{ width: "100px" }}>{record.id}</Box>}
      />
      <EmailField source="email" />
      <WithRecord
        label="Người dùng"
        render={(record) => <UserField user={record} />}
      />
      <TextField source="phone" label="Số điện thoại" />
      <BooleanField source="isVerified" label="Đã xác thực" />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <EditButton />
        <DeleteWithConfirmButton />
      </Box>
    </Datagrid>
  </List>
);
