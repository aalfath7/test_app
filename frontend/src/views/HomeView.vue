<template>
  <div class="max-w-6xl mx-auto p-6 space-y-8">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p class="text-gray-500">Overview of school data and statistics</p>
      </div>
      <button
        @click="logout"
        class="flex items-center gap-2 text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clip-rule="evenodd"
          />
        </svg>
        Logout
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 font-medium">Total Students</p>
            <h3 class="text-2xl font-bold text-gray-800">{{ students.length }}</h3>
          </div>
          <div class="p-3 rounded-full bg-blue-100 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 font-medium">Total Teachers</p>
            <h3 class="text-2xl font-bold text-gray-800">{{ teachers.length }}</h3>
          </div>
          <div class="p-3 rounded-full bg-green-100 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 font-medium">Total Subjects</p>
            <h3 class="text-2xl font-bold text-gray-800">{{ lessons.length }}</h3>
          </div>
          <div class="p-3 rounded-full bg-purple-100 text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-xl shadow-md">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-gray-800">Teachers vs Students</h2>
          <div class="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
          </div>
        </div>
        <div class="h-64">
          <Pie
            v-if="pieChartData"
            :data="pieChartData"
            :options="{ responsive: true, maintainAspectRatio: false }"
          />
        </div>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-gray-800">Lessons per Student</h2>
          <div class="text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </div>
        <div class="h-64">
          <Bar v-if="barChartData" :data="barChartData" :options="barChartOptions" />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl shadow-md">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg bg-blue-100 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"
              />
            </svg>
          </div>
          <h3 class="font-bold text-lg text-gray-800">Students List</h3>
        </div>
        <ul class="space-y-2">
          <li
            v-for="(s, i) in students"
            :key="'s-' + i"
            class="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span
              class="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
              >{{ i + 1 }}</span
            >
            <span class="capitalize text-gray-700">{{ s }}</span>
          </li>
        </ul>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg bg-green-100 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="font-bold text-lg text-gray-800">Teachers List</h3>
        </div>
        <ul class="space-y-2">
          <li
            v-for="(g, i) in teachers"
            :key="'g-' + i"
            class="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span
              class="w-6 h-6 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-xs font-medium"
              >{{ i + 1 }}</span
            >
            <span class="capitalize text-gray-700">{{ g }}</span>
          </li>
        </ul>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-md">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg bg-purple-100 text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
              />
            </svg>
          </div>
          <h3 class="font-bold text-lg text-gray-800">Subjects List</h3>
        </div>
        <ul class="space-y-2">
          <li
            v-for="(l, i) in lessons"
            :key="'l-' + i"
            class="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span
              class="w-6 h-6 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-xs font-medium"
              >{{ i + 1 }}</span
            >
            <span class="capitalize text-gray-700">{{ l }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Pie, Bar } from "vue-chartjs";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const pieChartData = ref(null);

const barChartData = ref(null);
const barChartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: "Jumlah Pelajaran yang Diikuti" },
  },
};

const students = ref([]);
const teachers = ref([]);
const lessons = ref([]);

const fetchData = async () => {
  const token = localStorage.getItem("token");

  try {
    // Student Lesson (Line Chart)
    const studentLessonRes = await axios.get(
      "http://localhost:1337/api/student-lessons?populate=student",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const studentLessonData = studentLessonRes.data.data;
    const studentMap = {};
    studentLessonData.forEach((item) => {
      const studentName = item.student.student_name || "Unknown";
      studentMap[studentName] = (studentMap[studentName] || 0) + 1;
    });

    barChartData.value = {
      labels: Object.keys(studentMap),
      datasets: [
        {
          label: "Pelajaran Diikuti",
          data: Object.values(studentMap),
          backgroundColor: "#6366F1",
        },
      ],
    };

    // Count Students & Teachers (Pie Chart)
    const studentRes = await axios.get("http://localhost:1337/api/students", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const teacherRes = await axios.get("http://localhost:1337/api/teachers", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const studentCount = studentRes.data.meta.pagination.total;
    const teacherCount = teacherRes.data.meta.pagination.total;

    pieChartData.value = {
      labels: ["Siswa", "Guru"],
      datasets: [
        {
          data: [studentCount, teacherCount],
          backgroundColor: ["#34D399", "#60A5FA"],
        },
      ],
    };

    // Fill names
    students.value = studentRes.data.data.map((s) => s.student_name);
    teachers.value = teacherRes.data.data.map((t) => t.teacher_name);

    // Lessons
    const lessonRes = await axios.get("http://localhost:1337/api/lessons", {
      headers: { Authorization: `Bearer ${token}` },
    });
    lessons.value = lessonRes.data.data.map((l) => l.lesson_name);
  } catch (err) {
    console.error("Error fetching dashboard data:", err);
  }
};

const auth = useAuthStore();
const router = useRouter();

function logout() {
  router.push("/login");
  auth.logout();
}

onMounted(fetchData);
</script>
