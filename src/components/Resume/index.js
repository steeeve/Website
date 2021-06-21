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
