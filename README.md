Repository ini berisikan mengenai 5 masalah sederhana yang penyelesaiannya menggunakan program Javascript dan Typescript

**Bahasa Pemrograman yang digunakan :**
### JavaScript
JavaScript adalah bahasa pemrograman yang paling umum digunakan di pengembangan web. JavaScript memungkinkan pengembang untuk membuat halaman web yang interaktif dan dinamis. Dengan JavaScript, kita dapat membuat program yang berjalan di sisi klien dan server.

### TypeScript
TypeScript adalah superset dari JavaScript yang menambahkan fitur statis typing. Dengan TypeScript, pengembang dapat mendefinisikan tipe data untuk variabel, parameter fungsi, dan nilai pengembalian fungsi, yang membantu mengurangi kesalahan dan meningkatkan pemeliharaan kode. Karena TypeScript adalah superset dari JavaScript, kode JavaScript yang valid dapat dijalankan di TypeScript tanpa masalah. Artinya, TypeScript dapat digunakan untuk mengembangkan aplikasi besar dan juga mendukung JavaScript.




### 1. **Mengonversi Fahrenheit ke Celsius**
```markdown
Program ini akan menerima suhu dalam Fahrenheit dan menggunakan rumus untuk mengonversinya ke Celsius:
```javascript
Celsius = (Fahrenheit - 32) * (5 / 9)
```
Contoh, jika inputnya 85°F, maka outputnya adalah `29,44°C`.

---

### 2. **Mengonversi Centimeter ke Kilometer (atau sebaliknya)**

**Masalah:**
Buat kode untuk mengonversi centimeter ke kilometer atau sebaliknya. Misalnya, mengonversi 100000 cm ke kilometer.

**Input:** Panjang dalam centimeter (misalnya, 100000 cm).

**Output yang Diharapkan:** Panjang yang setara dalam kilometer (misalnya, 100000 cm → 1 km).

**Penjelasan:**
Untuk mengonversi centimeter ke kilometer, bagi nilai input dengan 100.000:
```javascript
Kilometer = Centimeter / 100000
```
Dalam hal ini, 100.000 centimeter sama dengan 1 kilometer.

apabila dibalik, maka
```javascript
Centimeter = Kilometer * 100000
```

---

### 3. **Memeriksa Apakah Sebuah Angka Genap atau Ganjil**

**Masalah:**
Buat fungsi yang menerima sebuah integer `n` sebagai input dan mengembalikan `true` jika `n` genap, dan `false` jika `n` ganjil.

**Input:** Sebuah integer `n` (misalnya, 1000 atau 1001).

**Output yang Diharapkan:**
- Untuk `n = 1000`, output: `isEven: true`
- Untuk `n = 1001`, output: `isEven: false`

**Penjelasan:**
Fungsi ini memeriksa apakah angka tersebut habis dibagi 2 tanpa sisa. Jika ya, maka angka tersebut genap. Jika ada sisa, maka angka tersebut ganjil:
```javascript
isEven = n % 2 === 0;
```
Jika `n` genap, fungsi ini akan mengembalikan `true`; jika ganjil, maka `false`.

---

### 4. **Menghapus Kemunculan Pertama dari String Pencarian**

**Masalah:**
Buat program untuk menghapus kemunculan pertama dari string pencarian dalam sebuah string.

**Input:** 
- String: "Hello world"
- String pencarian: "ell"

**Output yang Diharapkan:** 
- "Ho world"

**Penjelasan:**
Tugas ini adalah mencari kemunculan pertama dari substring yang diberikan (misalnya, `"ell"`) dan menghapusnya. Di JavaScript, kita bisa menggunakan metode `replace()` untuk menghapus kemunculan pertama dari substring:
```javascript
let newString = originalString.replace(searchString, "");
```
Dalam contoh ini, setelah menghapus "ell" dari "Hello world", outputnya akan menjadi "Ho world".

---

### 5. **Memeriksa Apakah Sebuah String Palindrom atau Tidak**

**Masalah:**
Buat kode untuk memeriksa apakah sebuah string merupakan palindrom atau tidak.

**Input:** Sebuah string (misalnya, "madam").

**Output yang Diharapkan:** 
- Untuk "madam", output: `palindrome`
- Untuk "hello", output: `not palindrome`

**Penjelasan:**
Palindrom adalah kata atau urutan yang dibaca sama dari depan dan belakang. Untuk memeriksa apakah sebuah string adalah palindrom:
1. Balikkan string tersebut.
2. Bandingkan string yang dibalik dengan string asli.

Contoh pemeriksaan palindrom di JavaScript:
```javascript
let isPalindrome = (str) => str === str.split('').reverse().join('');
```
Untuk `str = "madam"`, fungsi ini akan mengembalikan `true` karena "madam" sama dibaca dari depan dan belakang.

---

### Ringkasan

Pada pembahasan kali ini, ilmu baru yang saya pelajari adalah : 

- Manipulasi string dan operasi angka dasar di JavaScript.
- Menggunakan rumus matematika untuk konversi satuan.
- Mengimplementasikan logika kondisional dan perulangan.
- Memahami konsep pemrograman umum seperti pemeriksaan angka genap/ganjil dan pembalikan string.
- Memeriksa Apakah Sebuah String Palindrom atau Tidak

