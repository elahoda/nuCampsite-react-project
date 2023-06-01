import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

export const selectFeaturedPromotions = () => {
  return PROMOTIONS.find((promotion) => promotion.featured);
};
