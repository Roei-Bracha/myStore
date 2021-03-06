import React from 'react';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {createStructuredSelector} from "reselect";

import {auth} from '../../firebase/firebase.utils'

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {HeaderComponent, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from "./header.styles";

const Header = ({ currentUser, hidden}) => {
  return (
    <HeaderComponent>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink  to='/shop'>
          SHOP
      </OptionLink>
        <OptionLink  to='/shop'>
          CONTACT
      </OptionLink>
        {currentUser ?
          <OptionDiv onClick={() => auth.signOut()}>
            SIGN OUT
        </OptionDiv>
          :
          <OptionLink to='/signin'>
            Sign In
          </OptionLink>
        }
        <CartIcon/>
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderComponent>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});


export default connect(mapStateToProps)(Header);
