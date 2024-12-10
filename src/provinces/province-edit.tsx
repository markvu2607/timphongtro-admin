import { Edit, SimpleForm, TextInput } from "react-admin";

export const ProvinceEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);
