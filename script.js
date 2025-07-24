const projects = [
  {
    title: "Smart Gas Leak Detector",
    thumbnail: "assets/projects/thumbnail1.jpg",
    file: "assets/projects/project1.pdf"
  },
  {
    title: "Gesture-Controlled DJ Effects",
    thumbnail: "assets/projects/thumbnail2.jpg",
    file: "assets/projects/project2.mp4"
  },
  {
  title: "My New Project",
  thumbnail: "assets/projects/thumbnail3.jpg",
  file: "assets/projects/newfile.pdf"
}

];

const container = document.getElementById("project-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.thumbnail}" alt="${project.title}">
    <h3>${project.title}</h3>
    <a href="${project.file}" target="_blank">View Project</a>
  `;
  container.appendChild(card);
});
