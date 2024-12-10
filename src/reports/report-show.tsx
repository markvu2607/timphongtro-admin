import { Show, SimpleShowLayout, TextField } from "react-admin";

export const ReportShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="reason" />
      <TextField source="description" />
      <TextField source="post.id" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);
