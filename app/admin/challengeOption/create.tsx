import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" label="Challenge ID" validate={[required()]} />
        <TextInput source="text" label="text" validate={[required()]} />
        <BooleanInput source="correct" label="Correct Option" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image URL" />
        <TextInput source="audioSrc" label="Audio URL" />
      </SimpleForm>
    </Create>
  );
};
