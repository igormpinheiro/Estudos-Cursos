import { Avatar } from './Avatar.jsx'
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeCount() {
        setLikeCount(likeCount + 1);
    }


    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/DmitrySoshnikov.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.authorAndTime}>
                        <div>
                            <strong>Igor Pinheiro</strong>
                            <time dateTime='2023-05-11 14:22:00'>Publicado há 5 min</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
            <footer>
                <button onClick={handleLikeCount}>
                    <ThumbsUp/>
                    Aplaudir
                    <span>{likeCount}</span>
                </button>
            </footer>
            </div>
        </div>
    )
}