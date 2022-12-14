import {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div style={{backgroundColor:'white', width:'100%', position:'fixed', left:0, top:0, zIndex:10}}>
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link to={'/'} id="logo">toto<b>bank</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/make-account'}>계좌개설</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/deposit'}>입금</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/withdraw'}>출금</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/transfer'}>계좌이체</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/account-info'}>계좌조회</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/account-list'}>계좌목록</Link>
                    </li>
                </ul>
            </div>    
        )
    }
}

export default Header;
