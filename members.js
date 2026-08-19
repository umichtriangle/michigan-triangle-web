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

const chairholderPositions = document.getElementById("chairholder_and_members");

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
        member.innerText = value;

        chairholderPositions.append(member);
        chairholderPositions.append(document.createElement("br"));
    }

    chairholderPositions.append(document.createElement("br"));
}

const underline = document.createElement("u");
const boldAndUnderlined = underline.appendChild(
    document.createElement("b")
);

boldAndUnderlined.innerText = "General Fraternity Members";

chairholderPositions.append(underline);
chairholderPositions.append(document.createElement("br"));

const allMembersElement = document.createElement("span");

allMembersElement.innerText =
    members["General Fraternity Members"].join(", ");

chairholderPositions.append(allMembersElement);
