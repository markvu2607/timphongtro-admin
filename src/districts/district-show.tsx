import { Show, SimpleShowLayout, TextField } from "react-admin";

export const DistrictShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="province.name" />
    </SimpleShowLayout>
  </Show>
);
