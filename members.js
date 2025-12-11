const positions = {
    'Executive Operations': ['Alumni Relations - Miles Kohn'],

    'Financial Operations':[
        "Accountant - Adam Abulaban",
        "Grant Writing - Aiden Becker",
        "Fundraising - Teddy Mayoette"
    ],

    'External Affairs':[
        "Greek Relations - Connor Madriago",
        "Social Chair - Elan Ronen",
        "Risk Manager - Arya Kakarlapudi"
    ],

    'Membership Development':[
        "Brotherhood Advisors - Andre Couto and Elijah Pineda",
        "Academic Chair - Vivan Nyati",
        "Professional Development - Ethan King",
        "Service and Philanthropy - Aiden Becker",
        "Signature Events - Gavin Haroche"
    ],

    "Internal Operations": [
        "House Manager - William Eubank",
        "Tech Consultant - Siddharth Gupta",
        "House Improvements - Miles Kohn"
    ],

    "Public Relations": [
        "Marketing - Elan Ronen",
        "Recruitment - Elan Ronen, Connor Madriago, and Griffin Moore",
        "Apparel - Liam Oliva",
        "Webmaster - Vivan Nyati"
    ],

    "Brotherhood": [
        "Pledge Education - William Eubank and Sang Kim",
        "Historian - Gavin Hodapp",
        "Brotherhood Chair - Brandon Truong and Connor Shifflett",
        "Health and Wellness - Eli Grimsley"
    ],

    "Judicial Board": [
        "Senior Justices - Will Eubank, Andre Couto, and Siddharth Gupta",
        "Junior Justices - Eli Grimsley and Philippe Bertrand"
    ],
};

const members = {
  "General Fraternity Members": [
    "Adam Abulaban",
    "Adam Schroeder",
    "Aiden Becker",
    "Alex Simpson",
    "Andre Couto",
    "Andres Link",
    "Arnav Sadasivan",
    "Arya Kakarlapudi",
    "Ayush Lingam",
    "Bao Duong",
    "Bob Wei",
    "Brandon Truong",
    "Calvin Cater",
    "Calvin Veith",
    "Charlie Wang",
    "Christopher Beane",
    "Connor Madriago",
    "Connor Shifflett",
    "Elan Ronen",
    "Eli Grimsley",
    "Elijah Pineda-Rodriguez",
    "Elijah Uribe",
    "Eliot Wall",
    "Elliot Kupchik",
    "Emory Townley",
    "Ethan King",
    "Gabriel Guitar",
    "Gavin Haroche",
    "Gavin Hodapp",
    "Griffin Moore",
    "Ishan Sinha",
    "Jack Galasso",
    "Jack Woods",
    "Kadim Worthington",
    "Keith LaFriniere",
    "Kevin Yuan",
    "Liam Hoover",
    "Liam Oliva",
    "Lucas Desousa",
    "Michael Villeneuve",
    "Miles Kohn",
    "Nathaniel Dykstra",
    "Nick Frisch",
    "Philippe Bertrand",
    "Saksham Singh",
    "Sam Martin",
    "Sang Kim",
    "Siddharth Gupta",
    "Theodore Mayotte",
    "Tommy Hayman",
    "Vivan Nyati",
    "Will Eubank",
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
