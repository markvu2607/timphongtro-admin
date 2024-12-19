import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="email" disabled />
      <TextInput source="name" />
      <TextInput source="phone" />
      <BooleanInput source="isVerified" />
    </SimpleForm>
  </Edit>
);
