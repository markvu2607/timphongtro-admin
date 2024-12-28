import {
  Datagrid,
  DeleteButton,
  List,
  SearchInput,
  TextField,
  WithRecord,
} from "react-admin";
import { Box } from "@mui/material";

import { ApproveButton, RejectButton, ViewPostButton } from "./buttons";

export const ReportList = () => {
  return (
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
        <TextField source="reason" />
        <TextField source="description" />
        <TextField source="status" />
        <TextField source="name" label="Reporter" />
        <TextField source="phone" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <ViewPostButton />
          <ApproveButton />
          <RejectButton />
          <DeleteButton />
        </Box>
      </Datagrid>
    </List>
  );
};
