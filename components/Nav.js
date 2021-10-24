import NavItem from "./NavItem";

const Nav = () => {
  return (
    <ul className='flex justify-center space-x-10 py-20'>
      <NavItem>Profile</NavItem>
      <NavItem>Skill</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Contacts</NavItem>
    </ul>
  );
};

export default Nav;
