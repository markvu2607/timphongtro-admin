import {
  ArrayField,
  Datagrid,
  DateField,
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
      <TextField source="title" />
      <TextField source="description" />
      <DateField source="createdAt" />
      <TextField source="thumbnail" />
      <TextField source="address" />
      <NumberField source="longitude" />
      <NumberField source="latitude" />
      <TextField source="district.id" />
      <TextField source="province.id" />
      <TextField source="user.id" />
      <ArrayField source="postImages">
        <Datagrid>
          <TextField source="id" />
          <UrlField source="url" />
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
          <TextField source="deletedAt" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
