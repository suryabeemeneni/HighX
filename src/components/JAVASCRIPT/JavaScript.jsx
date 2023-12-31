import React from 'react';
import './JavaScript.css'
import JavaScriptTop from './JavaScriptSub/JavaScriptTop';
import JavaScriptTask from './JavaScriptSub/JavaScriptTask';
import JavaScriptTasks from './JavaScriptSub/JavaScriptTasks';

const JavaScript = () => {
    return (
        <>
            <JavaScriptTop />
            <JavaScriptTask />
            <JavaScriptTasks />
        </>
    );
};

export default JavaScript;