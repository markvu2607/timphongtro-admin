import {
  ImageField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const NewsShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="shortDescription" />
      <ImageField source="thumbnail.src" />
      <TextField source="province.name" />
      <TextField source="status" />
      <TextField source="createdAt" />
      <TextField source="publishedAt" />
      <RichTextField source="content" />
    </SimpleShowLayout>
  </Show>
);
