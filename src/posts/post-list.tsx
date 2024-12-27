import {
  Datagrid,
  DateField,
  List,
  SearchInput,
  TextField,
  useRecordContext,
} from "react-admin";
import { Avatar, Box } from "@mui/material";

import { ApproveButton, RejectButton } from "./buttons";

const User = () => {
  const record = useRecordContext();

  if (!record) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        src={record.user.avatar}
        alt={record.user.name}
        style={{ width: 32, height: 32 }}
      />
      <span style={{ marginLeft: "8px" }}>{record.user.name}</span>
    </Box>
  );
};

export const PostList = () => (
  <List
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="createdAt" />
      <TextField source="status" />
      <TextField source="thumbnail" />
      <TextField source="address" />
      <TextField source="district.name" />
      <TextField source="province.name" />
      <TextField source="paymentPackage.name" label="Gói tin" />
      <Box>
        <User />
      </Box>
      <Box>
        <ApproveButton />
        <RejectButton />
      </Box>
    </Datagrid>
  </List>
);
