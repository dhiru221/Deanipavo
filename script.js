const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

const images = [
  "images/smakespeduli1_resized.jpg",
  "images/comingsoon1.jpg",
  "images/comingsoon3.jpg"
];

let current = 0;

function changeImage() {
  current = (current + 1) % images.length;
  document.getElementById("slide").src = images[current];
}

setInterval(changeImage, 3000); // Ganti gambar tiap 3 detik

function toggleText(id) {
  const textElement = document.getElementById(id);
  if (textElement.style.display === "none" || textElement.style.display === "") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}

