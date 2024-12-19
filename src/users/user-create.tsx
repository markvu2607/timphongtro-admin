import { email, minLength, required } from "react-admin";

import { SimpleForm, TextInput } from "react-admin";

import { Create } from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="email" validate={[required(), email()]} />
      <TextInput source="password" validate={[required(), minLength(8)]} />
      <TextInput source="name" validate={[required()]} />
      <TextInput source="phone" validate={[required()]} />
    </SimpleForm>
  </Create>
);
