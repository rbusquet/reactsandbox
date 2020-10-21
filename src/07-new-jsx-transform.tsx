import * as React from "react";

type SidebarWithComponents = {
  Body: typeof SidebarBody; // I have to make Body optional to be able to assign it's value after declaration of Sidebar component
};

const Sidebar: React.FC & SidebarWithComponents = () => {
  return <>0</>;
};
const SidebarBody: React.FC = () => {
  return <>1</>;
};
function App() {
  return (
    <Sidebar>
      <Sidebar.Body></Sidebar.Body>
    </Sidebar>
  );
}

Sidebar.Body = SidebarBody;

export { App };
