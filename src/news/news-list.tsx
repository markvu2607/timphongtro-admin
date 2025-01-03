import { Box } from "@mui/material";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
  ImageField,
  SearchInput,
  WithRecord,
} from "react-admin";
import { PublishButton, UnpublishButton, ViewButton } from "./buttons";

export const NewsList = () => (
  <List
    filters={[<SearchInput key="q" source="q" alwaysOn />]}
    exporter={false}
  >
    <Datagrid>
      <WithRecord
        label="Id"
        render={(record) => <Box sx={{ width: "100px" }}>{record.id}</Box>}
      />
      <TextField source="title" label="Tiêu đề" />
      <ImageField source="thumbnail.src" label="Thumbnail" />
      <TextField source="province.name" label="Tỉnh thành" />
      <TextField source="status" label="Trạng thái" />
      <WithRecord
        label="Thời gian tạo"
        render={(record) =>
          new Date(record.createdAt).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          })
        }
      />
      <WithRecord
        label="Thời gian đăng"
        render={(record) =>
          record.publishedAt
            ? new Date(record.publishedAt).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })
            : ""
        }
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <ViewButton />
        <PublishButton />
        <UnpublishButton />
        <EditButton />
        <DeleteButton />
      </Box>
    </Datagrid>
  </List>
);
