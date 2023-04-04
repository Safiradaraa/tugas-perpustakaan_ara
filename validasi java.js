
function cekform() {
    id s= document.getElementById("id");
    nama = document.getElementById("txtnama");
    if (id.value == "") {
        alert("id tidak boleh kosong");
        id.focus();
        return false;
    } else if (nama.value.length <= 3) {
        alert("nama minimal 5 karakter ")
        nama.focus();
        return false;
    } else  {
        alert("Data tersimpan");
        return true;
    }
}