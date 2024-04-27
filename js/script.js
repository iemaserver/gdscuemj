
// ******************** Sticky/Scroll navbar ********************

let topBar = document.querySelector(".top-bar");
let navBar = document.querySelector("nav");
let scrollPos = 0;

window.addEventListener("scroll", () => {
  let scrollPosNow = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosNow === 0) {
    topBar.style.display = "flex";
  } else {
    topBar.style.display = "none";
  }

  if (scrollPosNow > scrollPos && scrollPosNow > 0) {
    navBar.style.transform = "translateY(-100%)";
    navBar.style.top = "0";
  } else {
    navBar.style.transform = "translateY(0)";
    navBar.style.top = `${topBar.clientHeight}px`;
  }

  scrollPos = scrollPosNow;
});


// ********** Loader Javascript **********
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

// ********** Loader End **********


// ********** Progress Start **********

window.addEventListener('load', function () {
  var progressBar = document.querySelector('.progress-container');
  progressBar.style.display = 'none';
});
// ********** Progress End **********



// ******************** Navbar Active link ********************

document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href;
  var isHome = currentUrl.includes("home.html");
  var sections = document.querySelectorAll("section");
  var menuItems = document.querySelectorAll(".menu li a");

  if (isHome) {
    window.addEventListener("scroll", function () {
      var currentScroll = window.pageYOffset;

      sections.forEach(function (section) {
        if (section.offsetTop <= currentScroll + 100 && section.offsetTop + section.offsetHeight > currentScroll + 100) {
          var sectionId = section.getAttribute("id");
          menuItems.forEach(function (item) {
            if (item.getAttribute("href") === "#" + sectionId) {
              item.classList.add("nav-active");
            } else {
              item.classList.remove("nav-active");
            }
          });
        }
      });
    });
  }

  menuItems.forEach(function (item) {
    if (isHome && item.getAttribute("href") === currentUrl) {
      item.classList.add("nav-active");
    }
  });
});

// Active Nav End

// ******************** Hamburger ********************

$(function () {
  $(".toggle").on("click", function () {
    if ($(".menu").hasClass("active")) {
      $(".menu").removeClass("active");
      $(this).find("a").html("<i class='fa-solid fa-bars'></i>");
    }
    else {
      $(".menu").addClass("active");
      $(this).find("a").html("<i class='fa-solid fa-xmark'></i>");

    }
  })
})

// ******************** Scroll Trigger Effect ********************
document.addEventListener("DOMContentLoaded", function () {
  var opportunitiesSection = document.getElementById("opportunities");
  var aboutSection = document.getElementById("about-container");
  var accomplishmentSection = document.getElementById("accomplishments");

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  var observerOpportunities = new IntersectionObserver(function (entries, observerOpportunities) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        opportunitiesSection.classList.add("show");
        observerOpportunities.unobserve(entry.target);
      }
    });
  }, options);

  var observerAbout = new IntersectionObserver(function (entries, observerAbout) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        aboutSection.classList.add("show");
        observerAbout.unobserve(entry.target);
      }
    });
  }, options);

  var observerAccomplishment = new IntersectionObserver(function (entries, observerAccomplishment) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        accomplishmentSection.classList.add("show");
        observerAccomplishment.unobserve(entry.target);
      }
    });
  }, options);

  observerAbout.observe(aboutSection);
  observerOpportunities.observe(opportunitiesSection);
  observerAccomplishment.observe(accomplishmentSection);
});


// ******************** Event Section ********************
document.addEventListener('DOMContentLoaded', function () {
  let btn1 = document.getElementById('btn1');
  let btn2 = document.getElementById('btn2');
  let btn3 = document.getElementById('btn3');

  let div1 = document.getElementById('event-div1');
  let div2 = document.getElementById('event-div2');
  let div3 = document.getElementById('event-div3');

  btn1.addEventListener('click', () => {
    div1.style.display = 'flex';
    div2.style.display = 'none';
    div3.style.display = 'none';
  })
  btn2.addEventListener('click', () => {
    div2.style.display = 'flex';
    div1.style.display = 'none';
    div3.style.display = 'none';
  })
  btn3.addEventListener('click', () => {
    div3.style.display = 'flex';
    div2.style.display = 'none';
    div1.style.display = 'none';

  })
});

// Event Section Onclick 
document.addEventListener('DOMContentLoaded', () => {
  const btneventlist = document.querySelectorAll('.event-btn');
  btneventlist.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
      // document.querySelector('.ongoing')?.classList.remove('ongoing');
      document.querySelector('.special')?.classList.remove('special');
      document.querySelector('.default')?.classList.remove('default');
      btnEl.classList.add('special');

    });
  });

})


// ******************** Contact form Design ********************

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  console.log("input event");
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  console.log("input event");
  if (this.value == "") {
    parent.classList.remove("focus");
  }

}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})


// ******************** Contact Form Send Email ********************
function sendEmail() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phone-number").value;
  var message = document.getElementById("message").value;

  if (name === '' || email === '' || phoneNumber === '' || message === '') {
    swal("Error!", "Kindly ensure all the fields are completed.", "error");
    return;
  }


  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "roysushant9681@gmail.com",
    Password: "B821CE2D611140D67708C25730239BD547E5",
    To: 'gdscuemjaipur@gmail.com',
    From: "roysushant9681@gmail.com",
    Subject: "This is the subject",
    Body: "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Phone no: " + document.getElementById("phone-number").value
      + "<br> Message: " + document.getElementById("message").value
  }).then(

    message => {
      if (message === 'OK') {
        swal("Message Sent Successfully!", "Thank You.", "success");
      }
      else {
        swal("Error!", "OOPS!  Something went wrong...", "error");
      }

    }
  );

}


// validate email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// validate phone number
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^(0|\+?\d{1,3})?\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

// validate the form
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phone-number").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === '' || email === '' || phoneNumber === '' || message === '') {
    alert("Please fill in all fields.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!validatePhoneNumber(phoneNumber)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  return true;
}

document.querySelector(".contact-us-form").addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});



// ********************* Footer Newsletter ***********************
document.getElementById('subscription-form').addEventListener('submit', function (event) {
  event.preventDefault();

  var emailInput = document.getElementById('email').value;

  if (!emailInput.trim() !== '' && emailInput.includes('@')) {
    alert('Please enter a valid email address!!');
    document.getElementById('subscription-form').reset();
  } else {
    alert('Submitted Successfully...');

  }
});
// End Newsletter 





/* ****************************************** */
/* ****************************************** */
/* ********** JAVASCRIPT END ********** */
/* ****************************************** */
/* ****************************************** */
