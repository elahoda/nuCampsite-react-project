import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsites } from "../campsites/campsitesSlice";
import { selectFeaturedPromotions } from "../promotions/promotionsSlice";

const Displaylist = () => {
  const items = [selectFeaturedCampsites(), selectFeaturedPromotions()];
  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col md className="m-1" key={idx}>
            <DisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Displaylist;
