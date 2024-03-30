import { create } from "zustand";

const useFavoriteStore = create((set) => ({
    favorites : [],
    addToFavorites : (favorite) => set((state) => ({favorites : [...state.favorites, favorite]}))
}))