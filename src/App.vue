<script setup>
import { ref } from 'vue';
import { getTest, login } from '@/api/sys';
const normal = ref(false);
const loading = ref(false);

const testRestAPI = async () => {
  try {
    loading.value = true;
    const res = await getTest();
    loading.value = false;
    normal.value = true;
  } catch (error) {
    console.log('error in app.vue, ', error);
    loading.value = false;
    normal.value = false;
  }
};

// login
const handleLoginClick = async () => {
  const formInfo = {
    username: 'jld',
    password: '123456'
  };
  const res = await login(formInfo);
  console.log(res);
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <button @click="handleLoginClick">登录</button>
  </div>
  <!-- <div v-if="!loading && !normal">
    something went wrong at server side.please try again later.
  </div> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
