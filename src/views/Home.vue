<template>
  <div class="flex-container">
    <div class="flex">
      <img alt="Vue logo" src="~img/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <div class="flex">
      <input type="text" @input="onKeywordInput($event.target.value)" @keyup.enter="onSearchEnter(keyword)" />
    </div>
    <div v-for="keyword in autoCompleteKeywords" :key="keyword" class="flex pokemon-autoComplete">
      <span @click.stop="onKeywordClick(keyword)">{{ keyword }}</span>
    </div>
    <br />
    <div v-if="loading" class="flex">
      <h1>Loading...</h1>
    </div>
    <template v-else v-for="pokemon in pokemons" :key="pokemon.no">
      <div class="flex">
        <img :src="pokemon.image" :alt="pokemon.name.eng" class="pokemon-img" />
      </div>
      <div class="flex align-center">
        <span>번호: {{ pokemon.no }}, </span>
        <span>이름: {{ pokemon.name.kor }}, </span>
        <span>타입: {{ pokemon.types }}</span>
      </div>
    </template>
    <br />
    <div class="flex">
      <button v-show="isPrev" @click="onPrevNextClick(pageGroup - 1)" class="paging-button">&lt;</button>
      <button
        v-for="page in pages"
        :key="page"
        @click="onPageClick(page)"
        class="paging-button"
        :class="activePage(page)"
      >
        {{ page }}
      </button>
      <button v-show="isNext" @click="onPrevNextClick(pageGroup + 1)" class="paging-button">&gt;</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { useAutoCompleteKeywords, usePokemons } from '@/hooks';
import { computed } from 'vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const { pokemons, params, loading, setParams } = usePokemons();
    const { autoCompleteKeywords, keyword, setKeyword } = useAutoCompleteKeywords();

    const activePage = computed(() => page => params.page.value === page && 'active');
    const onPrevNextClick = pageGroup => setParams({ page: pageGroup * params.pageDisplay.value + 1, pageGroup });
    const onPageClick = page => setParams({ page });
    const onKeywordInput = keyword => setKeyword(keyword);
    const onSearchEnter = keyword => {
      setParams({ page: 1, name: keyword });
      onKeywordInput();
    };
    const onKeywordClick = keyword => setParams({ page: 1, name: keyword });

    return {
      ...params,
      loading,
      keyword,
      onPageClick,
      onPrevNextClick,
      onSearchEnter,
      onKeywordInput,
      onKeywordClick,
      activePage,
      pokemons,
      autoCompleteKeywords,
    };
  },
};
</script>

<style></style>
