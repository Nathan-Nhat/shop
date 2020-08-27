import React from 'react';
import './base_header.css'
import BaseHeader1St from "./base_header_1st";
import BaseHeader2Nd from "./base_header_2nd";
const BaseHeader = () => {
    return (
        <header>
            <BaseHeader1St/>
            <BaseHeader2Nd />
        </header>
    );
};

export default BaseHeader;