import { Text } from "@mantine/core";

//Passing in final title, authors, and paragraph from parent component
export default function DisplayParagraph(props: {
  finalParagraph: string;
  finalTitle: string;
  finalAuthors: string[];
}) {
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
      <Text fz="xl">{props.finalTitle}</Text>
      <Text> by {props.finalAuthors.join(", ")}</Text>
      <Text fz="xl" fw={200}>
        {props.finalParagraph}
      </Text>
    </div>
  );
}
