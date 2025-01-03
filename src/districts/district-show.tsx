import { Show, SimpleShowLayout, TextField } from "react-admin";

export const DistrictShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" label="Quận huyện" />
      <TextField source="province.name" label="Tỉnh thành" />
    </SimpleShowLayout>
  </Show>
);
