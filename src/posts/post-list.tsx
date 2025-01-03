import {
  Datagrid,
  DateField,
  DeleteButton,
  List,
  SearchInput,
  TextField,
  WithRecord,
} from "react-admin";
import { Avatar, Box } from "@mui/material";

import { ApproveButton, RejectButton, ViewPostButton } from "./buttons";

const UserField = ({ user }: { user: { avatar: string; name: string } }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        src={user.avatar}
        alt={user.name}
        style={{ width: 32, height: 32 }}
      />
      <span style={{ marginLeft: "8px" }}>{user.name}</span>
    </Box>
  );
};

export const PostList = () => (
  <List
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
    actions={false}
  >
    <Datagrid>
      <WithRecord
        label="Id"
        render={(record) => <Box sx={{ width: "100px" }}>{record.id}</Box>}
      />
      <TextField source="title" label="Tiêu đề" />
      <DateField source="createdAt" label="Thời gian tạo" />
      <TextField source="status" label="Trạng thái" />
      <WithRecord
        label="Địa chỉ"
        render={(record) => <Box sx={{ width: "200px" }}>{record.address}</Box>}
      />
      <TextField source="paymentPackage.name" label="Gói thanh toán" />
      <WithRecord
        label="Người dùng"
        render={(record) => <UserField user={record.user} />}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <ViewPostButton />
        <ApproveButton />
        <RejectButton />
        <DeleteButton />
      </Box>
    </Datagrid>
  </List>
);
