// ----------- About Tabs ----------- 
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");

    }
});

// Fullscreen Mode
document.addEventListener("DOMContentLoaded", function () {
    // Fullscreen button
    const btn = document.createElement("button");
    btn.textContent = "Enter Fullscreen?";
    btn.style.position = "fixed";
    btn.style.top = "10px";
    btn.style.right = "10px";
    btn.style.zIndex = "9999";
    btn.style.padding = "10px 20px";
    btn.style.borderRadius = "10px";
    btn.style.border = "none";
    btn.style.backgroundColor = "#e02f6b";
    btn.style.color = "white";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    btn.style.fontFamily = "inherit";
  
    // Add to page
    document.body.appendChild(btn);
  
    // When clicked
    btn.addEventListener("click", function () {
      const masuk = confirm("Want to open in fullscreen mode?");
      if (!masuk) return;
  
      // Request Fullscreen
      const docEl = document.documentElement;
      const request =
        docEl.requestFullscreen ||
        docEl.webkitRequestFullscreen ||
        docEl.msRequestFullscreen;
  
      if (request) {
        request.call(docEl)
          .then(() => {
            // Successful fullscreen entry -> remove button.
            btn.remove();
          })
          .catch(() => {
            // Failed to enter fullscreen -> the button can remain.
            alert("Gagal masuk ke fullscreen.");
          });
      } else {
        alert("Browser tidak mendukung fullscreen.");
      }
    });
  
    // If the user presses esc to exit fullscreen -> the button can appear again.
    document.addEventListener("fullscreenchange", function () {
      if (!document.fullscreenElement && !document.getElementById("fullscreen-btn")) {
        document.body.appendChild(btn);
      }
    });
  });

// Fullscreen Mode End

// Portofolio Item Details Popup
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortofolioPopup();
        // document.querySelector(".portofolio-popup").scrollTo(0,0);
        portofolioItemDetails(e.target.parentElement);
    }
})
function togglePortofolioPopup(){
    document.querySelector(".portofolio-popup").classList.toggle("open")
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortofolioPopup);

// hide popup when click img outside of it
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortofolioPopup();
    }
});
function portofolioItemDetails(portofolioItem){
    document.querySelector(".pp-thumbnail img").src = 
    portofolioItem.querySelector(".portofolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portofolioItem.querySelector(".portofolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portofolioItem.querySelector(".portofolio-item-details").innerHTML;
}
// BARU [UPDATE]
// Function to observe sections and add 'active' class
function observeSections() {
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // viewport
        threshold: 0.5, // 50% of the section must be visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', observeSections);