
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

const chairholderPositions =
    document.getElementById("chairholder_and_members");

// Render chairholder positions
for (const key in positions) {

    const underline = document.createElement("u");
    const boldAndUnderlined = underline.appendChild(
        document.createElement("b")
    );

    boldAndUnderlined.innerText = key;

    chairholderPositions.append(underline);
    chairholderPositions.append(document.createElement("br"));

    for (const value of positions[key]) {
        const member = document.createElement("span");

        // Preserve the Aidan Nuttle easter egg
        member.innerHTML = value.replaceAll(
            "Aidan Nuttle",
            `<span
                onclick="document.getElementById('nuttleEgg').style.display='block'"
                style="cursor:pointer;"
            >Aidan Nuttle</span>`
        );

        chairholderPositions.append(member);
        chairholderPositions.append(document.createElement("br"));
    }

    chairholderPositions.append(document.createElement("br"));
}

// General fraternity members heading
const underline = document.createElement("u");

const boldAndUnderlined = underline.appendChild(
    document.createElement("b")
);

boldAndUnderlined.innerText = "General Fraternity Members";

chairholderPositions.append(underline);
chairholderPositions.append(document.createElement("br"));

// General fraternity member list
const allMembersElement = document.createElement("span");
allMembersElement.innerText =
    members["General Fraternity Members"].join(", ");

chairholderPositions.append(allMembersElement);

// SAM ROSENBERG JUMPSCARE

const samMember = [
    ...document.querySelectorAll("#chairholder_and_members > span")
].find(
    (element) =>
        element.textContent.trim() === "Accountant - Sam Rosenberg"
);

if (samMember) {

    // Make only Sam's name clickable
    samMember.textContent = "Accountant - ";

    const samButton = document.createElement("button");
    samButton.type = "button";
    samButton.textContent = "Sam Rosenberg";

    samButton.style.cssText =
        "background:transparent;" +
        "border:0;" +
        "padding:0;" +
        "color:inherit;" +
        "font:inherit;" +
        "cursor:pointer;";

    // Jumpscare images
    const samImages = [
        "assets/img/easteregg/riley1.jpeg",
        "assets/img/easteregg/riley2.jpeg",
        "assets/img/easteregg/riley3.jpeg"
    ];

    // Preload images for faster display
    samImages.forEach((src) => {
        const preloaded = new Image();
        preloaded.src = src;
    });

    samButton.addEventListener("click", () => {

        // Prevent multiple jumpscares at once
        if (document.getElementById("sam-jumpscare")) return;

        // Create fullscreen overlay
        const overlay = document.createElement("div");
        overlay.id = "sam-jumpscare";

        overlay.style.cssText =
            "position:fixed;" +
            "inset:0;" +
            "width:100vw;" +
            "height:100dvh;" +
            "z-index:2147483647;" +
            "background:black;" +
            "display:flex;" +
            "align-items:center;" +
            "justify-content:center;" +
            "overflow:hidden;" +
            "cursor:pointer;";

        // Create image
        const picture = document.createElement("img");
        picture.src = samImages[0];
        picture.alt = "";

        picture.style.cssText =
            "width:100%;" +
            "height:100%;" +
            "object-fit:cover;";

        overlay.append(picture);
        document.body.append(overlay);

        // Cycle through images every 0.5 seconds
        let frame = 0;

        const cycle = window.setInterval(() => {
            frame = (frame + 1) % samImages.length;
            picture.src = samImages[frame];
        }, 500);

        let timeout;

        // Function to close jumpscare
        function closeJumpscare() {
            window.clearInterval(cycle);
            window.clearTimeout(timeout);
            document.removeEventListener("keydown", onKeyDown);
            overlay.remove();
        }

        function onKeyDown(event) {
            if (event.key === "Escape") {
                closeJumpscare();
            }
        }

        // Allow early dismissal
        overlay.addEventListener("click", closeJumpscare);
        document.addEventListener("keydown", onKeyDown);

        // Automatically disappear after 3.5 seconds
        timeout = window.setTimeout(closeJumpscare, 3500);
    });

    samMember.append(samButton);
}
