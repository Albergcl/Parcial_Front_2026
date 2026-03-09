"use client";

import { getCocktailById } from "@/lib/api/cocktail";
import type { Cocktail } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CocktailDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    if (id) {
      getCocktailById(Number(id)).then((res) => {
        setCocktail(res);
      });
    }
  }, [id]);

  if (!cocktail) return <p>Cargando...</p>;

  const ingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
    cocktail.strIngredient6,
    cocktail.strIngredient7,
    cocktail.strIngredient8,
  ].filter(Boolean);

  return (
    <div className="detailContainer">
      <button className="backButton" onClick={() => router.back()}> Volver </button>

      <div className="detailCard">
        <img src={cocktail.strDrinkThumb} />

        <div className="detailInfo">
          <h1>{cocktail.strDrink}</h1>
          <p><strong>Category:</strong> {cocktail.strCategory}</p>
          <p><strong>Alcoholic:</strong> {cocktail.strAlcoholic}</p>
          <p><strong>Glass:</strong> {cocktail.strGlass}</p>
          <p><strong>Intructions:</strong> {cocktail.strInstructions}</p>
          <p><strong>Ingredients:</strong> </p>
          {ingredients.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}

        </div>
      </div>
    </div>
  );
};

export default CocktailDetail;