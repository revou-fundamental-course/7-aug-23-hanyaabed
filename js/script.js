function hitungLuas() {
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;
    var alasError = document.getElementById("alas-error");
    var tinggiError = document.getElementById("tinggi-error");

    if (parseFloat(alas) && parseFloat(tinggi)) {
        // Kenapa saya memakai perkalian dengan angka 10 dan pembagian dengan angka 100? 
        // Karena telah dilakukan uji coba perhitungan secara singkat, sebagai contoh: (4,5 dikali 1,3) dibagi 2. Seharusnya hasilnya 2,925. Tetapi dalam sistem hasilnya 2,9250000000000003. Untuk menghindari output tersebut, digunakan pembulatan angka, baik bilangan asli maupun bilangan desimal yaitu menggunakan perkalian dengan angka 10 dan pembagian dengan angka 100.
        var luas = ((alas * 10) * (tinggi * 10) / 2) / 100;

        document.getElementById("hitung-luas").innerText = "L = 1/2 x a x t";
        document.getElementById("sisi-luas").innerText = "L = 1/2 x " + alas + " x " + tinggi;
        document.getElementById("output_luas").innerText = "L = " + luas;
    }

    // Untuk memberi pesan error jika input hanya menggukan huruf saja.
    if (isNaN(alas)) {
        alasError.innerText = "Tidak boleh ada huruf";
        document.getElementById("hitung-luas").innerText = "";
        document.getElementById("sisi-luas").innerText = "";
        document.getElementById("output_luas").innerText = "";
    }
    else {
        // Ketika mengganti huruf dengan angka (tanpa menekan tombol reset), pesan error menghilang setelah menekan tombol submit.
        alasError.innerText = "";
    }

    if (isNaN(tinggi)) {
        tinggiError.innerText = "Tidak boleh ada huruf";
        document.getElementById("hitung-luas").innerText = "";
        document.getElementById("sisi-luas").innerText = "";
        document.getElementById("output_luas").innerText = "";
    }
    else {
        // Ketika mengganti huruf dengan angka (tanpa menekan tombol reset), pesan error menghilang setelah menekan tombol submit.
        tinggiError.innerText = "";
    }

    if(alas == ""){
        alasError.innerText = "Silakan diisi";
    }

    if(tinggi == ""){
        tinggiError.innerText = "Silakan diisi";
    }
}

// Untuk mengosongkan input maupun error
function resetLuas() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hitung-luas").innerText = "";
    document.getElementById("sisi-luas").innerText = "";
    document.getElementById("output_luas").innerText = "";
    document.getElementById("alas-error").innerText = "";
    document.getElementById("tinggi-error").innerText = "";
}

function hitungKeliling() {
    var sisiA = document.getElementById("sisi-A").value;
    var sisiB = document.getElementById("sisi-B").value;
    var sisiC = document.getElementById("sisi-C").value;
    var AError = document.getElementById("A-error");
    var BError = document.getElementById("B-error");
    var CError = document.getElementById("C-error");

    if (parseFloat(sisiA) && parseFloat(sisiB) && parseFloat(sisiC)) {
        // Kenapa saya memakai perkalian dan pembagian dengan angka 10?
        // Karena telah dilakukan uji coba perhitungan secara singkat, sebagai contoh: 2 tambah 4 tambah 8. Seharusnya hasilnya 14, tetapi dalam sistem hasilnya 248. Solusi untuk mengatasi ouput tersebut yaitu tiap sisi dikali 10, setelah itu dijumlah. Kemudian jumlah seluruh sisi dibagi 10.
        var keliling = ((sisiA * 10) + (sisiB * 10) + (sisiC * 10)) / 10;

        document.getElementById("hitung-keliling").innerText = "K = S1 + S2 + S3";
        document.getElementById("sisi-keliling").innerText = "K = " + sisiA + " + " + sisiB + " + " + sisiC;
        document.getElementById("output_keliling").innerText = "K = " + keliling;
    }

    // Untuk memberi pesan error jika input hanya menggukan huruf saja.
    if (isNaN(sisiA)) {
        AError.innerText = "Tidak boleh ada huruf";
        document.getElementById("hitung-keliling").innerText = "";
        document.getElementById("sisi-keliling").innerText = "";
        document.getElementById("output_keliling").innerText = "";
    } else {
        // Ketika mengganti huruf dengan angka (tanpa menekan tombol reset), pesan error menghilang setelah menekan tombol submit.
        AError.innerText = "";
    }

    if (isNaN(sisiB)) {
        BError.innerText = "Tidak boleh ada huruf";
        document.getElementById("hitung-keliling").innerText = "";
        document.getElementById("sisi-keliling").innerText = "";
        document.getElementById("output_keliling").innerText = "";
    } else {
        // Ketika mengganti huruf dengan angka (tanpa menekan tombol reset), pesan error menghilang setelah menekan tombol submit.
        BError.innerText = "";
    }


    if (isNaN(sisiC)) {
        CError.innerText = "Tidak boleh ada huruf";
        document.getElementById("hitung-keliling").innerText = "";
        document.getElementById("sisi-keliling").innerText = "";
        document.getElementById("output_keliling").innerText = "";
    }
    else {
        // Ketika mengganti huruf dengan angka (tanpa menekan tombol reset), pesan error menghilang setelah menekan tombol submit.
        CError.innerText = "";
    }

    if(sisiA == ""){
        AError.innerText = "Silakan diisi";
    }

    if(sisiB == ""){
        BError.innerText = "Silakan diisi";
    }

    if(sisiC == ""){
        CError.innerText = "Silakan diisi";
    }
}

// Untuk mengosongkan input maupun error
function resetKeliling() {
    document.getElementById("sisi-A").value = "";
    document.getElementById("sisi-B").value = "";
    document.getElementById("sisi-C").value = "";
    document.getElementById("hitung-keliling").innerText = "";
    document.getElementById("sisi-keliling").innerText = "";
    document.getElementById("output_keliling").innerText = "";
    document.getElementById("A-error").innerText = "";
    document.getElementById("B-error").innerText = "";
    document.getElementById("C-error").innerText = "";
}