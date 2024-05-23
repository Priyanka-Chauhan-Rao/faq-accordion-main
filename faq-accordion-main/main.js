document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const question = item.querySelector(".accordion-question");
    const toggleButton = item.querySelector(".accordion-toggle");
    const answer = item.querySelector(".accordion-answer");

    question.addEventListener("click", function () {
      toggleAccordion(item);
    });

    toggleButton.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleAccordion(item);
    });
  });

  function toggleAccordion(item) {
    const answer = item.querySelector(".accordion-answer");
    const isOpen = answer.style.display === "block";

    accordionItems.forEach((i) => {
      i.querySelector(".accordion-answer").style.display = "none";
      i.querySelector(".accordion-toggle").textContent = "+";
    });

    if (!isOpen) {
      answer.style.display = "block";
      item.querySelector(".accordion-toggle").textContent = "-";
    }
  }
});
