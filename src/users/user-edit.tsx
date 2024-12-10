import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="email" />
      <TextInput source="name" />
      <TextInput source="phone" />
      <BooleanInput source="isVerified" />
      <TextInput source="avatar" />
    </SimpleForm>
  </Edit>
);
