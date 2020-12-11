import getPokemonsQuery from '@/gql/pokemons.gql';
import { useQuery, useResult } from '@vue/apollo-composable';
import { reactive, toRefs } from 'vue';
import { usePagination } from './usePagination';

export const usePokemons = () => {
  const { pagination, setPagingParams } = usePagination();

  const state = reactive({ type: undefined, name: undefined });
  const setParams = params => {
    setPagingParams(params);
    if (params.type || params.name) Object.entries(params).forEach(([key, value]) => (state[key] = value));
  };

  const { result, loading } = useQuery(getPokemonsQuery, { page: pagination.page, ...toRefs(state) });
  const pokemons = useResult(result, null, ({ getPokemons: { count, pokemon } }) => {
    setPagingParams({ totalCount: count });
    return pokemon;
  });

  return { pokemons, params: { ...pagination, ...toRefs(state) }, loading, setParams };
};
