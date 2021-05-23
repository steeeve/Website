import me2 from '../../images/me2.jpg';
import proj1 from '../../images/cs476.jpg';
import proj2 from '../../images/Stat331.jpg';
import chessproj from '../../images/cs246.jpg';

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Hello world!',
    headline: '',
    description: 'im a developer who likes to skateboard and catch fish!',
    showButt: true,
    buttonLabel: 'Some more about me!',
    imgStart: true,
    img: me2,
    alt: 'Me',
    dark: true,
    primary: true,
    darkText: true
};

export const ProjectObjOne = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Modelling Option Prices',
    headline: 'CS476 - University of Waterloo',
    description: 'Priced options under the black-scholes model, methods used include pricing according to a binomial lattice, Monte Carlo Simulation, and discretized methods for solving differential equations.',
    buttonLabel: '',
    showButt: false,
    imgStart: true,
    img: proj1,
    alt: 'projs',
    dark: true,
    primary: true,
    darkText: true
};

export const ProjectObjTwo = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Regression Model for Housing Prices',
    headline: 'STAT331 - University of Waterloo',
    description: 'Given a large real estate dataset of houses sold in the past years, constructed a regression model using an automatic algorithm. Model checking and diagnostics found that a transformation on our explanatory variable resulted a better plot of our residuals, giving us a more homeoscedastic model.',
    buttonLabel: '',
    showButt: false,
    imgStart: false,
    img: proj2,
    alt: 'projs',
    dark: true,
    primary: true,
    darkText: true
};

export const ProjectObjThree = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Chess in C++',
    headline: 'CS246 - University of Waterloo',
    description: 'Chess with an added call of duty chess gamemode! Includes kill streak messages and rewards, and first blood.',
    buttonLabel: '',
    showButt: false,
    imgStart: true,
    img: chessproj,
    alt: 'projs',
    dark: true,
    primary: true,
    darkText: true
};