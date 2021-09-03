import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRouter,
  SidebarWrap,
} from './SidebarStyles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full menu</SidebarLink>
      </SidebarMenu>
      <SidebarWrap>
        <SidebarRouter to="/">Order</SidebarRouter>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
