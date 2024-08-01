import React, { useRef } from "react";
import FancyHeader from './fancy_header';

const ReduxCodeSnippet = (props) => {
    const step4Reference = useRef(null);

    const scrollToFirstDiv = () => {
        step4Reference.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="">
            {/* <p>Now, let’s get started with integrating Redux into our React.js application.</p> */}
            {/* step 1 */}
            <p className="mt-3">Now, let's get started with step-by-step approach to integrate the Redux with our React application that send the request url to get the Employee list as response from Server, store the response then do operations based on your needs.</p>
            <h5 style={{ color: props.getLightTheme === true ? "#046b71" : "#97b804" }} tabIndex="3">Step 1: Install the listed library</h5>
            <ul>
                <li><span className="" style={{ background: props.getLightTheme === true ? '#cfe4d8' : '#225b2c' }}>npm install react-redux</span><br />
                    <span>This library provides bindings for using Redux with React. Ref: </span>
                    <a href="https://www.npmjs.com/package/react-redux" target="_blank" rel="noopener noreferrer">react-redux package</a>
                </li>
                <li><span className="" style={{ background: props.getLightTheme === true ? '#cfe4d8' : '#225b2c' }}>npm install @reduxjs/toolkit</span><br />
                    <span>This official Redux toolkit simplifies Redux development. Ref: </span>
                    <a href="https://www.npmjs.com/package/@reduxjs/toolkit" target="_blank" rel="noopener noreferrer">reduxjs/toolkit package</a>
                </li>
                <li><span className="" style={{ background: props.getLightTheme === true ? '#cfe4d8' : '#225b2c' }}>npm install axios</span><br />
                    <span>This library makes HTTP requests from the browser. Ref: </span>
                    <a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer">axios package</a>
                </li>
            </ul>

            {/* spep 2 */}
            <h5 style={{ color: props.getLightTheme === true ? "#046b71" : "#97b804" }} className="mb-0" tabIndex="4">Step 2: Call the Redux Action using useDispatch method</h5>
            <span>'useDispatch' hook provided by the 'react-redux' library that allows you to dispatch actions to the Redux store. Import it then declare the 'useDistach()' method in varible called 'dispatch'.</span>
            <div className="codeSnippetOuterBody mt-2">
                <FancyHeader />
                <div className="codeSnippetInnerBody mt-2 mb-1">
                    <pre>
                        <code className='codeYellow'>useEffect</code>
                        <code className='codeYellow'>{"(()"}</code>
                        <code className='codeDarkBlue'>{"=>"}</code>
                        <code className='codeWhite'>{"{"}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeYellow'>dispatch</code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeYellow'>getEmployeeListAPIcall</code>
                        <code className='codeDarkBlue'>{"())"}</code>
                        <code className='codeWhite'>{";"}</code>
                    </pre>
                    <pre>
                        <code className="codeWhite">{"}, [])"}</code>
                    </pre>
                </div>
            </div>

            {/* step 3 */}
            <h5 style={{ color: props.getLightTheme === true ? "#046b71" : "#97b804" }} className="mb-0 mt-4" tabIndex="4">Step 3: Prepare the Action method</h5>
            <span>Create a new file with jsx extension. Prepare the Action using createAsyncThunk method from 'reduxjs/toolkit' library that helps in creating asynchronous actions in a concise and standard way.</span> <br />
            <span>Import the 'axios' library which is a popular HTTP client for making requests to APIs.</span>
            <div className="codeSnippetOuterBody mt-2 mb-2">
                <FancyHeader />
                <div className="codeSnippetInnerBody mt-2 mb-1">
                    <pre>
                        <code className='codePink'>import </code>
                        <code className='codeWhite'>{"{"}</code>
                        <code className='codeSkyBlue'>createAsyncThunk</code>
                        <code className='codeWhite'>{"}"}</code>
                        <code className='codePink'> from </code>
                        <code className='codeTawny'>'@reduxjs/toolkit'</code>
                        <code className='codeWhite'>;</code>
                    </pre>
                    <pre>
                        <code className='codePink'>import</code>
                        <code className='codeTawny'> axios </code>
                        <code className='codePink'>from </code>
                        <code className='codeSkyBlue'>'axios'</code>
                        <code className='codeWhite'>;</code>
                    </pre> <br />
                    <pre>
                        <code className='codePink'>export</code>
                        <code className='codeDarkBlue'> const </code>
                        <code className='codeCobaltBlue'>getEmployeeListAPIcall </code>
                        <code className='codeWhite'>=</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeYellow'>createAsyncThunk</code>
                        <code className='codeWhite'>{'('}</code>
                        <code className='codeTawny'>'getEmployeeData/getEmployeeListAPIcall'</code>
                        <code className='codeWhite'>, </code>
                        <code className='codeDarkBlue'>async </code>
                        <code className='codeWhite'>()</code>&nbsp;
                        <code className='codeDarkBlue'> {"=>"}</code>&nbsp;
                        <code className='codeWhite'> {"{"}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeDarkBlue'>const</code>
                        <code className='codeCobaltBlue'> apiURL</code>
                        <code className='codeWhite'> = </code>
                        <code className='codeTawny'>'http://localhost:3001/employees'</code>
                        <code className='codeWhite'>;</code>
                        <code className="codeCommentGreen">{' //replace it to your endpoint url'}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeDarkBlue'>const</code>
                        <code className='codeCobaltBlue'> response</code>
                        <code className='codeWhite'> = </code>
                        <code className='codePink'>await </code>
                        <code className='codeCobaltBlue'>axios</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeYellow'>get</code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeCobaltBlue'>apiURL</code>
                        <code className='codeWhite'>{")"}</code>
                        <code className='codeWhite'>;</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codePink'>return </code>
                        <code className='codeCobaltBlue'>response</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>data</code>
                        <code className='codeWhite'>;</code>
                    </pre>
                    <pre>
                        <code className='codeWhite'>{"});"}</code>
                    </pre>
                </div>
            </div>
            <div>
                <span>Here, 'createAsyncThunk' is called with two arguments</span><br />
                <ul>
                    <li>One is called string identifier ('getEmployeeData/ getEmployeeListAPIcall') for the thunk action. This helps Redux Toolkit keep track of the different async actions and their states (pending, fulfilled, rejected).</li>
                    <li>And Second is defines an asynchronous function, and API call is made. Use 'axios.get(apiURL)' to send a GET request to the specified URL. <br />
                        'await' is used to wait for the promise returned by 'axios.get' to resolve, this pauses the function until the request is complete and the response is received.
                    </li>
                </ul>
            </div>

            {/* step 4 */}
            <h5 style={{ color: props.getLightTheme === true ? "#046b71" : "#97b804" }} ref={step4Reference} className="mb-0 mt-4" tabIndex="6">Step 4: Preapre the Reducer method</h5>
            <span>By using createSlice method from reduxjs/toolkit library, create the Reducer method where create the Action method</span>
            <div className="codeSnippetOuterBody mt-1 mb-2">
                <FancyHeader />
                <div className="codeSnippetInnerBody mt-2 mb-1">
                    <pre>
                        <code className='codePink'>import </code>
                        <code className='codeWhite'>{"{"}</code>
                        <code className='codeSkyBlue'>createSlice</code>
                        <code className='codeWhite'>{"}"}</code>
                        <code className='codePink'> from</code>
                        <code className='codeTawny'> '@reduxjs/toolkit'</code>
                        <code className='codeWhite'>;</code>
                    </pre> <br />
                    <pre>
                        <code className='codePink'>export</code>
                        <code className='codeDarkBlue'> const </code>
                        <code className='codeCobaltBlue'>getEmployeeListReducer</code>
                        <code className='codeWhite'> = </code>
                        <code className='codeYellow'>createSlice</code>
                        <code className='codeWhite'>{"({"}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeSkyBlue'>name: </code>
                        <code className='codeTawny'>'getEmployeeData'</code>
                        <code className='codeWhite'>,</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeSkyBlue'>initialState: </code>
                        <code className='codeWhite'>{"{"}</code>
                    </pre>
                    <pre className="paddingLeftlevel2">
                        <code className='codeSkyBlue'>data: </code>
                        <code className='codeWhite'>[],</code>
                    </pre>
                    <pre className="paddingLeftlevel2">
                        <code className='codeSkyBlue'>loading: </code>
                        <code className='codeTawny'>'idle'</code>
                        <code className='codeWhite'>,</code>
                    </pre>
                    <pre className="paddingLeftlevel2">
                        <code className='codeSkyBlue'>error</code>
                        <code className='codeDarkBlue'> null</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeWhite'>{"},"}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeSkyBlue'>reducers: </code>
                        <code className='codeWhite'>{"{},"}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeYellow'>extraReducers</code>
                        <code className='codeSkyBlue'>: </code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeSkyBlue'>builder</code>
                        <code className='codeWhite'>{")"}</code>&nbsp;&nbsp;
                        <code className='codeDarkBlue'>{"=>"}</code>&nbsp;&nbsp;
                        <code className='codeWhite'>{"{"}</code>
                    </pre>
                    <pre className="paddingLeftlevel2">
                        <code className='codeSkyBlue'>builder</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeYellow'>addCase</code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeCobaltBlue'>getEmployeeListAPIcall</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>pending</code>
                        <code className='codeWhite'>, </code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeSkyBlue'>state</code>
                        {/* <code className='codeWhite'>, </code>
                                <code className='codeSkyBlue'>action</code> */}
                        <code className='codeWhite'>{")"}</code>
                        <code className='codeDarkBlue'>{" => "}</code>
                        <code className='codeWhite'>{"{"}</code>
                    </pre>
                    <pre className="paddingLeftlevel3">
                        <code className='codeSkyBlue'>state</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>loading</code>
                        <code className='codeWhite'> = </code>
                        <code className='codeTawny'>'pending'</code>
                        <code className='codeWhite'>;</code>
                    </pre>
                    <pre className="paddingLeftlevel2">
                        <code className='codeWhite'>{"});"}</code>
                    </pre>
                    <pre className="paddingLeftlevel2">
                        <code className='codeSkyBlue'>builder</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeYellow'>addCase</code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeCobaltBlue'>getEmployeeListAPIcall</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>fulfilled</code>
                        <code className='codeWhite'>, </code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeSkyBlue'>state</code>
                        <code className='codeWhite'>, </code>
                        <code className='codeSkyBlue'>action</code>
                        <code className='codeWhite'>{")"}</code>
                        <code className='codeDarkBlue'> {"=>"} </code>
                        <code className='codeWhite'>{"{"}</code>
                    </pre>
                    <pre className="paddingLeftlevel3">
                        <code className='codeSkyBlue'>state</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>loading</code>
                        <code className='codeWhite'> = </code>
                        <code className='codeTawny'>'idle'</code>
                        <code className='codeWhite'>;</code>
                    </pre>
                    <pre className="paddingLeftlevel3">
                        <code className='codeSkyBlue'>state</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>data</code>
                        <code className='codeWhite'> = </code>
                        <code className='codeSkyBlue'>action</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>payload;</code>
                    </pre>
                    <pre className="paddingLeftlevel2"><code className='codeWhite'>{"});"}</code></pre>
                    <pre className="paddingLeftlevel2">
                        <code className='codeSkyBlue'>builder</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeYellow'>addCase</code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeCobaltBlue'>getEmployeeListAPIcall</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>rejected</code>
                        <code className='codeWhite'>, </code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeSkyBlue'>state</code>
                        {/* <code className='codeWhite'>, </code>
                                <code className='codeSkyBlue'>action</code> */}
                        <code className='codeWhite'>{")"}</code>
                        <code className='codeDarkBlue'>{" => "}</code>
                        <code className='codeWhite'>{"{"}</code>
                    </pre>
                    <pre className="paddingLeftlevel3">
                        <code className='codeSkyBlue'>state</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>loading</code>
                        <code className='codeWhite'> = </code>
                        <code className='codeTawny'>'idle'</code>
                        <code className='codeWhite'>;</code>
                    </pre>
                    <pre className="paddingLeftlevel3">
                        <code className='codeSkyBlue'>state</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>error</code>
                        <code className='codeWhite'> = </code>
                        <code className='codeTawny'>'Error occurred'</code>
                        <code className='codeWhite'>;</code>
                    </pre>
                    <pre className="paddingLeftlevel2"><code className='codeWhite'>{"});"}</code></pre>
                    <pre className="paddingLeftlevel1"><code className='codeWhite'>{"}"}</code></pre>
                    <pre><code className='codeWhite'>{"});"}</code></pre>
                    <br />
                    <pre>
                        <code className='codePink'>export default </code>
                        <code className='codeCobaltBlue'>getEmployeeListReducer</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeYellow'>reducer</code>
                        <code className='codeWhite'>;</code>
                    </pre>
                </div>
            </div>

            <div>
                <ul>
                    <li>'createSlice' is imported from '@reduxjs/toolkit' library that simplifies the process of creating Redux reducers and actions.
                        The slice is named 'getEmployeeData', used to identify the slice in the Redux store.
                    </li>
                    <li>initialState defines the initial state of the slice:
                        <ul>
                            <li>'data': An empty array to store the employee data.
                            </li>
                            <li>
                                'loading': A string to represent the loading state, initially set to 'idle'.
                            </li>
                            <li>
                                'error': Initially set to 'null', this will hold any error message if the API call fails.
                            </li>
                        </ul>
                    </li>
                    <li>
                        An empty object called 'reducers' that we are not defining any synchronous actions for this slice. Instead, we will handle asynchronous actions with 'extraReducers'.
                    </li>
                    <li>
                        'extraReducers' allows you to handle actions defined outside the slice, such as asynchronous thunks created with 'createAsyncThunk'. Use the builder object to add cases for the 'pending', 'fulfilled', and 'rejected' states of the 'getEmployeeListAPIcall' thunk.
                        <ul>
                            <li>Set loading to 'pending' when the API call is in progress.</li>
                            <li>Update 'data' and set 'loading' to 'idle' when the API call succeeds.</li>
                            <li>Set 'error' and 'loading' to 'idle' when the API call fails.</li>
                        </ul>
                    </li>
                    <li>Export the generated reducer function from the slice, so it can be included in the Redux store.</li>
                </ul>
            </div>

            {/* Step 5 */}
            <h5 style={{ color: props.getLightTheme === true ? "#046b71" : "#97b804" }} className="mb-0 mt-4" tabIndex="7">Step 5: Create Store</h5>
            <span>Create a new file with jsx extension. Import the exported Reducer from </span><span className="step4Ref"
                onClick={scrollToFirstDiv}>Step 4</span><span> and configure it into the Redux Store.
            </span>
            <div className="codeSnippetOuterBody mt-1 mb-2">
                <FancyHeader />
                <div className="codeSnippetInnerBody mt-2 mb-1">
                    <pre>
                        <code className='codePink'>import </code>
                        <code className='codeWhite'>{"{"}</code>
                        <code className='codeSkyBlue'>configureStore</code>
                        <code className='codeWhite'>{"}"}</code>
                        <code className='codePink'> from </code>
                        <code className='codeTawny'>'@reduxjs/toolkit'</code>
                        <code className='codeWhite'>;</code>
                    </pre>
                    <pre>
                        <code className='codePink'>import </code>
                        <code className='codeSkyBlue'>getEmployeeListReducer</code>
                        <code className='codePink'> from </code>
                        <code className='codeTawny'>'./path/to/getEmployeeListReducer'</code>
                        <code className='codeWhite'>;</code>
                    </pre>
                    <br />
                    <pre>
                        <code className='codePink'>import</code>
                        <code className='codeDarkBlue'> const </code>
                        <code className='codeCobaltBlue'>store</code>
                        <code className='codeWhite'> = </code>
                        <code className='codeYellow'>configureStore</code>
                        <code className='codeWhite'>{"({"}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className="codeSkyBlue">reducer: </code>
                        <code className="codeWhite">{"{"}</code>
                    </pre>
                    <pre className="paddingLeftlevel2">
                        <code className="codeYellow">getEmployeeData</code>
                        <code className="codeWhite">: </code>
                        <code className="codeYellow">getEmployeeListReducer</code>
                        <code className="codeWhite">,</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className="codeWhite">{"}"}</code>
                    </pre>
                    <pre>
                        <code className="codeWhite">{"});"}</code>
                    </pre>
                </div>
            </div>
            <div>
                <span>'configureStore' is imported from '@reduxjs/toolkit', that simplifies the process of creating a Redux store with defaults and recommended best practices. 'getEmployeeListReducer' is imported from the file where you defined your slice using 'createSlice'.</span><br />
                <p className="mt-2">The reducer key in the configuration object specifies how the root reducer is constructed. It accepts an object where keys are slice names and values are corresponding reducer functions.</p>
            </div>

            {/* Step 6 */}
            <h5 style={{ color: props.getLightTheme === true ? "#046b71" : "#97b804" }} className="mb-0 mt-4" tabIndex="8">Step 6: Wrap our entry point of the application(index.jsx) with Redux Provider</h5>
            <div className="codeSnippetOuterBody mt-2 mb-2">
                <FancyHeader />
                <div className="codeSnippetInnerBody mt-2 mb-1">
                    <pre>
                        <code className='codePink'>import </code>
                        <code className="codeYellow">React </code>
                        <code className="codePink">from </code>
                        <code className="codeTawny">'react'</code>
                        <code className="codeWhite">,</code>
                    </pre>
                    <pre>
                        <code className='codePink'>import </code>
                        <code className="codeYellow">ReactDOM </code>
                        <code className="codePink">from </code>
                        <code className="codeTawny">'react-dom/client'</code>
                        <code className="codeWhite">;</code>
                    </pre>
                    <pre>
                        <code className='codePink'>import </code>
                        <code className="codeYellow">App </code>
                        <code className="codePink">from </code>
                        <code className="codeTawny">'./App'</code>
                        <code className="codeWhite">;</code>
                    </pre>
                    <pre>
                        <code className='codePink'>import </code>
                        <code className='codeWhite'>{"{"} </code>
                        <code className="codeYellow">Provider </code>
                        <code className='codeWhite'>{"}"} </code>
                        <code className="codePink">from </code>
                        <code className="codeTawny">'react-redux'</code>
                        <code className="codeWhite">;</code>
                    </pre>
                    <pre>
                        <code className='codePink'>import </code>
                        <code className='codeWhite'>{"{"} </code>
                        <code className="codeYellow">store </code>
                        <code className='codeWhite'>{"}"} </code>
                        <code className="codePink">from </code>
                        <code className="codeTawny">'./Redux/Store/store'</code>
                        <code className="codeWhite">;</code>
                    </pre>
                    <pre className="pt-4">
                        <code className='codeDarkBlue'>const</code>
                        <code className='codeCobaltBlue'> root </code>
                        <code className='codeWhite'>= </code>
                        <code className='codeSkyBlue'>ReactDOM</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeYellow'>createRoot</code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeSkyBlue'>document</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeYellow'>getElementById</code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeTawny'>'root'</code>
                        <code className='codeWhite'>{"));"}</code>
                    </pre>
                    <pre>
                        <code className='codeCobaltBlue'>root</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeYellow'>render</code>
                        <code className='codeWhite'>{"("}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeGrey'>{"<"}</code>
                        <code className='codeGreen'>Provider </code>
                        <code className='codeSkyBlue'>store</code>
                        <code className='codeWhite'>=</code>
                        <code className='codeCobaltBlue'>{"{store}"}</code>
                        <code className='codeGrey'>{">"}</code>
                    </pre>
                    <pre className="paddingLeftlevel2">
                        <code className='codeGrey'>{"<"}</code>
                        <code className='codeGreen'>App </code>
                        <code className='codeGrey'>{"/>"}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeGrey'>{"</"}</code>
                        <code className='codeGreen'>Provider</code>
                        <code className='codeGrey'>{">"}</code>
                    </pre>
                    <pre>
                        <code className="codeWhite">{");"}</code>
                    </pre>
                </div>
            </div>
            <div>
                <span>Import the 'Provider' from 'react-redux' library and import the 'store' that you have created from Step 5. The Provider component is used to wrap your application. This 'store' takes as a prop, and makes the Redux store available to any nested components/modules that need access to the store's state or dispatch functions.</span>
            </div>


            {/* Step 7 */}
            <h5 style={{ color: props.getLightTheme === true ? "#046b71" : "#97b804" }} className="mb-2 mt-4" tabIndex="9">Step 7: Get the outcome data from Redux Store using useReducer hook</h5>
            <div className="codeSnippetOuterBody mb-2">
                <FancyHeader />
                <div className="codeSnippetInnerBody mt-2 mb-1">
                    <pre>
                        <code className="codeDarkBlue">const</code>
                        <code className="codeCobaltBlue"> getEmployeeListCall </code>
                        <code className="codeWhite">= </code>
                        <code className="codeYellow">useSelector</code>
                        <code className="codePink">{"("}</code>
                        <code className="codeCobaltBlue">{"("}</code>
                        <code className="codeSkyBlue">state</code>
                        <code className="codeCobaltBlue">{") "}</code>
                        <code className="codeDarkBlue">{"=>"}</code>
                        <code className="codeSkyBlue"> state</code>
                        <code className="codeWhite">.</code>
                        <code className="codeSkyBlue">getEmployeeData</code>
                        <code className="codePink">{")"}</code>
                        <code className="codeWhite">{";"}</code>
                    </pre>
                    <pre className="mt-3">
                        <code className='codeYellow'>useEffect</code>
                        <code className="codePink">{'('}</code>
                        <code className='codeWhite'>{"() "}</code>
                        <code className='codeDarkBlue'>{"=> "}</code>
                        <code className='codeWhite'>{"{"}</code>
                    </pre>

                    <pre className="paddingLeftlevel1">
                        <code className='codePink'>if</code>
                        <code className='codeWhite'>{" ("}</code>
                        <code className='codeCobaltBlue'>getEmployeeListState</code>
                        <code className='codeWhite'>{" !== "}</code>
                        <code className='codeDarkBlue'>undefined</code>
                        <code className='codeWhite'>{") {"}</code>
                    </pre>


                    <pre className="paddingLeftlevel1">
                        <code className='codeSkyBlue'>console</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeYellow'>log</code>
                        <code className='codeWhite'>{"("}</code>
                        <code className='codeCobaltBlue'>getEmployeeListState</code>
                        <code className='codeWhite'>.</code>
                        <code className='codeSkyBlue'>data</code>
                        <code className='codeWhite'>{");"}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className="codeCommentGreen">{"// add your functions here"}</code>
                    </pre>
                    <pre className="paddingLeftlevel1">
                        <code className='codeWhite'>{"}}, ["}</code>
                        <code className='codeCobaltBlue'>getEmployeeListState</code>
                        <code className='codeWhite'>{"]"}</code>
                        <code className='codePink'>{")"}</code>
                    </pre>

                </div>
            </div>
            <div>
                <span>Import the 'useSelector' from 'react-redux' library to access the Redux store's state within a functional component.</span>
                <span>Here, 'state.getEmployeeData' refers to the slice of state managed by the 'getEmployeeListReducer' you set up earlier. The result of this selector function is stored in the variable 'getEmployeeListCall'.</span>
            </div>

            {/* conclusion */}
            <h5 style={{ color: props.getLightTheme === true ? "#046b71" : "#97b804" }} className="mb-2 mt-4" tabIndex="10">Conclusion</h5>

            <span>Once you’ve finished coding and linked all components together, it’s time to run your app. Just open your terminal or command prompt in the same folder where your project is located. Then, start your app by using "npm start" or yarn start if you are using yarn. </span> <br />
            <p className="mt-2"> Once launch your application in the web browser, send the request using your API end point, track the state changes while getting response from the Server, get the response data using 'useReducer' from 'Store' then set the data and do actions based on your needs.</p>
        </div>
    )
}

export default ReduxCodeSnippet;