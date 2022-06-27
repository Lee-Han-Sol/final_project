import React, { Component } from 'react';
import mypage from '../assets/css/Mypage.module.css'
import MypageInfo from './MypageInfo';
import MypageTop from './MypageTop';

class CartEdit extends Component {
    
    render() {
        return (
            <div className={mypage.container}>
                <div className={mypage.menu}>
                    <MypageTop/>
                </div>
                <div className={mypage.my}> 
                    <MypageInfo/>
                </div>
            </div>
        );
    }
}

export default CartEdit;