document.addEventListener("DOMContentLoaded", function () {
    const sections = ["Home", "Faq", "Unsupported", "OS", "Tool"];
    const mainSections = {};
    const barSections = {};
  
    sections.forEach((id) => {
      mainSections[id] = document.getElementById(id);
      barSections[id] = document.getElementById("Bar-" + id);
    });
      function hideAll() {
      sections.forEach((id) => {
        mainSections[id].style.display = "none";
        mainSections[id].classList.remove("pop");
      });
    }
      function setActive(activeId) {
      sections.forEach((id) => {
        barSections[id].classList.remove("active");
      });
      barSections[activeId].classList.add("active");
    }
    function showSection(id) {
      hideAll();
      mainSections[id].style.display = "block";
      void mainSections[id].offsetWidth;
      mainSections[id].classList.add("pop");
      setActive(id);
    }
      showSection("Home");
      sections.forEach((id) => {
      barSections[id].addEventListener("click", function () {
        showSection(id);
      });
    });
  });
  