import React from 'react';
import styled from 'styled-components';
import healthbar from '../../../assets/healthbar.png';
import skillborder from '../../../assets/skillborder.png';
import menuButton from '../../../assets/menuButton.png';

const CombatUi = () => {
  const [playerHealth, setPlayerHealth] = React.useState(100);
  const [playerHype, setPlayerHype] = React.useState(100);

  return(
    <div>
      <HealthHud src={healthbar}/>
      <SkillHud src={skillborder}/>
      <Wrapper>
        <Bar type={'health'} fullness={playerHealth}>HEALTH</Bar>
        <Bar type={'hype'} fullness={playerHype}>HYPE</Bar>
      </Wrapper>
      <ButtonDiv>
        <button onClick={() => setPlayerHealth(playerHealth - 10)}>lower health</button>
        <button onClick={() => setPlayerHype(playerHype - 10)}>lower hype</button>
        <button onClick={() => setPlayerHealth(playerHealth + 10)}>increase health</button>
        <button onClick={() => setPlayerHype(playerHype + 10)}>increase hype</button>
      </ButtonDiv>
      <SkillsDiv>
        <Skill>SKILL</Skill>
        <Skill>SKILL</Skill>
        <Skill>SKILL</Skill>
        <Skill>SKILL</Skill>
      </SkillsDiv>
      <MenuDiv>
        <img src={menuButton} alt='menu button'/> 
      </MenuDiv>
    </div>
  )
}

const MenuDiv = styled.div`
  cursor: pointer;
  display: flex;
  position: absolute;
  bottom:0px;
  right: 0px;
  align-items: center;
  justify-content: center;
`

const Skill = styled.div`
  height: 50px;
  width: 50px;
  outline: 3px solid red;
  border-radius: 1px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  cursor: pointer;
`

const SkillsDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 18px;
  left: 19px;
`

const SkillHud = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0px;
`

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left:0px;
  top: 200px;
`

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 57px;
`

const Bar = styled.div`
  width: ${(props) => `${props.fullness * 3}px`};
  background-color: ${(props) => 
    props.type === 'health'
    ? 'red'
  : 'purple'};
  outline: 2px solid yellow;
`

const HealthHud = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
`

export default CombatUi