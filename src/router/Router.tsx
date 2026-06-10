import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import { MainPage, SearchPage } from '../pages';

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path='/map' element={<MapPage />} />
        <Route path='/battle' element={<BattlePage />} />
        <Route path='/battle/:pokemonId' element={<BattlePage />} />
        <Route path='/bag' element={<BagPage />} />
        <Route path='/pokemon' element={<PokemonPage />} />
        <Route path='/pokedex' element={<DexPage />} />
        <Route path='/secret' element={<SecretPage />} /> */}
        <Route path='/' element={<MainPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Route>
    </Routes>
  );
}
