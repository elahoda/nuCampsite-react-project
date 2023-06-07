import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsites } from "../campsites/campsitesSlice";
import { selectFeaturedPromotions } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";

const Displaylist = () => {
  const items = [
    selectFeaturedCampsites(),
    selectFeaturedPromotions(),
    selectFeaturedPartner(),
  ];
  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default Displaylist;
