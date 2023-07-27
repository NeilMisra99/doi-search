"use client";

import { Paper, Grid, Container, Text } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { SearchWork } from "./components/SearchWork";
import DisplayParagraph from "./components/DisplayParagraph";
import NavBar from "./components/NavBar";

export default function Home() {
  const [work, setWork] = useInputState({
    paragraph: "",
    title: "",
    authors: [""],
  });
  let query: string = "";

  //Submit function to search through OpenAlex API for respective Work
  async function handleSubmit() {
    const res = await fetch(`https://api.openalex.org/works/${query}`);
    const obj = await res.json();

    //Working with the Work object i.e. "obj", to de-compress and generate string
    const arr: (string | undefined)[] = [];
    const authorsArray: string[] = [];

    //Decompressing
    for (let word in obj.abstract_inverted_index) {
      obj.abstract_inverted_index[word].forEach((index: number) => {
        arr[index] = word;
      });
    }
    //Finding author names
    for (let authorship in obj.authorships) {
      authorsArray.push(obj.authorships[authorship].author.display_name);
    }

    //Joining the decompressed values together
    let sentence = arr.join(" ");

    setWork({ paragraph: sentence, title: obj.title, authors: authorsArray });
  }

  //Primarily used to collect user inputted URL from child component - SearchWork
  function returnQuery(childData: string) {
    query = childData;
  }

  return (
    <div>
      <NavBar />
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
              <SearchWork handleSubmit={handleSubmit} returnQ={returnQuery} />
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
      {work.paragraph.length > 0 && (
        <Container fluid style={{ marginTop: "20px" }}>
          <Grid gutter="md" justify="center">
            <Grid.Col span={12} md={8} lg={6}>
              <Paper p="md" shadow="xs">
                <DisplayParagraph
                  finalParagraph={work.paragraph}
                  finalTitle={work.title}
                  finalAuthors={work.authors}
                />
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      )}
    </div>
  );
}
