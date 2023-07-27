import { Text, Container, Grid, Paper } from "@mantine/core";

//Passing in final title, authors, and paragraph from parent component
export default function DisplayParagraph(props: {
  finalParagraph: string;
  finalTitle: string;
  finalAuthors: string[];
}) {
  return (
    <Container fluid style={{ marginTop: "20px" }}>
      <Grid gutter="md" justify="center">
        <Grid.Col span={12} md={8} lg={6}>
          <Paper p="md" shadow="xs" mb={30}>
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
              <br></br>
              <Text fz="xl" fw={200}>
                {props.finalParagraph}
              </Text>
            </div>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
