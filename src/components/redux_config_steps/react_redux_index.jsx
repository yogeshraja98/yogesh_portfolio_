import React, { useState } from "react";
import './react_redux.css';
import reactplusredux from '../../assets/reactplusredux.webp';
import devProfile from '../../assets/myprofile.jpg';
import lightTheme from '../../assets/lightTheme.png';
import darkTheme from '../../assets/darkThemeYellow.png';
import ReduxCodeSnippet from './code_snippet';


const ReactReduxPage = () => {

    const [getLightTheme, setLightTheme] = useState(true);
    const [getPageBgColor, setPageBgColor] = useState("#FFFFFF");
    const [getPageFontColor, setPageFontColor] = useState("#000000");

    const handlePageTheme = () => {
        if (getLightTheme === true) {
            setLightTheme(false);
            setPageBgColor("#000000");
            setPageFontColor("#FFFFFF");
        }
        else {
            setLightTheme(true);
            setPageBgColor("#FFFFFF");
            setPageFontColor("#000000");
        }
    }

    return (
        <>
            <div className="reduxPageContainer" style={{ background: getPageBgColor, color: getPageFontColor }}>
                <div className="themeHeader">
                    <div className="themeSection"
                        style={{ borderColor: getLightTheme === true ? '#000000' : '#97B804' }}>
                        {getLightTheme === true ?
                            <img src={lightTheme} alt="" height="30rem" width="30rem" onClick={handlePageTheme} />
                            : <img src={darkTheme} alt="" height="30rem" width="30rem" onClick={handlePageTheme} />}
                    </div>
                </div>
                <div className="pageOuterContainer">
                    <div className="pageInnerContainer">
                        <div>
                            <p className="reduxWing1" style={{ color: getLightTheme === true ? "#046b71" : "#97b804" }}>Integrate Redux with React Based Application: A Step By Step Guide</p>
                            <div className="reduxWing2">
                                <img src={devProfile} alt="profile" />
                                <div className="reduxWing3 ms-2">
                                    <span className="reduxWing3a">Yogesh Raja</span>
                                    <div className="reduxWing4">
                                        <span>5 min read</span>&nbsp;
                                        <span> . </span>&nbsp;
                                        <span className="reduxWing4x">Posted on June 2024</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h5 style={{ color: getLightTheme === true ? "#046b71" : "#97b804" }} tabIndex="1">What is Redux?</h5>
                            <p>Redux is like a smart organizer for your React. js-based application. This organizer called the store, remembers everything going on in your app, like what’s happening now and what might change. We called it as most powerful state management tool in the React.Js library</p>
                            <p>It also has reducers that are like rulebooks. When something in your app changes, these rulebooks say what to do next. They tell your app how to update itself when you make changes.</p>
                            <h5 style={{ color: getLightTheme === true ? "#046b71" : "#97b804" }} className="mt-4" tabIndex="2">Why Do We Need Redux in React.js?</h5>
                            <p>Imagine you’re building a big, complex React app with lots of components. As your app grows, it becomes more challenging and difficult to keep track of all the data and how it flows between components. This is where you have to use Redux.   </p>
                            <h5 style={{ color: getLightTheme === true ? "#046b71" : "#97b804" }} className="mt-4" tabIndex="3">Here are some reasons to integrate Redux with your React.js application:</h5>
                            <ul>
                                <li>Centralized Data Management: Redux gives you a single place (the store) to store and manage your app’s data. This means no more passing data through props between different components, making your code cleaner and more organized.</li>
                                <li>Predictable State Changes: With Redux, you can predict how your app’s state will change because all state changes are controlled by reducers. This predictability makes it easier to debug and understand your app’s behavior. </li>
                                <li>Easy Collaboration: If you’re working on a team, Redux can be a lifesaver. It provides a clear structure for managing the state, making it easier for team members to understand and work on different parts of the app. </li>
                                <li>Time Travel Debugging: Redux offers a unique feature called “time travel debugging.” It allows you to replay and inspect every action that has ever occurred in your app. This can be incredibly helpful for tracking down bugs.</li>
                                <li>Scalability: As your app grows, managing state with plain React can become unwieldy. Redux scales easily with your app’s complexity, making it a solid choice for larger projects.</li>

                            </ul>
                            <div className="reduxWing5">
                                <img src={reactplusredux} alt="reactplusredux" />
                            </div>
                        </div>
                        <ReduxCodeSnippet getLightTheme={getLightTheme} />
                    </div>
                </div>
            </div>

        </>
    )

}

export default ReactReduxPage;