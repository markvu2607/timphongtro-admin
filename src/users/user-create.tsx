import { email, minLength, required } from "react-admin";

import { SimpleForm, TextInput } from "react-admin";

import { Create } from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="email" validate={[required(), email()]} />
      <TextInput
        source="password"
        label="Mật khẩu"
        validate={[required(), minLength(8)]}
      />
      <TextInput source="name" label="Tên người dùng" validate={[required()]} />
      <TextInput source="phone" label="Số điện thoại" validate={[required()]} />
    </SimpleForm>
  </Create>
);
