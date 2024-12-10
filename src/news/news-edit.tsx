import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";

export const NewsEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="thumbnail" />
      <TextInput source="shortDescription" />
      <TextInput source="content" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
      <TextInput source="deletedAt" />
    </SimpleForm>
  </Edit>
);
