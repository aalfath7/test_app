<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="handleLogin" class="mb-6">
      <input v-model="username" placeholder="Username" type="text" class="border p-2 mr-2" />
      <input v-model="password" placeholder="Password" type="password" class="border p-2 mr-2" />
      <button type="submit" class="bg-blue-500 text-white p-2">Login</button>
    </form>

    <div v-if="articles.length">
      <h2 class="text-xl font-semibold mb-2">Articles</h2>
      <ul>
        <li v-for="a in articles" :key="a.id" class="border-b py-2">
          <strong>{{ a.title }}</strong
          ><br />
          <span>{{ a.description }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { login, getArticles } from "./api.js";

const username = ref("");
const password = ref("");
const articles = ref([]);

const handleLogin = async () => {
  try {
    const data = await login(username.value, password.value);
    const jwt = data.jwt;
    localStorage.setItem("token", jwt);

    const articleRes = await getArticles(jwt);
    articles.value = articleRes.data;
  } catch (err) {
    alert("Login failed: " + err.message);
  }
};
</script>
