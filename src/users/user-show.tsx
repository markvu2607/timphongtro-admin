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
      <TextField source="name" />
      <TextField source="phone" />
      <BooleanField source="isVerified" />
      <TextField source="avatar" />
    </SimpleShowLayout>
  </Show>
);
