/* ********************************************************** */
// Members Details Data Object
/* ********************************************************** */

// Lead Member Details
let leadMemberDetails2022 = [

    {
        id: 0,
        name: "Sahitya Roy",
        avatar: "../assets/img/team/Sahitya.jpeg",
        badges: `
                      <span class="red">2022</span>
                      <span class="blue">GDSC</span>
                      <span class="green">Lead</span>
                  `,
        cardBorderColor: "red",

        socialGithubLink: "https://github.com/SahityaRoy",
        socialLinkedinLink: "https://www.linkedin.com/in/sahityaroy/",
        socialTwitterLink: "#",
    },

];

// Core Team Members 
let coreMemberDetails2022 = [

    {
        id: 0,
        name: "Priya Chandak",
        avatar: "../assets/img/team/priya.jpeg",
        badges: `
        <span class="yellow">Community Lead</span>
        <span class="blue">Member</span>
      `,
        cardBorderColor: "red",
        socialGithubLink: "https://github.com/PriyaChandak24",
        socialLinkedinLink: "https://www.linkedin.com/in/priya-chandak-ba0a6b178/?original_referer=https%3A%2F%2Fgdsc.uem.edu.in%2F",
        socialTwitterLink: "#",
    },
    {
        id: 1,
        name: "Amar Sansil",
        avatar: "../assets/img/team/Amar.jpeg",
        badges: `
        <span class="red">Program Manager</span>
        <span class="green">Lead</span>
      `,
        cardBorderColor: "blue",
        socialGithubLink: "https://github.com/amarsansil",
        socialLinkedinLink: "https://linkedin.com/in/amarsansil",
        socialTwitterLink: "#",
    },
    {
        id: 2,
        name: "Sameer Singh",
        avatar: "../assets/img/team/Sameer.jpeg",
        badges: `
        <span class="blue">Management</span>
        <span class="yellow">Lead</span>
      `,
        cardBorderColor: "green",
        socialGithubLink: "#",
        socialLinkedinLink: "https://www.linkedin.com/in/sameer-singh-21512022a/",
        socialTwitterLink: "#",
    },
    {
        id: 3,
        name: "Ishika Sharaf",
        avatar: "../assets/img/team/Ishika.jpeg",
        badges: `
        <span class="red">C.P. Executive</span>
        <span class="green">Lead</span>
      `,
        cardBorderColor: "yellow",
        socialGithubLink: "https://github.com/Ishikasaraf20",
        socialLinkedinLink: "https://linkedin.com/in/ishika-saraf-263215210",
        socialTwitterLink: "#",
    },
    {
        id: 4,
        name: "Anusree Das",
        avatar: "../assets/img/team/Anusree.jpeg",
        badges: `
        <span class="red">Graphic Designer</span>
        <span class="green">Lead</span>
      `,
        cardBorderColor: "blue",
        socialGithubLink: "#",
        socialLinkedinLink: "https://www.linkedin.com/in/anusree-das-01/",
        socialTwitterLink: "#",
    },
    {
        id: 5,
        name: "Shubham Gourisaria",
        avatar: "../assets/img/team/subham_gourisaria.webp",
        badges: `
        <span class="blue">Event Manager</span>
        <span class="green">Lead</span>
      `,
        cardBorderColor: "red",
        socialGithubLink: "https://github.com/SubhamBnk",
        socialLinkedinLink: "https://linkedin.com/in/subham-gourisaria-a13418201",
        socialTwitterLink: "https://twitter.com/Subham_Coder",
    },
    {
        id: 6,
        name: "Yash Raj Anand",
        avatar: "../assets/img/team/yash_raj_anand.webp",
        badges: `
        <span class="red">Operation Team</span>
        <span class="green">Lead</span>
      `,
        cardBorderColor: "blue",
        socialGithubLink: "https://github.com/Yash2624",
        socialLinkedinLink: "https://www.linkedin.com/in/yash-raj-a-0ab34a21b/",
        socialTwitterLink: "#",
    }

]


let leadMember = document.querySelector("#lead");
let coreMember = document.querySelector("#core");
let excoreMember = document.querySelector("#exCore");

// Lead Member
Object.values(leadMemberDetails2022).map((val) => {
    leadMember.innerHTML += `
          <!-- ${val.id}.${val.name} -->
          <div class="profile_card ${val.cardBorderColor}">
              <img src="${val.avatar}" alt="Profile Img" />
              <h4 class="lg">${val.name}</h4>
              <p>${val.badges}</p>
  
              <div class="social">
                  ${val.socialGithubLink !== '#' ? `<a href="${val.socialGithubLink}" target="_blank"><i class="bx bxl-github"></i></a>` : ''}
                  ${val.socialLinkedinLink !== '#' ? `<a href="${val.socialLinkedinLink}" target="_blank"><i class="bx bxl-linkedin"></i></a>` : ''}
                  ${val.socialTwitterLink !== '#' ? `<a href="${val.socialTwitterLink}" target="_blank"><i class="bx bxl-twitter"></i></a>` : ''}
              </div>
          </div>
      `;
});

// Core Team Details
Object.values(coreMemberDetails2022).map((val) => {
    coreMember.innerHTML += `
          <!-- ${val.id}.${val.name} -->
          <div class="profile_card ${val.cardBorderColor}">
              <img src="${val.avatar}" alt="Profile Img" />
              <h4 class="lg">${val.name}</h4>
              <p>${val.badges}</p>
  
              <div class="social">
                  ${val.socialGithubLink !== '#' ? `<a href="${val.socialGithubLink}" target="_blank"><i class="bx bxl-github"></i></a>` : ''}
                  ${val.socialLinkedinLink !== '#' ? `<a href="${val.socialLinkedinLink}" target="_blank"><i class="bx bxl-linkedin"></i></a>` : ''}
                  ${val.socialTwitterLink !== '#' ? `<a href="${val.socialTwitterLink}" target="_blank"><i class="bx bxl-twitter"></i></a>` : ''}
              </div>
          </div>
      `;
});


// Extended Core Team
Object.values(exCoreMemberDetails2022).map((val) => {
    excoreMember.innerHTML += `
          <!-- ${val.id}.${val.name} -->
          <div class="profile_card ${val.cardBorderColor}">
              <img src="${val.avatar}" alt="Profile Img" />
              <h4 class="lg">${val.name}</h4>
              <p>${val.badges}</p>
  
              <div class="social">
                  ${val.socialGithubLink !== '#' ? `<a href="${val.socialGithubLink}" target="_blank"><i class="bx bxl-github"></i></a>` : ''}
                  ${val.socialLinkedinLink !== '#' ? `<a href="${val.socialLinkedinLink}" target="_blank"><i class="bx bxl-linkedin"></i></a>` : ''}
                  ${val.socialTwitterLink !== '#' ? `<a href="${val.socialTwitterLink}" target="_blank"><i class="bx bxl-twitter"></i></a>` : ''}
              </div>
          </div>
      `;
});