function masuk() {

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById("errNama").innerText = "";
    document.getElementById("errEmail").innerText = "";
    document.getElementById("errPass").innerText = "";

    let sukses = true;

    if (nama.length < 3) {
        document.getElementById("errNama").innerText = "Nama terlalu pendek";
        sukses = false;
    }

    if (email === "") {
        document.getElementById("errEmail").innerText = "Email belum diisi";
        sukses = false;
    }

    if (password === "") {
        document.getElementById("errPass").innerText = "Password wajib diisi";
        sukses = false;
    } else if (password.length < 6) {
        document.getElementById("errPass").innerText = "Password minimal 6 karakter";
        sukses = false;
    }

    if (sukses) {
        document.getElementById("popup").style.display = "none";
        alert("Selamat datang " + nama);
    }
}


/* SHOW MENU SYSTEM */
function showMenu(id) {

    const semua = document.querySelectorAll(".container, .info");

    semua.forEach(sec => sec.classList.add("hidden"));

    const target = document.getElementById(id);
    if (target) target.classList.remove("hidden");
}


/* NOTIF BELI */
document.querySelectorAll(".card button").forEach(btn => {

    btn.addEventListener("click", function () {

        const nama = this.parentElement.querySelector("h3").innerText;

        const notif = document.createElement("div");

        notif.innerText = nama + " dibeli";
        notif.style.position = "fixed";
        notif.style.bottom = "20px";
        notif.style.right = "20px";
        notif.style.background = "#EC407A";
        notif.style.color = "white";
        notif.style.padding = "12px 20px";
        notif.style.borderRadius = "10px";

        document.body.appendChild(notif);

        setTimeout(() => notif.remove(), 2000);
    });
});