import { useEffect, useState } from "react";

const ListCategories = () => {
    const [categories, setCategories] = useState([]);


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

    return (

        <div>
            <h4>Toutes les categories</h4>
            {categories.map((category) => {
                return (
                    // On rentre des differents liens qui vient de l'api
                    <div key={category.idCategory}>
                        <h3>{category.strCategory}</h3>
                        <img src={category.strCategoryThumb} alt={category.strCategory} />
                        <p>{category.strCategoryDescription}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ListCategories;