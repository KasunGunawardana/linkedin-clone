import React from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide'
import Main from './Main'
import RightSide from './RightSide'

const Home = () => {
  return (
    <ContainerFluid>
      <Container>
        <Layout>
          <LeftSide />
          <Main />
          <RightSide />
        </Layout>
      </Container>
    </ContainerFluid>
  )
}

const ContainerFluid = styled.div`

`

const Container = styled.div`
  padding: 0 15px;
  max-width: 1128px; 
  margin: 0 auto;
`

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 70px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`


export default Home