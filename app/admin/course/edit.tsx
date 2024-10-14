import {
  Edit,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" label="Course ID" validate={[required()]} />
        <TextInput source="title" label="title" validate={[required()]} />
        <TextInput source="imageSrc" label="Image" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
