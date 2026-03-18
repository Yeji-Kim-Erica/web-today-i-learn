const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const dateValue = document.querySelector("#til-date").value;
  const titleValue = document.querySelector("#til-title").value;
  let contentValue = document.querySelector("#til-content").value;

  contentValue = contentValue.replace(/\n/g, "<br>");

  const newArticle = document.createElement("article");
  newArticle.classList.add("til-item");

  newArticle.innerHTML = `
    <time>${dateValue}</time>
    <h3>${titleValue}</h3>
    <p>${contentValue}</p>
  `;

  tilList.prepend(newArticle);

  tilForm.reset();
});

const galleryImages = document.querySelectorAll(".gallery-grid img");

const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(253, 251, 255, 0.85)";
modal.style.backdropFilter = "blur(12px)";
modal.style.display = "flex";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "1000";
modal.style.opacity = "0";
modal.style.pointerEvents = "none";
modal.style.transition = "all 0.3s ease";
modal.style.cursor = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ctext y='22' font-size='22'%3E%E2%9D%8C%3C/text%3E%3C/svg%3E\") 14 14, auto";

const modalImg = document.createElement("img");
modalImg.style.maxWidth = "80%";
modalImg.style.maxHeight = "80%";
modalImg.style.borderRadius = "40px";
modalImg.style.border = "12px solid #fff";
modalImg.style.boxShadow = "0 24px 48px rgba(130, 106, 238, 0.2)";
modalImg.style.transform = "scale(0.8)";
modalImg.style.transition = "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";

modal.appendChild(modalImg);
document.body.appendChild(modal);

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.style.opacity = "1";
    modal.style.pointerEvents = "auto";

    setTimeout(() => {
      modalImg.style.transform = "scale(1)";
    }, 10);
  });
});

modal.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.pointerEvents = "none";
  modalImg.style.transform = "scale(0.8)";
});
