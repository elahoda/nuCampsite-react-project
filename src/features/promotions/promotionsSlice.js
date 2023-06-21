import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

const initialState = {
  promotionsArray: PROMOTIONS,
};

const promotionsSlice = createSlice({
  name: "promotions",
  initialState,
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotions = (state) => {
  return state.promotions.promotionsArray.find(
    (promotion) => promotion.featured
  );
};
