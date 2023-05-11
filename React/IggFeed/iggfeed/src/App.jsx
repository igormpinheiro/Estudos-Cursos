import Post from "./Post"
import { Header } from "./components/Header"
import './global.css'

function App() {
  return (
    <>
    <Header />
    <Post 
      author="Igor Martins"
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatibus ipsum quam! Unde quo enim deserunt totam veritatis eaque repudiandae atque commodi odio. Sunt vero, mollitia quo accusantium nemo alias?"
    />
    </>
  )
}

export default App

