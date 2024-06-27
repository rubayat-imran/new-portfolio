import SPA from "./Assets/Projects/spa.png";
import EVENTSPA from "./Assets/Projects/event-spa.png";
import LOANCALCULATOR from "./Assets/Projects/loan-calculator.png";
import PLACEPICKER from "./Assets/Projects/place-picker.png";

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
    image: PLACEPICKER,
    name: "Place Picker App with React",
    technologyUsed: "React, React Hooks, Javascript, Vite, Css",
    description: `This is a Place Picker app built with React, React Hooks, and Vite. It allows users to add and remove places from predefined destinations in a fun and interactive way. The app leverages the browser's 'navigator' feature to sort locations based on the user's current location.
    In this app, we demonstrate how to effectively manage side effects using the 'useEffect' and 'useCallback' hooks. By utilizing these hooks dependencies and callback functions, we ensure optimal performance and reactivity within the application.`,
    url: "https://rubayat-imran.github.io/place-picker-app/",
  },
  {
    image: SPA,
    name: "Multipage SPA with React Router",
    technologyUsed: "ReactJs, Javascript, React Router",
    description: "This project is a single-page application (SPA) built with React and React Router, enabling seamless navigation between multiple pages: a home page, an events page, and a newsletter subscription page. Users can add, edit, and delete events, as well as subscribe to the newsletter. The application uses React Router for smooth transitions between pages, providing a dynamic and responsive user experience.",
    isBlog: true,
    url: "https://github.com/rubayat-imran/multipage-react-spa",
  }
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
