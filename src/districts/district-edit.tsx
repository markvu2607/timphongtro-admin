import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";

export const DistrictEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
      <TextInput source="deletedAt" />
    </SimpleForm>
  </Edit>
);
