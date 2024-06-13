import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { someText } from '../common/texts'

export type CardType = {
  id: string;
  text: string;
  header: string;
  likes: number;
};

const initialState = [
  {
    id: uuidv4(),
    text: someText,
    header: "Header 1",
    likes: 0
  },
  {
    id: uuidv4(),
    text: someText.substring(0, 150),
    header: "Header 2",
    likes: 0
  },
  {
    id: uuidv4(),
    text: someText.substring(0, 150),
    header: "Header 3",
    likes: 0
  },
  {
    id: uuidv4(),
    text: someText.substring(0, 150),
    header: "Header 4",
    likes: 0
  }
];
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    changeCardTextAction: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      return state.map((card) => {
        if (card.id === action.payload.id) {
          return {
            ...card,
            text: action.payload.value
          };
        }
        return card;
      });
    },
    incLikesActions: (state, action) => {
      return state.map((card) => {
        if (card.id === action.payload) {
          return {
            ...card,
            likes: card.likes + 1
          };
        }
        return card;
      });
    },
    addCardAction: (state, action: PayloadAction<CardType>) => {
      return [...state, action.payload];
    },
    deleteCardAction: (
      state,
      action: PayloadAction<{ id: string; renderEl: number }>
    ) => {
      return state.filter((card) => card.id !== action.payload.id);
    }
  }
});

export const {
  changeCardTextAction,
  addCardAction,
  deleteCardAction,
  incLikesActions
} = cardSlice.actions;

export default cardSlice.reducer;
