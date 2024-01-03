import React from 'react';
import './JavaScript.css'
import JavaScriptTop from './JavaScriptSub/JavaScriptTop';
import JavaScriptTask from './JavaScriptSub/JavaScriptTask';
import JavaScriptTasks from './JavaScriptSub/JavaScriptTasks';
import JavaScriptfaq from './JavaScriptSub/JavaScriptfaq';

const JavaScript = () => {
    return (
        <>
            <JavaScriptTop />
            <JavaScriptTask />
            <JavaScriptTasks />
            <JavaScriptfaq />
        </>
    );
};

export default JavaScript;