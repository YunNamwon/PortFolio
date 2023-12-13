import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Skills } from "./components/Skills"
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom"
import { Projects } from "./components/Projects";
import { ProjectDetails } from "./components/ProjectDetails"

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg, 
    rgba(204, 0, 187, 0.15) 0%, 
    rgba(201, 32, 184, 0) 50%
    ), 
    linear-gradient(
      141.27deg, 
      rgba(0, 70, 209, 0) 50%, 
      rgba(0, 70, 209, 0.15) 100%
      );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
      <Navbar />
      <Body>
        <HeroSection />
        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            
          </Wrapper>
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;


// Wrapper 코드는 background 속성으로 두 개의 linear-gradient를 정의하고 있습니다. 각 linear-gradient는 색상의 그라데이션 효과를 생성합니다.
// 첫 번째 linear-gradient:
// 각도(38.73deg)
// 시작 색상(rgba(204, 0, 187, 0.15))에서 끝 색상(rgba(201, 32, 184, 0))까지의 그라데이션을 나타냅니다.
// 그라데이션의 50% 지점에서 색상이 투명해집니다.
// 두 번째 linear-gradient:

// 각도(141.27deg)
// 시작 색상(rgba(0, 70, 209, 0))에서 끝 색상(rgba(0, 70, 209, 0.15))까지의 그라데이션을 나타냅니다.
// 그라데이션의 50% 지점에서 색상이 투명해집니다.
// 이후에는 width 속성으로 너비를 100%로 설정하고, 
// clip-path 속성을 사용하여 다각형 모양의 클리핑 경로를 정의하고 있습니다. 
// polygon() 함수는 다각형의 꼭지점을 정의하며, 이를 통해 요소의 모양을 정의할 수 있습니다. 
// 위 코드에서는 왼쪽 위, 오른쪽 위, 오른쪽 아래, 왼쪽 아래, 중간 아래 5개의 꼭지점을 지정하여 다각형 모양을 만들어냅니다.