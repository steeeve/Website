import me2 from '../../images/me2.jpg';
import proj1 from '../../images/cs476.jpg';
import proj2 from '../../images/Stat331.jpg';
import chessproj from '../../images/cs246.jpg';
import greg from '../../images/excelgreg.jpg';

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Hello world!',
    headline: '',
    description: 'im a student and developer who likes to skateboard and catch fish!',
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
    description: 'Priced options under various black-scholes models, methods used include pricing according to a binomial lattice, Monte Carlo Simulation, and discretized time-stepping methods for solving differential equations. Also calculated hedging portfolios for the option writer, as well as selecting the optimal portfolio.',
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
    imgStart: true,
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
    description: 'Chess with an added call of duty chess gamemode! Includes kill streak messages and rewards, first blood. Implemented using Model View Controller design pattern, specific class relationships were depicted with a UML diagram. All chess functionalities are supported (Castling, Pawn promotion, En Passant, Detecting stalemate',
    buttonLabel: '',
    showButt: false,
    imgStart: false,
    img: chessproj,
    alt: 'projs',
    dark: true,
    primary: true,
    darkText: true
};

export const ProjectObjFour = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Excel Spreadsheet Automation',
    headline: "Greg Sebastian",
    description: 'Greg is a friend of mine who runs a sales and marketing team, based out of Calgary, AB. I helped out by automating the processing of sales data held in excel sheets, saving countless hours and streamlining the internal sales process. Openpyxl was used to read the spreadsheet, and PyInstaller exported the final script to a .exe format for day to day use.',
    buttonLabel: '',
    showButt: false,
    imgStart: false,
    img: greg,
    alt: 'projs',
    dark: true,
    primary: true,
    darkText: true
};
