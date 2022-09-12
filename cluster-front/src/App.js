import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard'
import AudioList from './components/AudioList';
import Video from './components/Video';
import Image from './components/Image';
import Upload from './components/Upload'
import Setting from './components/Setting'

function App() {
  const [left, setLeft] = useState(200)
  const [bar, setBar] = useState("fa-bars")

  return (
    <BrowserRouter>
      <div className="App">
        <Header setLeft={setLeft} left={left} bar={bar} setBar={setBar} />
        <Sidebar left={left} setLeft={setLeft} setBar={setBar} />
        <Routes>
          <Route path="dashboard/" element={<Dashboard/>} ></Route>
          <Route path='audio/' element={<AudioList/>}></Route>
          <Route path='video/' element={<Video/>}></Route>
          <Route path='image/' element={<Image/>}></Route>
          <Route path='upload/' element={<Upload/>}></Route>
          <Route path='settings/' element={<Setting/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
