import { Text } from "@mantine/core";

//Passing in final abstract paragraph string from parent component
export function DisplayParagraph(props: { finalParagraph: string }) {
  return (
    <div>
      <Text
        ta="left"
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 45 }}
        fz="xl"
        fw={500}
        style={{ marginBottom: "10px" }}
      >
        Your Abstract:{" "}
      </Text>
      <Text fz="xl" fw={200}>
        {props.finalParagraph}
      </Text>
    </div>
  );
}