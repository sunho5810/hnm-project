import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Navbar = () => {
    
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"];

    const authenticate = useSelector((state) => state.auth.authenticate);

    const Navigate = useNavigate();

    const dispatch = useDispatch();

    const gotoLogin = () => {
        authenticate == true ? dispatch(authenticateAction.checkAuthenticate(false)) : Navigate('/login');
    }
    
    const gotoHome = () => {
        Navigate('/');
    }

    const search = (e) => {
        if(e.key == "Enter"){
            console.log("Enter!!!");
            let keyword = e.target.value;
            Navigate(`/?q=${keyword}`);
        }
    }

  return (
    <div>
        <div className='nav-top'>
            <div className='loginBtn' onClick={gotoLogin}>
                <FontAwesomeIcon icon={faUser} />
                {authenticate == true ? "로그아웃" : "로그인"}
            </div>
        </div>

        <div className='nav-logo'>
            <img src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg' alt='로고' onClick={gotoHome}/>
        </div>

        <div className='nav'>
            <ul className='nav-list'>
                {menuList.map((item)=>(
                    <li className='nav-item' key={item} item={item}>{item}</li>
                ))}
            </ul>
            <div className='search'>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" className='searchInput' placeholder='제품 검색' onKeyPress={(e) => search(e)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar