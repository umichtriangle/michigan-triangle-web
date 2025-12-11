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
        "Junior Justices - Will Eubank, Andre Couto, and Siddharth Gupta",
        "Senior Justices - Eli Grimsley and Philippe Bertrand"
    ],
};

const members = {
  "General Fraternity Members": [
    "Alexander Gordon",
    "Arnav Sadasivan",
    "Arya Kakarlapudi",
    "Brennan Leinweber",
    "Calvin Veith",
    "Christopher Beane",
    "Ethan Gibbs",
    "Elliot Kupchik",
    "Griffin Wright",
    "Ian Moore",
    "Jack Woods",
    "Jeremy Shen",
    "Joshua Hsueh",
    "Keith LaFriniere",
    "Kevin Yin",
    "Lewin Shen",
    "Max Rucker",
    "Michael Villeneuve",
    "Raayan Brar",
    "Tahseen Younus"
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
