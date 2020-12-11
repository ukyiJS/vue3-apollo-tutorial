import getAutoCompleteKeyword from '@/gql/autoCompleteKeyword.gql';
import { useQuery, useResult } from '@vue/apollo-composable';
import { toRefs, reactive } from 'vue';

export const useAutoCompleteKeyword = () => {
  const state = reactive({
    keyword: undefined,
  });
  const setKeyword = keyword => (state.keyword = keyword);

  const { result } = useQuery(getAutoCompleteKeyword, state);
  const autoCompleteKeywords = useResult(result);

  return { autoCompleteKeywords, keyword: toRefs(state).keyword, setKeyword };
};
