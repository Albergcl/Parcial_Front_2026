import { api } from "./axios";
import type { Cocktail } from "../../types";

export const searchCocktailByName = async (name: string): Promise<Cocktail[]> => {
  const response = await api.get<{ drinks: Cocktail[] }>(`/search.php?s=${name || "margarita"}`);

  return response.data.drinks;
};

export const getCocktailById = async (id: number): Promise<Cocktail | null> => {
  const response = await api.get<{ drinks: Cocktail[] }>(`/lookup.php?i=${id}`);

  return response.data.drinks[0] || null;
};

export const getRandomCocktail = async (): Promise<Cocktail> => {
  const response = await api.get<{ drinks: Cocktail[] }>(`/random.php`);

  return response.data.drinks[0];
};