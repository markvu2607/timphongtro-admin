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
      <TextField source="district.name" />
      <TextField source="province.name" />
      <TextField source="user.id" />
      <ArrayField source="postImages">
        <Datagrid>
          <TextField source="id" />
          <UrlField source="url" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
