const app = require("express")();
const fetch = require("node-fetch");
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => res.status(200).send("Hello world! API is online."));

app.get("/searchPokemon/:pokemonName", async (req, res) => {
  try {
    const { pokemonName } = req.params;
    const apiRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const resJson = await apiRes.json();
    const { name, types, moves, sprites } = resJson;

    const neededData = {
      name,
      types,
      moves,
      image: sprites.other["official-artwork"].front_default,
    };
    res.send(neededData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log("App available on port 3000!")
);
