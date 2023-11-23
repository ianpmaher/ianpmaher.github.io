import styled from "styled-components";

const SidebarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 0;
    height: 100vh;
    width: 10rem;
    background-color: #51A3A3;
    padding: 1rem;
    flex: 0 0 12rem;
    order: -1;
    @media (max-width: 768px) {
        width: 5rem;
    }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            sidebar
        </SidebarContainer>
    );
}

export default Sidebar;