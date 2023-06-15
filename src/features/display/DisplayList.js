import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsites } from "../campsites/campsitesSlice";
import { selectFeaturedPromotions } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";

const Displaylist = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsites(state),
    selectFeaturedPromotions(state),
    selectFeaturedPartner(state),
  ]);

  console.log("display items:", items);

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
