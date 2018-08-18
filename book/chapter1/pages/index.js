import Head from "next/head";
import Button from "@material-ui/core/Button";
import withLayout from "../lib/withLayout";

const Index = () => (
  <div style={{ padding: "10px 45px" }}>
    <Head>
      <title>First Page</title>
      <meta name="description" content="This is description of Index page" />
    </Head>
    <p>How you like me now?</p>
    <Button variant="raised">Click me</Button>
  </div>
);

export default withLayout(Index);
