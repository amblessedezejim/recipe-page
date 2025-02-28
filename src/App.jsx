import heroImage from "./assets/images/image-omelette.jpeg";
function App() {
  return (
    <div className="bg-rose-50 w-screen min-h-screen sm:py-10">
      <div className="container mx-auto sm:w-2xl sm:rounded-xl  bg-white relative">
        <div className="sm:pt-8 sm:pr-8 sm:pl-8">
          <img
            src={heroImage}
            alt="Image of an omelette"
            className="sm:rounded-2xl "
          />
        </div>
        <div className="sm:p-8 p-4">
          <h1 className="text-4xl">Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="callout">
            <h2 className="text-2xl font-semibold">Preparation time</h2>
            <ul className="list-disc">
              <li>
                <span>Total</span>: Approximately 10 minutes
              </li>
              <li>
                <span>Preparation</span>: 5 minutes
              </li>
              <li>
                <span>Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>
          <h2 className="">Ingredients</h2>
          <ul className="list-disc">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste </li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <hr className="border-stone-150 my-8" />
          <h2>Instructions</h2>
          <ol className="list-decimal">
            <li>
              <span>Beat the eggs</span>: In a bowl, beat the eggs with a pinch
              of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <span>Heat the pan</span>: Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <span>Cook the omelette</span>: Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <span>Add fillings (optional)</span>: When the eggs begin to set
              at the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li>
              <span>Fold and serve</span>: As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <span>Enjoy:</span> Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
          <hr className="border-stone-150 my-8" />
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="w-full border-spacing-0 border-separate">
            <tr>
              <td>Calories</td> <td>277kcal </td>
            </tr>
            <tr>
              <td>Carbs</td> <td>0g</td>
            </tr>
            <tr>
              <td>Protein </td>
              <td>20g </td>
            </tr>
            <tr>
              <td>Fat </td>
              <td>22g</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
