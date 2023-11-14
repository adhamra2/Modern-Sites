const openMenuBtn = document.getElementById("open")
const closeMenuBtn = document.getElementById("close")
const phoneMenu = document.getElementById("phone-menu")

function openMenu() {
    openMenuBtn.style.display = "none"
    closeMenuBtn.style.display = "block"
    phoneMenu.style.display = "flex"
}

openMenuBtn.addEventListener("click", openMenu) 

function closeMenu() {
    openMenuBtn.style.display = "block"
    closeMenuBtn.style.display = "none"
    phoneMenu.style.display = "none"
}

closeMenuBtn.addEventListener("click", closeMenu) 

const header = document.getElementById("header")
const header2 = document.getElementById("header2")

window.addEventListener("scroll", function() {
    header.classList.toggle("blurbackground", window.scrollY > 80)
});

window.addEventListener("scroll", function() {
    header2.classList.toggle("blurbackground", window.scrollY > 80)
});

// Fix the syntax issue in the scroll event listener
window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        phoneMenu.style.display = "none";
        openMenuBtn.style.display = "block";
        closeMenuBtn.style.display = "none";
    }
});





ScrollReveal().reveal(".about-header", { distance: '200px' }  );
ScrollReveal().reveal(".about-header", { delay: '200' }  );
ScrollReveal().reveal(".about-container h2", { distance: '300px' }  );
ScrollReveal().reveal(".about-container h2", { delay: '300' }  );
ScrollReveal().reveal(".about-container p", { distance: '400px' }  );
ScrollReveal().reveal(".about-container p", { delay: '400' }  );
ScrollReveal().reveal(".c1", { distance: '500px' }  );
ScrollReveal().reveal(".c2", { distance: '600px' }  );
ScrollReveal().reveal(".c3", { distance: '700px' }  );
ScrollReveal().reveal(".c4", { distance: '800px' }  );
ScrollReveal().reveal(".c1", { delay: '400' }  );
ScrollReveal().reveal(".c2", { delay: '500' }  );
ScrollReveal().reveal(".c3", { delay: '600' }  );
ScrollReveal().reveal(".c4", { delay: '700' }  );
ScrollReveal().reveal(".client", { distance: '200px' }  );
ScrollReveal().reveal(".client", { delaay: '200' }  );
ScrollReveal().reveal(".reviews-header", { distance: '300px' }  );
ScrollReveal().reveal(".reviews-header", { delay: '300' }  );
ScrollReveal().reveal(".reviews-desc-div", { distance: '400px' }  );
ScrollReveal().reveal(".reviews-desc-div", { delay: '400' }  );
ScrollReveal().reveal(".reviews-btn", { distance: '500px' }  );
ScrollReveal().reveal(".reviews-btn", { delay: '500' }  );


var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });
    attachSignin(document.getElementById('customBtn'));
  });
};

function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        document.getElementById('name').innerText = "Signed in: " +
            googleUser.getBasicProfile().getName();
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}