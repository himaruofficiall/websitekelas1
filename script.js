// Fungsi login
function login() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        window.location.href = 'home.html';
    } else {
        alert('Masukkan nama Anda untuk login.');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

const audio = document.getElementById("backgroundAudio");

        // Cek waktu audio yang disimpan dan mulai dari waktu tersebut
        const savedTime = localStorage.getItem("audioCurrentTime");
        if (savedTime) {
            audio.currentTime = savedTime;
        }

        // Update waktu audio setiap detik
        audio.addEventListener("timeupdate", () => {
            localStorage.setItem("audioCurrentTime", audio.currentTime);
        });

// Fungsi logout
function logout() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Menangani klik pada tombol hamburger
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

// Menampilkan pesan selamat datang di halaman home
window.onload = function() {
    const welcomeMessage = document.getElementById('welcome-message');
    const username = localStorage.getItem('username');
    if (welcomeMessage && username) {
        welcomeMessage.textContent = `Selamat Datang, ${username}!`;
    } else if (!username && welcomeMessage) {
        window.location.href = 'index.html';
    }
};
