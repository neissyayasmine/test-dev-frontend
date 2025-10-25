// ===============================
// Program Data Hewan Peliharaan
// ===============================

// Data hewan peliharaan
const hewan = [
    { jenis: "anjing", ras: "Golden Retriever", nama: "Milo", karakter: "ramah" },
    { jenis: "kucing", ras: "Persia", nama: "Luna", karakter: "manja" },
    { jenis: "ikan", ras: "Cupang", nama: "Otto", karakter: "aktif" },
    { jenis: "anjing", ras: "Poodle", nama: "Max", karakter: "ceria" },
    { jenis: "ikan", ras: "Koi", nama: "Rino", karakter: "tenang" },
    { jenis: "badak", ras: "Sumatera", nama: "Bada", karakter: "langka" },
    { jenis: "kucing", ras: "Anggora", nama: "Lulu", karakter: "lucu" },
    { jenis: "anjing", ras: "Bulldog", nama: "Rex", karakter: "setia" }
];

// 1️⃣ Tampilkan data hewan
console.log("Data Hewan:", hewan);

// 2️⃣ Urutkan nama kesayangan (ascending dan descending)
const namaAsc = [...hewan].sort((a, b) => a.nama.localeCompare(b.nama));
const namaDesc = [...hewan].sort((a, b) => b.nama.localeCompare(a.nama));

console.log("Kesayangan Ascending:", namaAsc.map(h => h.nama));
console.log("Kesayangan Descending:", namaDesc.map(h => h.nama));

// 3️⃣ Hitung jumlah per jenis
const jumlahJenis = hewan.reduce((acc, h) => {
    acc[h.jenis] = (acc[h.jenis] || 0) + 1;
    return acc;
}, {});
console.log("Jumlah per Jenis:", jumlahJenis);

// 4️⃣ Filter palindrome (nama yang dibaca sama dari depan & belakang)
const palindrome = hewan.filter(h => {
    const n = h.nama.toLowerCase();
    return n === n.split("").reverse().join("") && n.length > 1;
});
console.log("Palindrome:", palindrome.map(h => h.nama));

// 5️⃣ Hitung total bilangan genap (contoh angka dummy)
const angka = [18, 7, 6, 3, 2, 9, 12, 14];
const genap = angka.filter(n => n % 2 === 0);
const totalGenap = genap.reduce((a, b) => a + b, 0);
console.log("Bilangan Genap:", { genap, total: totalGenap });

// 6️⃣ Cek anagram (contoh)
function cekAnagram(kata1, kata2) {
    const sort = s => s.toLowerCase().split("").sort().join("");
    return sort(kata1) === sort(kata2);
}
console.log("Apakah 'listen' dan 'silent' anagram?", cekAnagram("listen", "silent"));

// 7️⃣ Simpan data dalam format JSON
const dataJSON = JSON.stringify(
    hewan.reduce((acc, h) => {
    acc[h.jenis] = acc[h.jenis] || [];
    acc[h.jenis].push(h);
    return acc;
    }, {}),
    null,
    2
);

console.log("Format JSON:\n", dataJSON);