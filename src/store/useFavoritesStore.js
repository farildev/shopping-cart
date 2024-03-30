import { create } from "zustand";

export const useFavoriteStore = create((set) => ({
    favorites : [],
    addToFavorites : (product) => set((state) => ({favorites : [...state.favorites, product]})),
    removeFromFavorites : (productId) => set((state) => ({cart: state.favorites.filter(product => product.id !== productId)})),
    clearFavorites : () => set({favorites : []})
}))