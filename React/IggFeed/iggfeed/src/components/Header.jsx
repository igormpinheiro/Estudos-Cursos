import styles from './Header.module.css'

import iggLogo from '../assets/react.svg'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={iggLogo} alt="Logo da página"/>
            <strong>Igg Feed</strong>
        </header>
    )
}