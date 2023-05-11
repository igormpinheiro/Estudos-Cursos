import { Avatar } from './Avatar';
import { Comment } from './Comment';

import { format, formatDistanceToNow, set } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { useState } from 'react';

// {id: 1, text: 'Massa demais, vc é show. Mal conheço e já considero pakas!!!'},
// {id: 2, text: 'Massa demais, vc é show. Mal conheço e já considero pakas!!!'},
// {id: 3, text: 'Massa demais, vc é show. Mal conheço e já considero pakas!!!'},]);

export default function Post({ author, content, publishAt }) {
    
    const [comments, setComments] = useState(['Post mto legal']);
    
    const [newCommentText, setNewCommentText] = useState('');
    
    const formattedDate = format(publishAt, "dd LLLL 'às' HH:mm'h'", { locale: ptBR });

    const publishDateRelativeToNow = formatDistanceToNow(publishAt, { locale: ptBR, addSuffix: true });

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText])

        setNewCommentText('');
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Não deixe o comentário em branco!');
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={formattedDate}
                    dateTime={publishAt.toISOString()}>
                    {publishDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })
                }
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário...'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button
                     type='submit'
                     disabled={!newCommentText}
                     >
                        Comentar
                    </button>
                </footer>
            </form>

            <div className={styles.CommentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>


        </article>
    )
}

