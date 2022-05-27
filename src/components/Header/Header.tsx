import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const HeaderContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')};
  width: calc(100% - 160px);
  padding: 0 80px;
  height: 94px;
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 900;
`;

const GNB = styled.nav`
  ul {
    ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')}
  }

  li {
    margin: 0 12px;
    color: ${({ theme }) => theme.colors.black};
  }

  li:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const SideMenuContainer = styled.span`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
  width: 66px;
  padding: 0 5px;
  height: 40px;
  background: #fff;
  border-radius: 20px;
`;

const PersonIcon = styled(PersonOutlineOutlinedIcon)`
  background: #828282;
  border-radius: 50%;
  margin-left: 5px;
  color: #fff;
  padding: 3px;
  font-size: 8px;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>OL-bnb</Logo>
    <GNB>
      <ul>
        <li>숙소</li>
        <li>체험</li>
        <li>온라인 체험</li>
      </ul>
    </GNB>
    <SideMenuContainer>
      <MenuIcon />
      <PersonIcon />
    </SideMenuContainer>
  </HeaderContainer>
);

export default Header;
