import Post from "./components/Post"
import { Sidebar } from './components/Sidebar'
import { Header } from "./components/Header"

import './global.css'
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Igor Martins"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus ipsum quam! Unde quo enim deserunt totam veritatis eaque repudiandae atque commodi odio. Sunt vero, mollitia quo accusantium nemo alias?"
          />
          </main>
      </div>
    </div>
  )
}

export default App

