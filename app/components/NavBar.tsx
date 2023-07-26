import {
  createStyles,
  Header,
  Container,
  Button,
  rem,
  Image,
} from "@mantine/core";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles(() => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
    height: "100%",
  },
}));

export default function NavBar() {
  const { classes } = useStyles();

  return (
    <Header height={HEADER_HEIGHT} mb={60} className={classes.root}>
      <Container className={classes.header}>
        <div>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3487/3487190.png"
            height={40}
            alt="Logo"
            fit="contain"
            width={80}
          />
        </div>
        <Button variant="subtle">
          <a href="#">Github Repo</a>
        </Button>
      </Container>
    </Header>
  );
}
