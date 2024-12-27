import { Box } from "@mui/material";
import { useController } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type RichTextInputProps = {
  source: string;
  label: string;
};

export const RichTextInput = ({ source, label }: RichTextInputProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name: source });

  return (
    <Box sx={{ marginBottom: "1rem", width: "100%" }}>
      <label>{label}</label>
      <ReactQuill
        value={field.value || ""}
        onChange={(value) => field.onChange(value)}
        modules={{
          toolbar: {
            container: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["link", "image"],
              ["clean"],
            ],
          },
          clipboard: {
            matchVisual: false,
          },
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
        ]}
      />
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </Box>
  );
};
