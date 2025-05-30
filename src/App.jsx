import styled, { createGlobalStyle } from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin } from "./styles/styles";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body {
  background-color: #121212;
}

`;

const StyledSection = styled.section`
  ${flexMixin({
    justify: "center",
    align: "center",
    wrap: "wrap",
    gap: "20px",
  })}
  padding: 20px 40px;
`;

function App() {
  return (
    <>
      <main>
        <GlobalStyle />
        <Header />
        <StyledSection>
          {contents.map((el) => (
            <Content key={el.id} content={el} />
          ))}
        </StyledSection>
      </main>
    </>
  );
}

export default App;
