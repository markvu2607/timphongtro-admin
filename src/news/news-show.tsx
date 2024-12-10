import { RichTextField, Show, SimpleShowLayout, TextField } from "react-admin";

export const NewsShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="thumbnail" />
      <TextField source="shortDescription" />
      <RichTextField source="content" />
      <TextField source="province.id" />
    </SimpleShowLayout>
  </Show>
);
