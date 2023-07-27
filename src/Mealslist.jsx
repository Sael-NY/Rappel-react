import { useEffect, useState } from "react";

const MealsList = () => {
    const [meals, setMeals] = useState([]);

    const fetchMeal = async () => {
        const responseApi = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const responseJson = await responseApi.json();
        setMeals(responseJson.meals);
    }
    useEffect(() => {
        fetchMeal();
    }, []);


    return (
        <div>
            <h1 className="h1meal">Meals List</h1>

            <div className="list-meal">
                {meals.map((meal) => (
                    <div key={meal.idMeal}>
                        <h2>{meal.strMeal}</h2>
                        <button>Cliquez ce produit</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MealsList