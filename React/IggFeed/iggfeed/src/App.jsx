import Post from "./components/Post"
import { Sidebar } from './components/Sidebar'
import { Header } from "./components/Header"

import './global.css'
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {
        type: 'paragraph', 
        content: 'Fala devs e devas'
      },
      {
        type: 'paragraph', 
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui esse autem commodi iusto repellendus sint cupiditate culpa nam non consectetur, ex, necessitatibus perspiciatis cum saepe, reprehenderit reiciendis harum quod!' 
      },
      {
        type: 'link', 
        content: 'dev.io/diego3g'
      },
    ],
    publishAt: new Date('2023-05-11 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/andrebaltieri.png',
      name: 'Andre Baltieri',
      role: 'Microsoft MVP'
    },
    content: [
      {
        type: 'paragraph', 
        content: 'Fala meu povo'
      },
      {
        type: 'paragraph', 
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui esse autem commodi iusto repellendus sint cupiditate culpa nam non consectetur, ex, necessitatibus perspiciatis cum saepe, reprehenderit reiciendis harum quod!' 
      },
      {
        type: 'link', 
        content: 'balta.io'
      },
    ],
    publishAt: new Date('2023-05-09 20:00:00')
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          })}
         </main>
      </div>
    </div>
  )
}

export default App

