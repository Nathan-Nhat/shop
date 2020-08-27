import React from 'react';
import './base_header_1st.css'
import {AiOutlinePhone} from 'react-icons/ai'

const BaseHeader1St = () => {
    return (
        <div className="container-fluid d-none d-md-block">
            <div className="row bh-1st-container">
                <div className="col-lg-4 col-12 bh-1st-element1">
                <span className='bh-1st-icon-phone'>
                    <AiOutlinePhone/>
                </span>
                    <span className='bh-1st-phone'> trantrungnhat6196@gmail.com</span>
                </div>
                <div className="col-lg-4 col-12 bh-1st-element2">
                    <span className="bh-1st-phone">Summer sale discount off 50%! Shop Now</span>
                </div>
                <div className="col-lg-4 col-12 bh-1st-element3">
                    <span className="bh-1st-phone">Viet Nam</span>
                </div>
            </div>
        </div>
    );
};

export default BaseHeader1St;