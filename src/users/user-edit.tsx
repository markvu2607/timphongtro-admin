import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="email" disabled />
      <TextInput source="name" label="Người dùng" />
      <TextInput source="phone" label="Số điện thoại" />
      <BooleanInput source="isVerified" label="Đã xác thực" />
    </SimpleForm>
  </Edit>
);
