import { computed, reactive, toRefs } from 'vue';

export const usePagination = () => {
  const state = reactive({
    page: 1,
    pageGroup: 0,
    display: 10,
    pageDisplay: 10,
    totalCount: 893,
    totalPage: computed(() => Math.ceil(state.totalCount / state.pageDisplay)),
    pageList: computed(() => Array.from({ length: state.totalPage }, (_, i) => i + 1)),
    pageGroupList: computed(() => {
      return state.pageList.reduce((acc, page, i) => {
        const index = Math.ceil((i + 1) / state.pageDisplay) - 1;
        acc[index] = [...(acc[index] ?? []), page];
        return acc;
      }, []);
    }),
    pages: computed(() => state.pageGroupList[state.pageGroup]),
    isPrev: computed(() => state.pageGroup),
    isNext: computed(() => state.totalPage / state.pageDisplay > state.pageGroup + 1),
  });

  const setPagingParams = (params) => Object.entries(params).forEach(([key, value]) => (state[key] = value));

  return { pagination: toRefs(state), setPagingParams };
};
