import {
  ArrayField,
  Datagrid,
  DateField,
  ImageField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
} from "react-admin";

export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" label="Tiêu đề" />
      <TextField source="description" component="pre" label="Mô tả" />
      <DateField source="createdAt" label="Thời gian tạo" />
      <TextField source="address" label="Địa chỉ" />
      <NumberField source="longitude" label="Kinh độ" />
      <NumberField source="latitude" label="Vĩ độ" />
      <TextField source="province.name" label="Tỉnh thành" />
      <TextField source="district.name" label="Quận huyện" />
      <TextField source="user.id" label="Người đăng" />
      <ArrayField source="postImages" label="Ảnh">
        <Datagrid>
          <TextField source="id" />
          <UrlField source="url" />
          <ImageField source="url" label="Ảnh" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
