
const positions = {
    "Executive Operations": [
        "Alumni Relations - Abelard Sales"
    ],

    "Financial Operations": [
        "Accountant - Sam Rosenberg",
        "Grant Writing - Aiden Becker",
        "Fundraising - Theodore Mayoette"
    ],

    "External Affairs": [
        "Greek Relations - Mark Rees",
        "Social Chair - Connor Madriago",
        "Risk Manager - Thomas Ignaczak"
    ],

    "Membership Development": [
        "Brotherhood Advisors - Nick Frisch",
        "Academic Chair - Richard Carlos",
        "Professional Development - Theodore Mayoette",
        "Service and Philanthropy - Cooper Curtis",
        "Signature Events - Brent Armstrong"
    ],

    "Internal Operations": [
        "House Manager - Brent Armstrong",
        "Tech Consultant - Vivan Nyati",
        "House Improvements - Aidan Nuttle"
    ],

    "Public Relations": [
        "Marketing - Kevin Cetina",
        "Recruitment - Mark Rees, Connor Madriago, Aidan Nuttle, and Theodore Mayoette",
        "Apparel - Eric Lingg",
        "Webmaster - Vivan Nyati"
    ],

    "Brotherhood": [
        "Pledge Education - Andre Couto and Nick Frisch",
        "Historian - Abelard Sales",
        "Brotherhood Chair - Aidan Nuttle and Andres Link",
        "Health and Wellness - Cooper Curtis"
    ],

    "Judicial Board": [
        "Senior Justices - Andre Couto, Sang Kim, and Eli Grimsley",
        "Junior Justices - Richard Carlos and Sam Martin"
    ]
};

const members = {
    "General Fraternity Members": [
        "Arya Kakarlapudi",
        "Elijah Pineda-Rodriguez",
        "Emory Townley",
        "Arnav Sadasivan",
        "Bob Wei",
        "Ishan Sinha",
        "Kevin Yuan",
        "Lucas Desousa",
        "Will Eubank",
        "Adam Abulaban",
        "Bao Duong",
        "Brandon Truong",
        "Calvin Cater",
        "Elan Ronen",
        "Ethan King",
        "Jack Galasso",
        "Philippe Bertrand",
        "Saksham Singh",
        "Will Scott",
        "Ayush Lingam",
        "Connor Shifflett",
        "Gabriel Guitar",
        "Gavin Haroche",
        "Griffin Moore"
    ]
};

// ===================================
// SAM ROSENBERG JUMPSCARE
// ===================================

const samImages = [
    "assets/img/easteregg/riley1.jpeg",
    "assets/img/easteregg/riley2.jpeg",
    "assets/img/easteregg/riley3.jpeg"
];

// Preload images
const preloadedSamImages = samImages.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

function samJumpscare() {

    // Prevent multiple jumpscares
    if (document.getElementById("sam-jumpscare")) {
        return;
    }

    // Create fullscreen black background
    const overlay = document.createElement("div");
    overlay.id = "sam-jumpscare";

    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        height: 100dvh;
        background: black;
        z-index: 2147483647;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    `;

    // Create image
    const picture = document.createElement("img");
    picture.src = samImages[0];
    picture.alt = "";

    // FIX: No zooming or cropping
    picture.style.cssText = `
        display: block;
        width: auto;
        height: auto;
        max-width: 80vw;
        max-height: 80vh;
        object-fit: contain;
    `;

    overlay.appendChild(picture);
    document.body.appendChild(overlay);

    // Change image every 0.5 seconds
    let index = 0;

    const interval = setInterval(() => {
        index = (index + 1) % samImages.length;
        picture.src = samImages[index];
    }, 500);

    // Remove after 3.5 seconds
    setTimeout(() => {
        clearInterval(interval);
        overlay.remove();
    }, 3500);
}

// ===================================
// AIDAN NUTTLE EASTER EGG
// ===================================

function aidanEasterEgg() {
    const egg = document.getElementById("nuttleEgg");

    if (egg) {
        egg.style.display = "block";
    }
}

// ===================================
// CREATE CLICKABLE NAME
// ===================================

function createClickableName(name, clickFunction) {

    const button = document.createElement("button");

    button.type = "button";
    button.textContent = name;

    // Keep appearance identical to other names
    button.style.cssText = `
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
        color: inherit;
        font: inherit;
        line-height: inherit;
        cursor: pointer;
        display: inline;
    `;

    button.addEventListener("click", clickFunction);

    return button;
}

// ===================================
// RENDER MEMBERS
// ===================================

const chairholderPositions =
    document.getElementById("chairholder_and_members");

if (chairholderPositions) {

    chairholderPositions.innerHTML = "";

    for (const key in positions) {

        // Section heading
        const underline = document.createElement("u");
        const bold = document.createElement("b");

        bold.textContent = key;
        underline.appendChild(bold);

        chairholderPositions.appendChild(underline);

        chairholderPositions.appendChild(
            document.createElement("br")
        );

        // Render positions
        for (const value of positions[key]) {

            const member = document.createElement("span");

            // Identify special names
            const parts = value.split(
                /(Sam Rosenberg|Aidan Nuttle)/g
            );

            parts.forEach(part => {

                if (part === "Sam Rosenberg") {

                    const button = createClickableName(
                        "Sam Rosenberg",
                        samJumpscare
                    );

                    member.appendChild(button);

                } else if (part === "Aidan Nuttle") {

                    const button = createClickableName(
                        "Aidan Nuttle",
                        aidanEasterEgg
                    );

                    member.appendChild(button);

                } else {

                    member.appendChild(
                        document.createTextNode(part)
                    );

                }
            });

            chairholderPositions.appendChild(member);

            chairholderPositions.appendChild(
                document.createElement("br")
            );
        }

        chairholderPositions.appendChild(
            document.createElement("br")
        );
    }

    // General members heading
    const generalUnderline = document.createElement("u");
    const generalBold = document.createElement("b");

    generalBold.textContent = "General Fraternity Members";
    generalUnderline.appendChild(generalBold);

    chairholderPositions.appendChild(generalUnderline);

    chairholderPositions.appendChild(
        document.createElement("br")
    );

    // General members list
    const allMembersElement = document.createElement("span");

    allMembersElement.textContent =
        members["General Fraternity Members"].join(", ");

    chairholderPositions.appendChild(allMembersElement);
}
