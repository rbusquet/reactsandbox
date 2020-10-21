import SidebarBody from "./08-sidebarbody";

export interface SidebarWithComponents extends React.FC {
  Body: typeof SidebarBody;
}

const Sidebar: SidebarWithComponents = ({ children }) => {
  return <div>{children}</div>;
};

Sidebar.Body = SidebarBody;
export default Sidebar;
