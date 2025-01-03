import { Box } from "@mui/material";
import {
  Datagrid,
  EditButton,
  List,
  SearchInput,
  TextField,
  DeleteWithConfirmButton,
  WithRecord,
} from "react-admin";

export const ProvinceList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
  >
    <Datagrid>
      <WithRecord
        label="Id"
        render={(record) => <Box sx={{ width: "100px" }}>{record.id}</Box>}
      />
      <TextField source="name" label="Tỉnh thành" />
      <Box
        sx={{
          width: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <EditButton />
        <DeleteWithConfirmButton mutationMode="pessimistic" />
      </Box>
    </Datagrid>
  </List>
);
