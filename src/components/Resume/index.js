import React from 'react';


import {ResumeContainer, ResumeH1, ResumeWrapper, TextWrapper, Headline, SmallTitle, SmallTitleDesc, CourseworkWrapper, CourseworkItem} from './ResumeElements';

const Resume = () => {
    return (
        <ResumeContainer id="resume">
            <ResumeWrapper>
                <ResumeH1>Resume</ResumeH1>

                <TextWrapper>
                    <Headline>Education</Headline>
                    <SmallTitle>Bachelors - University of Waterloo, Waterloo, ON 2017-2021</SmallTitle>
                    <SmallTitleDesc>Major: Computational Mathematics, Statistics</SmallTitleDesc>
                    <SmallTitleDesc>Minor: Computer Science</SmallTitleDesc>
                    <SmallTitleDesc>Relevant Coursework:</SmallTitleDesc>
                    <CourseworkWrapper>

                        <CourseworkItem>Designing Functional Programs</CourseworkItem>
                        <CourseworkItem>Algorithm Design and Data Abstraction</CourseworkItem>
                        <CourseworkItem>Logic and Computation</CourseworkItem>
                        <CourseworkItem>Object Oriented Software Development</CourseworkItem>
                        <CourseworkItem>Data Types and Structures</CourseworkItem>
                        <CourseworkItem>Databases</CourseworkItem>
                        <CourseworkItem>Symbolic Computation</CourseworkItem>
                        <CourseworkItem>Applied Linear Models</CourseworkItem>
                        <CourseworkItem>Sampling and Experimental Design</CourseworkItem>
                        <CourseworkItem>Forecasting with Time Series</CourseworkItem>
                        <CourseworkItem>Computational Methods for Differential Equations</CourseworkItem>
                        <CourseworkItem>Quantum Information Processing</CourseworkItem>
                        <CourseworkItem>Numeric Computation for Financial Modelling</CourseworkItem>

                    </CourseworkWrapper>
                </TextWrapper>

                <TextWrapper>
                    
                    <Headline>Work Experience</Headline>
                    <SmallTitle>National Research Council Canada, Waterloo, ON 2020-2021</SmallTitle>
                    <SmallTitleDesc>Undergraduate Research Assistant</SmallTitleDesc>
                    <CourseworkWrapper>

                        <CourseworkItem>Implemented scripts for large scale collection of novel online-handwriting data using MetaMotionS sensors and Raspberry pi, gathered over 15000 letter recordings</CourseworkItem>
                        <CourseworkItem>Designed pipelines using Python + TsFresh facilitating feature selection and transformation of time series data from the public OnHW-chars dataset, improving results by ~20%</CourseworkItem>
                        <CourseworkItem>Predicted user text input with 70% accuracy using KNN and metric learning, outperforming previous results of 34% accuracy on the dataset (OnHW-chars). Similar results for SVM, random forest, regression</CourseworkItem>
                        <CourseworkItem>Best results obtained from InceptionTime, 85% average accuracy over 5-fold cross validation</CourseworkItem>
                        <CourseworkItem>Results to be published along with a novel dataset featuring data collected using MetaMotionS </CourseworkItem>

                    </CourseworkWrapper>
                </TextWrapper>

                <TextWrapper>
                    
                    <SmallTitle>Steven Chang Tutoring, Waterloo, ON 2020-2021</SmallTitle>
                    <SmallTitleDesc>Founder</SmallTitleDesc>
                    <CourseworkWrapper>

                        <CourseworkItem>Developed a proprietary curriculum using Python and Pygame which introduces students to Python</CourseworkItem>
                        <CourseworkItem>Introduced higher level concepts such as class inheritance in an easy to digest manner</CourseworkItem>
                        <CourseworkItem>Created fizzbuzz style homework questions to enrich learning</CourseworkItem>

                    </CourseworkWrapper>
                </TextWrapper>

                <TextWrapper>
                    
                    <SmallTitle>Code Ninjas, Waterloo, ON 2019-2021</SmallTitle>
                    <SmallTitleDesc>Lead Code Sensei</SmallTitleDesc>
                    <CourseworkWrapper>

                        <CourseworkItem>Interviewed and trained new Sensei's</CourseworkItem>
                        <CourseworkItem>Created and lead a Python curriculum using Pygame</CourseworkItem>
                        <CourseworkItem>Introduced kids to various object-oriented programming topics in an understandable manner</CourseworkItem>
                        <CourseworkItem>Helped kids understand debug prompts and errors within their code, leading to a deeper and more meaningful understanding</CourseworkItem>
                        <CourseworkItem>Introduced kids on their first day, and created a fun and inclusive environment with my enthusiam</CourseworkItem>
                        <CourseworkItem>Lead and organized Javascript, Python, and Roblox Studio summer camps</CourseworkItem>

                    </CourseworkWrapper>
                </TextWrapper>

                <TextWrapper>
                    <SmallTitle>Orion Acquisition, Saskatoon, SK 2019</SmallTitle>
                    <SmallTitleDesc>Team Leader</SmallTitleDesc>
                    <CourseworkWrapper>

                        <CourseworkItem>Helped clients better understand their internet plans, and built a bridge between the service provider and the client.</CourseworkItem>
                        <CourseworkItem>Lead the office in terms of drive as well as results</CourseworkItem>
                        <CourseworkItem>Promoted an inclusive and helpful environment centered around first helping new representatives suceed in the field</CourseworkItem>
                        <CourseworkItem>Trained new representatives and lead sales workshops for both new and seasoned representatives</CourseworkItem>

                    </CourseworkWrapper>
                </TextWrapper>          

            </ResumeWrapper>
        </ResumeContainer>
    );
};

export default Resume;
