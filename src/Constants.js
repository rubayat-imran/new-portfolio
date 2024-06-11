import SPA from "./Assets/Projects/spa.png";
import EVENTSPA from "./Assets/Projects/event-spa.png";
import LOANCALCULATOR from "./Assets/Projects/loan-calculator.png";
import AUTOMATION from "./Assets/Projects/3automation.jpg";
import COAST from "./Assets/Projects/coast.jpg";
import DROPSHIP from "./Assets/Projects/dropship.jpg";
import GOOD_FOOD_DISCOUNTS from "./Assets/Projects/goodFoodDiscounts.png";
import GUAMEDIA from "./Assets/Projects/guamedia.jpg";
import HSP from "./Assets/Projects/hsp.png";
import COSMOS from "./Assets/Projects/cosmos.jpg";
import TECHSPEC from "./Assets/Projects/techspec.png";
import TRAVELWELL from "./Assets/Projects/travelwell.png";


export const PROJECTS = [
  {
    image: EVENTSPA,
    name: "Event Management SPA with React Router & React/Tanstack Query",
    technologyUsed: "ReactJs, Javascript, React Router , React/Tanstack Query",
    description: "This project is a single-page application (SPA) utilizing React Router and React/Tanstack Query. React Router facilitates seamless navigation between different pages, while Tanstack Query manages HTTP requests and ensures that the frontend user interface stays synchronized with backend data. Users can create, edit, filter, and delete events efficiently.",
    isBlog: true,
    url: "https://github.com/rubayat-imran/event-management-spa",
  },
  {
    image: LOANCALCULATOR,
    name: "Loan calculator App for a leading bank in the UK",
    technologyUsed: "Javascript, Ajax, SASS, Adobe Target, A/B Testing",
    description: "We introduced a full-scale loan calculator for a leading bank in the UK. Users can input the loan amount and loan period either directly or via a custom input range. The calculator quickly computes the annual interest rate, representative APR, monthly repayment, and total payment based on the bank's standard rules. Before going live, we conducted an A/B test that received overwhelmingly positive feedback from users.",
    url: "https://www.tsb.co.uk/personal-loans/personal-loan-calculator.html",
  },
  {
    image: SPA,
    name: "Multipage SPA with React Router",
    technologyUsed: "ReactJs, Javascript, React Router",
    description: "This project is a single-page application (SPA) built with React and React Router, enabling seamless navigation between multiple pages: a home page, an events page, and a newsletter subscription page. Users can add, edit, and delete events, as well as subscribe to the newsletter. The application uses React Router for smooth transitions between pages, providing a dynamic and responsive user experience..",
    isBlog: true,
    url: "https://github.com/rubayat-imran/multipage-react-spa",
  },
  {
    image: COSMOS,
    name: "Micorsoft Azure Cosmos DB",
    technologyUsed: "ReactJs, Javascript, Redux, knockout.js, Jest",
    description: "Azure Cosmos DB is Microsoft's proprietary globally distributed, multi-model database service 'for managing data at planet-scale' Azure Cosmos DB is a fully managed NoSQL database for modern app development. Single-digit millisecond response times, and automatic and instant scalability, guarantee speed at any scale.",
    url: "https://cosmos.azure.com/",
  },
  {
    image: TRAVELWELL,
    name: "travlwell.com",
    technologyUsed: "Shopify, React, typescript, polaris, GraphQL",
    description: "Custom Luggage Tags and Passport Holders engraved with everywhere you've traveled and everywhere you will travel in the future.",
    url: "https://travlwell.com/",
  },
  {
    image: COAST,
    name: "Coast",
    technologyUsed: "ReactNative, Javascript, Redux",
    description: "Team collaboration mobile app and online services like slack Message people and groups without sharing phone numbers, communicate with managers and staff all in one place. and discuss or assign tasks to get stuff done",
    url: "https://play.google.com/store/apps/details?id=com.fomo.android.app",
  },
  {
    image: AUTOMATION,
    name: "3automation.com (RPA)",
    technologyUsed: "ReactJs, Typescript, Redux",
    description: "The next-gen Robotic Process Automation (#RPA) platform for retail and telecom domains. The ultimate automation platform for your Shopify, Email, E- commerce shop",
    url: "https://www.3automation.com/",
  },
  {
    image: GUAMEDIA,
    name: "GuaMedia",
    technologyUsed: "ReactNative, Javascript, Redux",
    description: "Social media mobile app similar to Twitter for china. Social networking GUOMEDIA is an all-in-one social networking platform where users can build their own user profiles, create their own posts, Livestream broadcast and follow each other",
    url: "https://play.google.com/store/apps/details?id=com.tiu.guo.media",
  },
  {
    image: TECHSPEC,
    name: "TechSpec",
    technologyUsed: "ReactJs, Typescript, Redux",
    description: "TechSpec is e-commerce web app. User can compare his product and purchange. This had a dashboard web app which had the data of orders placed and type of user.",
    url: "",
  },
  {
    image: HSP,
    name: "HSP (Health Solution Plus)",
    technologyUsed: "ReactJs, Javascript, Redux",
    description: "This is a Healthcare sector project which would be developed as replica of a desktop application. My responsibilities in this project are to develop UI, perform searching of medical codes and categories, addition/updation of codes and categories.",
    url: "",
  },
  {
    image: DROPSHIP,
    name: "DropShip Shopify App",
    technologyUsed: "Shopify, React, typescript, polaris, GraphQL, Nodejs, Koajs",
    description: "It is customized clothes shopify app which fetch order from store and give option to customize product and send detail to store owner. Also maintain tracking etc of product.",
    url: "",
  },
  {
    image: GOOD_FOOD_DISCOUNTS,
    name: "GoodFoodDiscounts",
    technologyUsed: "ReactNative, Javascript, Redux",
    description: "Good food discouts app is similar like swiggy. Food and hotel can be searched and can be order. Even has facility to add coupan. You can add food in favourite list.",
    url: "",
  },
];

export const SKILLS = [
  { name: "Html", initialRating: 9 },
  { name: "CSS", initialRating: 9 },
  { name: "JavaScript", initialRating: 8 },
  { name: "A/B Testing", initialRating: 9 },
  { name: "JQuery", initialRating: 8 },
  { name: "React.js", initialRating: 7 },
  { name: "Redux.js", initialRating: 7 },
  { name: "Redux-toolkit, Context API", initialRating: 7 },
  { name: "TypeScript", initialRating: 7 },
  { name: "SASS/SCSS", initialRating: 9 },
  { name: "Bootstrap", initialRating: 8 },
  { name: "Unit-Testing(Jest)", initialRating: 6 },
  { name: "WordPress", initialRating: 5 },
  { name: "Git", initialRating: 7 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "Atom", "Sublime Text", "Linux", "Heroku", "Postman"]
