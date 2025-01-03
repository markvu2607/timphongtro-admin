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
        <TextField source="reason" label="Lý do" />
        <TextField source="description" label="Mô tả chi tiết" />
        <TextField source="status" label="Trạng thái" />
        <TextField source="name" label="Người báo cáo" />
        <TextField source="phone" label="Số điện thoại" />
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
