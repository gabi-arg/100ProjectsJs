const apiKey = '854acc7cd3314a03b22ebb2d8680858f';
const numberOfResults = 15; 
const url = `https://api.spoonacular.com/recipes/complexSearch?&number=${numberOfResults}&apiKey=${apiKey}`;

const cardTemplate = document.querySelector('.card');
const recipesContainer = document.querySelector('#recipes-container');
 function recipe() {
          fetch(url)
              .then(response => response.json())
              .then(data => {
                  const recipes = data.results; 
                  console.log(recipe)
      
                  recipes.forEach(recipe => {
                      const card = document.createElement('div');
                      card.className = 'card';
      
                      const img = document.createElement('img');
                      img.className = 'img-recipes';
                      img.src = recipe.image;
      
                      const title = document.createElement('h2');
                      title.className = 'recipes-title';
                      title.textContent = recipe.title;
      
                      const category = document.createElement('p');
                      category.className = 'recipes-text';
                      category.textContent = recipe.category;
      
                      const button = document.createElement('button');
                      button.className = 'recipes-btn';
                      button.textContent = 'View Recipe';
                      button.onclick = () => window.location.href = recipe.url;
                        console.log(recipe)
                      card.appendChild(img);
                      card.appendChild(title);
                      card.appendChild(category);
                      card.appendChild(button);
      
                      document.querySelector('#recipes-container').appendChild(card);
                  });
              })
              .catch(error => console.error('Error:', error));
      }
      
 

recipe();