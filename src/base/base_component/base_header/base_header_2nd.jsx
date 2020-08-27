import React from 'react';
import Logo from '../../../asset/logo.svg'
import './base_header_2nd.css'
import {BsSearch, BsHeart} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import {VscThreeBars} from 'react-icons/vsc'
const BaseHeader2Nd = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 d-xl-none align-self-center d-lg-inline-block">
                    <VscThreeBars/>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-6 p-3 align-self-center text-center text-xl-left">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="col-6 d-none d-xl-block align-self-center">
                    <nav>
                        <ul className="bh-2nd-ul">
                            <li>
                                Trang chủ
                            </li>
                            <li>
                                Sản phẩm
                            </li>
                            <li>
                                Giới thiệu
                            </li>
                            <li>
                                Tin tức
                            </li>
                            <li>
                                Liên hệ
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-3 align-self-center bh-2nd-right">
                    <span>
                        <BsSearch/>
                    </span>
                    <span className="d-none d-md-inline-block">
                        <BsHeart/>
                    </span>
                    <span>
                        <FiShoppingCart/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BaseHeader2Nd;