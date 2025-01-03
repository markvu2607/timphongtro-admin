import {
  Edit,
  ImageField,
  ImageInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { RichTextInput } from "./richtext-input";

export const NewsEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" label="ID" fullWidth disabled />

      <TextInput
        source="title"
        label="Tiêu đề"
        fullWidth
        validate={[required()]}
      />

      <TextInput
        source="shortDescription"
        multiline={true}
        label="Mô tả ngắn"
        fullWidth
        validate={[required()]}
      />

      <ReferenceInput source="province.id" reference="provinces">
        <SelectInput optionText="name" label="Tỉnh thành" />
      </ReferenceInput>

      <ImageInput
        source="thumbnail"
        label="Thumbnail"
        maxSize={5000000}
        validate={[required()]}
      >
        <ImageField source="src" title="title" />
      </ImageInput>

      <TextInput source="status" label="Trạng thái" fullWidth disabled />
      <TextInput source="createdAt" label="Thời gian tạo" fullWidth disabled />
      <TextInput
        source="publishedAt"
        label="Thời gian đăng"
        fullWidth
        disabled
      />

      <RichTextInput source="content" label="Nội dung" />
    </SimpleForm>
  </Edit>
);
