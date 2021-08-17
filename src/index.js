import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColoredUserpic from "./ColoredUserpic";

ReactDOM.render(
    <ColoredUserpic
        size={150}
        margin={4}
        colorWidth={6}
        backgroundColor='aliceblue'
        colors={['#00eaff', '#400099']}
        hoverColors={['#400099', '#00eaff']}
    />,
    document.getElementById('root')
);
