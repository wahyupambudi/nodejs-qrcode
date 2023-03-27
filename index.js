// require qrcode from nodejs
const qr = require("qrcode");

// membuat data dalam bentuk json
let data = {
  name: "Wahyu Pambudi",
  email: "wahyupambudi823@gmail.com",
  npm: 19312302,
  jurusan: "Informatika",
};

// membuat json ke object
let setJson = JSON.stringify(data);

// membuat perulangan menampilkan berupa teks saja.
let text = "";
for (const x in data) {
  text += `${x}: ${data[x]}\n`;
}
// masukkan data di variabel finalText
let finalText = `Data Mahasiswa \n\n${text}`;

// menampilkan dalam bentuk stringify dan teks plain
console.log(setJson);
console.log(finalText);

// menampilkan qrcode di console
qr.toString(text, function (err, string) {
  if (err) throw err;
  console.log(string);
});

// konversi ke file.png

qr.toFile("data.png", "Some text", function (err) {
  if (err) throw err;
  console.log("done");
});

qr.toFile("datadiri.png", finalText, function (err) {
  if (err) throw err;
  console.log("done");
});
