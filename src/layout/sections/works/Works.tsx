import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import {Menu} from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Work} from '../works/Work';
import socialImg from '../../../assets/images/yandexIntern.jpeg';
import timerImg from '../../../assets/images/portfolio.png';
import { Container } from '../../../components/Container';

const worksItems = ["ALL", "Experience", "My projects"];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionTitle> My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"internship at Yandex"} text={"Theory and practical experience in web development"} src={socialImg}/>
                <Work title={"Portfolio"} text={"TypeScript, ReactJs, css etc"} src={timerImg}/>
            </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`  
max-height: 70vh;
display: flex;
justify-content: center;
align-items: center;
min-width: 1170px;
`