const courses = [
  {
    title: "Web Application Spring 25",
    section: "3C, 2D",
    teacher: "Faias Satter",
    image: "Faias Sir.jpg",
  },
  {
    title: "FEE LAB SPRING 25",
    section: "2D1",
    teacher: "Ayanava Paul",
    image: "Arnob sir.jpg"
  },
  {
    title: "Object Oriented Programming Language Lab",
    section: "D",
    teacher: "AL Imtiaz",
    image: "Imtiaz Sir .jpg"
  },
  {
    title: "EEE0713121: Fundamental of Electrical Engineering",
    section: "CSE_2D (Spring–2025)",
    teacher: "Musad Hasan",
    image: "Musad sir.jpg"
  },
  {
    title: "Spring 2025: CSE 0613121 (Object Oriented Programming)",
    section: "2D",
    teacher: "Tahmina Islam",
    image: "Tahmina maam.jpg"
  },
  {
    title: "ME0715122",
    section: "2D1",
    teacher: "Most. Thasin Sabira",
    image: "Sabira maam.jpg"
  }
];

const backgroundImages = [
"ss1.jpg",
"ss2.jpg",
"ss3.jpg",
"ss3.jpg",
"ss1.jpg",
"ss2.jpg",
];

const container = document.getElementById("courses-container");

courses.forEach((course, index) => {
  const card = document.createElement("div");
  card.className = "course-card";

  card.style.backgroundImage = `url('${backgroundImages[index]}')`;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";
  card.style.color = "#fff";

  card.innerHTML = `
    <div class="course-title">${course.title}</div>
    <div class="course-info">${course.section}</div>
    <div class="spacer"></div> <!-- blank line -->
    <div class="teacher">${course.teacher}</div>
    <img src="${course.image}" alt="Profile" class="profile-img"/>
  `;
  container.appendChild(card);
});
