import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/LenglerWeb.png" alt="Lengler Web"/>
            <div>
                <strong>Lengler Web</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}