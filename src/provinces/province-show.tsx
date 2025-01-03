import { Show, SimpleShowLayout, TextField } from "react-admin";

export const ProvinceShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" label="Tỉnh thành" />
    </SimpleShowLayout>
  </Show>
);
