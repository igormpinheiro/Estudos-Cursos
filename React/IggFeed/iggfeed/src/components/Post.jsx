import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
export default function Post()
{
    return ( 
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/andrebaltieri.png" />
                    <div className={styles.authorInfo}>
                        <strong>Andre Baltieri</strong>
                        <span>MS MVP</span>
                    </div>
                </div>
                <time dateTime='2023-05-11 14:22:00'>Publicado há 5 min</time>
            </header>
            <div className={styles.content}>
                <p>Fala devs de devas</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis dicta nemo veniam consequatur. Repellendus, officia maxime quam fugiat asperiores tempore unde sequi non odit explicabo perspiciatis nihil ipsa animi!</p>
                <p><a href="#">igor.dev/iggfeed</a></p>
                <p><a href="#">#helloworld #noisnafita</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário...'
                    />
                    <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.CommentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>


        </article>
    )
}

