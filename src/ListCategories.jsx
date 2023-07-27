import { useEffect, useState } from "react";

const ListCategories = () => {
    const [categories, setCategories] = useState([]);
    const [mealsByCategory, setMealsByCategory] = useState([]);

    // Un fetch tout simplement
    const fetchCategories = async () => {
        const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const categoriesJs = await categoriesResponse.json();

        setCategories(categoriesJs.categories);
    };
    // Apres l'affichage, on choisit à quel moment on affiche
    useEffect(() => {
        fetchCategories();
    }, []);


    const handleSubmit = async (title) => {
        const responseMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`);
        const mealsByCategory = await responseMeals.json();
        setMealsByCategory(mealsByCategory.meals);
    }


    return (

        <div>
            <h2>Categories</h2>
            <div>
                <p>Recettes :</p>
                {mealsByCategory.map((meal) => {
                    return (
                        <div key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                        </div>
                    );
                })}
            </div>
            {categories.map((category) => {
                return (
                    // On rentre des differents liens qui vient de l'api
                    <div key={category.idCategory}>
                        <h3>{category.strCategory}</h3>
                        <img src={category.strCategoryThumb} alt={category.strCategory} />
                        <p>{category.strCategoryDescription}</p>
                        <button onClick={() => handleSubmit(category.strCategory)}>Affichez</button>
                    </div>
                );
            })}
        </div>
    );
};

export default ListCategories;