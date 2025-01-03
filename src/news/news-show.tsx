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
      <TextField source="title" label="Tiêu đề" />
      <TextField source="shortDescription" label="Mô tả ngắn" />
      <ImageField source="thumbnail.src" label="Thumbnail" />
      <TextField source="province.name" label="Tỉnh thành" />
      <TextField source="status" label="Trạng thái" />
      <TextField source="createdAt" label="Thời gian tạo" />
      <TextField source="publishedAt" label="Thời gian đăng" />
      <RichTextField source="content" label="Nội dung" />
    </SimpleShowLayout>
  </Show>
);
