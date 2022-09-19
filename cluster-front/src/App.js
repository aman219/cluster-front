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
import Theam from './components/Theam';
import Quality from './components/Quality';
import DeleteAccount from './components/DeleteAccount';
import AudioPlay from './components/AudioPlay';
import VideoPlay from './components/VideoPlay';

function App() {
  const [left, setLeft] = useState(200)
  const [bar, setBar] = useState("fa-bars")

  return (
    <BrowserRouter>
      <div className="App">
        <Header setLeft={setLeft} left={left} bar={bar} setBar={setBar} />
        <Sidebar left={left} setLeft={setLeft} setBar={setBar} />
        <Routes>
          <Route path="/" element={<Dashboard/>} ></Route>
          <Route path='audio/' element={<AudioList/>}></Route>
          <Route path='video/' element={<Video/>}></Route>
          <Route path='image/' element={<Image/>}></Route>
          <Route path='upload/' element={<Upload/>}></Route>
          <Route path='settings/' element={<Setting/>}></Route>
          <Route path='settings/theam/' element={<Theam/>}></Route>
          <Route path='settings/quality/' element={<Quality/>}></Route>
          <Route path='settings/delete/' element={<DeleteAccount/>}></Route>
          <Route path='audio/:id/' element={<AudioPlay/>}></Route>
          <Route path='video/:id' element={<VideoPlay/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
