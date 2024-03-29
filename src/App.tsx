import React from 'react';
import { Home } from './Components/Home/Home';
import { Menu } from './Components/Menu/Menu';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { Artwork } from './Components/Artwork/Artwork';
import { Design } from './Components/Design/Design';
import { About } from './Components/About/About';
import DesignDetails from './Components/DesignDetails/DesignDetails';
import DesignElem from './Components/DesignElem/DesignElem';
import { DesignDetailsObj } from './Types/DesignDetailsObj'
import { Contact } from './Components/Contact/Contact';
import bannerClose from './Resources/Images/CloseProject/CloseBannerDesign.png';


function App() {
  const [designDetailElems, setDesignDetailsElems] = React.useState<DesignDetailsObj[]>([
    {

      id: 0,
      role: 'jaja',
      tasks: 'Designer',
      bannerImg:bannerClose,
      subtitle1: 'Designer',
      paragraph1: 'Designer',
      image1: 'Designer',
      subtitle2: 'Designer',
      paragraph2: 'Designer',
      image2: 'Designer',
      subtitle3: 'Designer',
      paragraph3: 'Designer',
      image3: 'Designer',
      subtitle4: 'Designer',
      paragraph4: 'Designer',
      image4: 'Designer',

    },
    {

      id: 1,
      role: 'agh',
      tasks: 'Designer',
      bannerImg:bannerClose,
      subtitle1: 'Designer',
      paragraph1: 'Designer',
      image1: 'Designer',
      subtitle2: 'Designer',
      paragraph2: 'Designer',
      image2: 'Designer',
      subtitle3: 'Designer',
      paragraph3: 'Designer',
      image3: 'Designer',
      subtitle4: 'Designer',
      paragraph4: 'Designer',
      image4: 'Designer',

    },

  ]);
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/design"} element={<Design />} />
        <Route path={"/artwork"} element={<Artwork />} />
        <Route path={"/design/:id"} element={<DesignDetails list={designDetailElems} />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
