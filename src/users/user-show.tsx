import {
  BooleanField,
  EmailField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="name" label="Người dùng" />
      <TextField source="phone" label="Số điện thoại" />
      <BooleanField source="isVerified" label="Đã xác thực" />
    </SimpleShowLayout>
  </Show>
);
