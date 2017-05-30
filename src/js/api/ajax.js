const recipes =  [
    {
        "id": 1,
        "name": "Lemon Chicken", 
        "cookingTime": "30 minutes",
        "mainIngredients": ["Chicken","Lemon","Thyme"],
        "ingredients": [
            {"quantity": 4, "name": "Chicken Breasts"},
            {"quantity": "1 tsp", "name": "Thyme"},
            {"quantity": 1, "name": "Lemon"}
        ],
        "image": "http://assets.simplyrecipes.com/wp-content/uploads/2010/03/lemon-chicken-horiz-a-1600.jpg"
    },
    {
        "id": 2,
        "name": "Beef Stroganoff", 
        "cookingTime": "30 minutes",
        "mainIngredients": ["Beef","Mustard","Mushrooms"],
        "ingredients": [
            {"quantity": "500g", "name": "Beef"},
            {"quantity": "1 tbsp", "name": "Mustard"},
            {"quantity": "400g", "name": "Mushrooms"}
        ],
        "image": "http://www.daringgourmet.com/wp-content/uploads/2014/12/Slow-Cooker-Beef-Stroganoff-2-web-edited.jpg"
    },
    {
        "id": 3,
        "name": "Ceasar Salad", 
        "cookingTime": "25 minutes",
        "mainIngredients": ["Lettuce","Croutons","Parmesan"],
        "ingredients": [
            {"quantity": "1 head", "name": "Lettuce"},
            {"quantity": "100g", "name": "Croutons"},
            {"quantity": "a grating", "name": "Parmesan"}
        ],
        "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--327831_11.jpg?itok=8GjuBS4F"
    },
    {
        "id": 4,
        "name": "Chicken Ceasar Salad", 
        "cookingTime": "35 minutes",
        "mainIngredients": ["Lettuce","Chicken","Parmesan"],
        "ingredients": [
            {"quantity": "1 head", "name": "Lettuce"},
            {"quantity": "2", "name": "Chicken Breasts"},
            {"quantity": "100g", "name": "Croutons"},
            {"quantity": "a grating", "name": "Parmesan"}
        ],
        "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--327831_11.jpg?itok=8GjuBS4F"
    }
];



function getRandomTimeout(min, max) {
    return Math.random() * (max - min) + min;
}

export function getData() {
    return new Promise((resolve) => {

        const timeout = getRandomTimeout(50, 350);
        const results = recipes.filter(s => s.name);

        setTimeout(() => resolve(results), timeout);

    });
}
