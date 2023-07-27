import {
  Button,
  Grid,
  Center,
  TextInput,
  Text,
  Paper,
  Container,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { MouseEventHandler } from "react";

export function SearchWork(props: {
  returnQ: (arg0: string) => void; //prop function allowing input to be sent back to parent
  handleSubmit: MouseEventHandler<HTMLButtonElement> | undefined; //calling function in parent component to handle API call
}) {
  const [query, setQuery] = useInputState(""); //State tracking query input

  props.returnQ(query); //Returning input to parent component

  return (
    <Container>
      <Grid gutter="md" justify="center">
        <Grid.Col span={12} md={8} lg={6}>
          <Text
            align="center"
            c="blue"
            fz="xl"
            fw={600}
            style={{ marginBottom: "20px" }}
          >
            DOI Search Tool Powered By OpenAlex
          </Text>
          <Paper p="md" shadow="xs">
            <Grid
              gutter="md"
              style={{ marginBottom: "20px", marginTop: "20px" }}
            >
              <Grid.Col span={12}>
                <Center>
                  <TextInput
                    placeholder="Enter your DOI url"
                    value={query}
                    onChange={setQuery}
                  />
                </Center>
              </Grid.Col>
              <Grid.Col span={12}>
                <Center>
                  <Button
                    onClick={props.handleSubmit}
                    disabled={query.length == 0}
                  >
                    Submit
                  </Button>
                </Center>
              </Grid.Col>
            </Grid>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
