function generateResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skills = document.getElementById("skills").value;

  const output = `
    <h2 class='text-3xl font-bold text-yellow-400 mb-2'>${name}</h2>
    <p class='mb-2'><strong>Email:</strong> ${email}</p>
    <p><strong>Skills:</strong> ${skills}</p>
  `;

  const resume = document.getElementById("resume-output");
  resume.innerHTML = output;
  resume.classList.remove("hidden");

  html2pdf().from(resume).save(`${name.replace(/\\s+/g, '_')}_Resume.pdf`);
}
