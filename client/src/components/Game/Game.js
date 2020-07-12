import React from 'react';
import styled from 'styled-components';
<<<<<<< Updated upstream
import FightPrototype from './FightPrototype';
import CutscenePrototype from './CutscenePrototype';
import MinigamePrototype from './MinigamePrototype';
import Customizer from './CustomizerPrototype';
import EricTest from './EricTest';
import { scenes } from '../../chapters/gameScenes';
<<<<<<< HEAD
import CombatTestEnvironment from './EricTest'
=======
import { useDispatch, useSelector } from 'react-redux';
import { setScene } from '../../actions';
>>>>>>> f739ad7c5ac61f679253895a702db515786c28c1

=======
import Overworld from './Overworld';
import MenuBar from './MenuBar';
import CharacterDisplay from './CharacterDisplay';
import PlayerSetup from './PlayerSetup';
import StatusBars from './StatusBars';
import CombatUi from './EricTest/CombatUi'
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
function Game() {
  const dispatch = useDispatch();
  const scene = useSelector((state) => state.game.scene);
  // The game component will be the body of the game, will show a number of different UIs depending on what is going on in the game.
  // As to that, there will be a database-esque 'scenes' file containing a number of scripts that will be fed into the game module
  // to tell it what to show.
  // Next button handler function advances the scene:
  const handleAdvance = () => {
    // If there is a scene,
    if (scenes[`scene_${scene}`]) {
      // Move to the next scene:
      console.log('ping');
      dispatch(setScene(scene + 1));
    }
  };
  const renderScene = (scene) => {
    switch (scene.type) {
      case 'cutscene':
        return <CutscenePrototype scene={scene.name} />;
      case 'fight':
<<<<<<< HEAD
        return <CombatTestEnvironment />;
=======
        return <EricTest />;
>>>>>>> f739ad7c5ac61f679253895a702db515786c28c1
      case 'minigame':
        return <MinigamePrototype />;
      case 'customizer':
        return <Customizer />;
    }
  };
  return (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <GameBody>
      {scenes[`scene_${scene}`] ? (
        renderScene(scenes[`scene_${scene}`])
      ) : (
        <> </>
      )}
      <button style={{ marginTop: 16 }} onClick={handleAdvance}>
        Next
      </button>
    </GameBody>
  );
}

const GameBody = styled.div`
  border: 3px solid limegreen;
  border-radius: 16px;
  padding: 16px;
  display: grid;
  height: 90vh;
  grid-template-areas:
    'ui'
    'next';
  grid-template-rows: 11fr 0.8fr;
`;
=======
    <div>
      <Overworld />
      <CombatUi/>
    </div> 
  );
}

=======
    <div>
      <Overworld />
      <CombatUi/>
    </div> 
  );
}

>>>>>>> Stashed changes
// const GameBody = styled.div`
//   display: grid;
//   grid-template-areas:
//     'mainmenu mainmenu mainmenu mainmenu'
//     'disp disp bars bars'
//     'disp disp stat stat'
//     'map map map map'
//     'map map map map';
//   grid-template-rows: 4fr 9fr 9fr 9fr 9fr;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   max-height: 90vh;
// `;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

export default Game;
