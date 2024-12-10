import {
  ArrayInput,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const PostEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <DateInput source="createdAt" />
      <TextInput source="thumbnail" />
      <TextInput source="address" />
      <NumberInput source="longitude" />
      <NumberInput source="latitude" />
      <TextInput source="district.id" />
      <TextInput source="province.id" />
      <TextInput source="user.id" />
      <ArrayInput source="postImages">
        <SimpleFormIterator>
          <TextInput source="id" />
          <TextInput source="url" />
          <DateInput source="createdAt" />
          <DateInput source="updatedAt" />
          <TextInput source="deletedAt" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
