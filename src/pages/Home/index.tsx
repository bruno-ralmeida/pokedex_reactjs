import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container, Card } from './styles';
import api from '../../services/api';

interface Pokemon {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState([] as Pokemon[]);
  const [initial, setInitial] = useState<number>(1);
  const [final, setFinal] = useState<number>(10);

  const observer = useRef<any>(null);

  const lastPokeElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setInitial((initial) => initial + 10);
        setFinal((final) => final + 10);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    async function handleSearchPokemon() {
      for (let index = initial; index <= final; index++) {
        const response = await api.get(`/${index}`);
        const { id, name, types, stats, sprites } = response.data;
        const pokemon: Pokemon = {
          id,
          name,
          types,
          stats,
          sprites,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      }
    }

    handleSearchPokemon();
  }, [initial, final]);

  return (
    <>
      <Container>
        <ul>
          {pokemons.map((pokemon: Pokemon) => (
            <li key={pokemon.id}>
              <Card ref={pokemons.length === final ? lastPokeElementRef : null}>
                <section>
                  <span className={pokemon.types[0].type.name}></span>
                  {pokemon.types[1]?.type.name && (
                    <span
                      className={pokemon.types[1].type.name + ' secundary'}
                    ></span>
                  )}
                  <img
                    src={
                      pokemon.sprites.other.dream_world.front_default !== null
                        ? pokemon.sprites.other.dream_world.front_default
                        : pokemon.sprites.other['official-artwork']
                            .front_default
                    }
                    alt={pokemon.name}
                  />
                  <h3>
                    #{pokemon.id.toString().padStart(3, '000')} - {pokemon.name}
                  </h3>
                </section>

                <aside>
                  {pokemon.types.map((typeInfo) => (
                    <div className={typeInfo.type.name}>
                      <img
                        src={`/assets/icons/${typeInfo.type.name}.svg`}
                        alt={typeInfo.type.name}
                      />
                    </div>
                  ))}
                </aside>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Home;
