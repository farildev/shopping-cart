import { create } from "zustand";

export const useFavoriteStore = create((set) => ({
  favorites: [],
//   toggleFavorite: (product) => set((state) => ({
//     favorites: state.favorites.includes(product)
//       ? state.favorites.filter((favProduct) => favProduct.id !== product.id)
//       : [...state.favorites, product]
//   })),
//     isFavorite: (productId) => set((state) => state.favorites.some((product) => product.id === productId)),
    removeFromFavorites : (productId) => set((state) => ({cart: state.favorites.filter(product => product.id !== productId)})),
    clearFavorites : () => set({favorites : []})
}));


