import Pokemon from "./components/pokemon";
import { useRequest } from "./api/useRequest";

const App = () => {
  const { data, error } = useRequest("/pokemon");

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="Card--pokemon">
        {data.results.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
