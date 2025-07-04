# 📚 Contoh Normalisasi Basis Data — Studi Kasus Siswa Sekolah

Dokumen ini menjelaskan proses **normalisasi basis data** dengan fokus pada **perbedaan nyata antara 2NF dan 3NF**, menggunakan studi kasus siswa sekolah yang mengikuti mata pelajaran tertentu.

---

## 🧑‍🏫 Studi Kasus

Setiap siswa memiliki NISN dan mengikuti beberapa mata pelajaran.  
Setiap mata pelajaran diajar oleh seorang guru, dan setiap siswa mendapat nilai dari tiap mata pelajaran tersebut.

---

## 🔴 UNF - Unnormalized Form

Data masih digabung dalam satu tabel dengan banyak nilai di satu kolom:

| Nama Siswa | NISN | Mata Pelajaran  | Nilai | Guru       |
| ---------- | ---- | --------------- | ----- | ---------- |
| Andi       | 001  | Matematika, IPA | 85,90 | Budi, Rina |
| Sari       | 002  | Matematika      | 75    | Budi       |

---

## ✅ 1NF - First Normal Form

Setiap kolom hanya berisi satu nilai (atomik):

| NISN | Nama Siswa | Mata Pelajaran | Nilai | Guru |
| ---- | ---------- | -------------- | ----- | ---- |
| 001  | Andi       | Matematika     | 85    | Budi |
| 001  | Andi       | IPA            | 90    | Rina |
| 002  | Sari       | Matematika     | 75    | Budi |

---

## ✅ 2NF - Second Normal Form

> Sudah 1NF, dan semua kolom non-kunci bergantung pada **seluruh** kunci utama.  
> Tetapi masih terdapat **transitive dependency**.

### Tabel Nilai Siswa (2NF)

| NISN | KodeMapel | Nilai | NamaMapel  | NamaGuru |
| ---- | --------- | ----- | ---------- | -------- |
| 001  | MP01      | 85    | Matematika | Budi     |
| 001  | MP02      | 90    | IPA        | Rina     |
| 002  | MP01      | 75    | Matematika | Budi     |

📌 **Masalah:** `NamaMapel` dan `NamaGuru` tergantung pada `KodeMapel`, **bukan pada (NISN, KodeMapel)**.  
Ini disebut **transitive dependency** → belum 3NF.

---

## ✅ 3NF - Third Normal Form

> Menghilangkan transitive dependency dengan memecah tabel menjadi beberapa entitas.

### Tabel Siswa

| NISN | NamaSiswa |
| ---- | --------- |
| 001  | Andi      |
| 002  | Sari      |

### Tabel Guru

| KodeGuru | NamaGuru |
| -------- | -------- |
| G001     | Budi     |
| G002     | Rina     |

### Tabel Mata Pelajaran

| KodeMapel | NamaMapel  | KodeGuru |
| --------- | ---------- | -------- |
| MP01      | Matematika | G001     |
| MP02      | IPA        | G002     |

### Tabel Nilai

| NISN | KodeMapel | Nilai |
| ---- | --------- | ----- |
| 001  | MP01      | 85    |
| 001  | MP02      | 90    |
| 002  | MP01      | 75    |

---
