import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/igormpinheiro.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.authorAndTime}>
                        <div>
                            <strong>Igor Pinheiro</strong>
                            <time dateTime='2023-05-11 14:22:00'>Publicado há 5 min</time>
                        </div>
                        <button title='Deletar'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Massa demais, vc é show. Mal conheço e já considero pakas!!!</p>
                </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir
                    <span>20</span>
                </button>
            </footer>
            </div>
        </div>
    )
}