import { Show, SimpleShowLayout, TextField } from "react-admin";

export const ReportShow = () => (
  <Show actions={false}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="reason" />
      <TextField source="description" component="pre" />
      <TextField source="status" />
      <TextField source="name" />
      <TextField source="phone" />
      <TextField source="postId" />
    </SimpleShowLayout>
  </Show>
);
