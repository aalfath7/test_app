<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4"
  >
    <div
      class="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-sm border border-white/20"
    >
      <div class="flex flex-col items-center mb-8">
        <div class="p-3 mb-4 rounded-full bg-blue-100/50 border border-blue-200/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
            />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-800">Welcome</h1>
        <p class="text-gray-500 text-sm mt-1">Sign in to your account</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              v-model="identifier"
              type="text"
              placeholder="Email or Username"
              class="w-full pl-10 pr-4 py-3 border border-gray-300/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition placeholder-gray-400"
            />
          </div>
        </div>

        <div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="w-full pl-10 pr-4 py-3 border border-gray-300/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition placeholder-gray-400"
            />
          </div>
        </div>

        <button
          type="submit"
          class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-xl transition-all font-semibold shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          Sign In
        </button>
      </form>

      <p
        v-if="error"
        class="mt-4 p-3 text-sm text-center text-red-600 bg-red-50 rounded-lg border border-red-100 flex items-center justify-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const identifier = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const auth = useAuthStore();

const handleLogin = async () => {
  if (!identifier.value || !password.value) {
    error.value = "Email dan password harus diisi";
    return;
  }
  try {
    await auth.login(identifier.value, password.value);
    router.push("/home");
  } catch (err) {
    error.value = "Email atau password salah";
    console.error("Login error:", err);
  }
};
</script>
