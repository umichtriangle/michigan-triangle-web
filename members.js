const positions = {
    'Executive Operations': ['Alumni Relations - Abelard Sales'],

    'Financial Operations':[
        "Accountant - Sam Rosenberg",
        "Grant Writing - Aiden Becker",
        "Fundraising - Theodore Mayoette"
    ],

    'External Affairs':[
        "Greek Relations - Mark Rees",
        "Social Chair - Connor Madriago",
        "Risk Manager - Thomas Ignaczak"
    ],

    'Membership Development':[
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
    ],
};

const members = {
  "General Fraternity Members": [
    "Adam Schroeder",
    "Andres Link",
    "Arnav Sadasivan",
    "Ayush Lingam",
    "Bao Duong",
    "Bob Wei",
    "Calvin Cater",
    "Calvin Veith",
    "Christopher Beane",
    "Elijah Uribe",
    "Eliot Wall",
    "Elliot Kupchik",
    "Emory Townley",
    "Gabriel Guitar",
    "Ishan Sinha",
    "Jack Woods",
    "Keith LaFriniere",
    "Kevin Yuan",
    "Lucas Desousa",
    "Michael Villeneuve",
    "Nathaniel Dykstra",
    "Saksham Singh",
    "Will Scott"
  ]
}

const chairholderPositions = document.getElementById("chairholder_and_members")

for (let key in positions) {
    const underline = document.createElement("u")
    const bold_and_underlined = underline.appendChild(document.createElement("b"));
    bold_and_underlined.innerText = key;

    chairholderPositions.append(underline);
    chairholderPositions.append(document.createElement("br"));

    for(let value of positions[key]){
        const member = document.createElement("span");
        member.innerText = value;
        chairholderPositions.append(member);
        chairholderPositions.append(document.createElement("br"))
    }
    chairholderPositions.append(document.createElement("br"));        
}

const underline = document.createElement("u")
const bold_and_underlined = underline.appendChild(document.createElement("b"));
bold_and_underlined.innerText = "General Fraternity Members";

chairholderPositions.append(underline);
chairholderPositions.append(document.createElement("br"));
allMembers = "";
for(let member of members["General Fraternity Members"]){
    allMembers = allMembers + ", "  + member;
}

const allMembersElement = document.createElement("span");
allMembersElement.innerText = allMembers.substring(2);

chairholderPositions.append(allMembersElement);
