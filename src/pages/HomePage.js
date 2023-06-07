import { Container } from "reactstrap";
import Displaylist from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";

const HomePage = () => {
  return (
    <Container>
      <SubHeader current="Home" />
      <Displaylist />
    </Container>
  );
};

export default HomePage;
