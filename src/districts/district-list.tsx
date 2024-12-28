import { Box } from "@mui/material";
import {
  Datagrid,
  DeleteWithConfirmButton,
  EditButton,
  List,
  SearchInput,
  TextField,
  WithRecord,
} from "react-admin";

export const DistrictList = () => (
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
      <TextField source="name" />
      <TextField source="province.name" />
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
