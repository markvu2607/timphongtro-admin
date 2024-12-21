import {
  Datagrid,
  DeleteButton,
  List,
  SearchInput,
  TextField,
} from "react-admin";
import { ApproveButton, RejectButton } from "./buttons";
import { Box } from "@mui/material";

export const ReportList = () => (
  <List
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
    actions={false}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="reason" />
      <TextField source="description" />
      <TextField source="status" />
      <TextField source="name" />
      <TextField source="phone" />
      <TextField source="postId" />
      <Box>
        <ApproveButton />
        <RejectButton />
        <DeleteButton />
      </Box>
    </Datagrid>
  </List>
);
