import {
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
  Edit,
} from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" label="Lesson ID" validate={[required()]} />
        <TextInput source="text" label="text" validate={[required()]} />
        <BooleanInput source="correct" label="Correct Option" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image URL" />
        <TextInput source="audioSrc" label="Audio URL" />
      </SimpleForm>
    </Edit>
  );
};
