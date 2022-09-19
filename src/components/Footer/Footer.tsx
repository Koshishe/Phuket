import React from 'react'
import styles from './Footer.module.scss'
import { TGRound } from '@/ui/svg/TGRound'
import { IGRound } from '@/ui/svg/IGRound'
import { FBRound } from '@/ui/svg/FBRound'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.text}>Kosh</div>
        <div className={styles.text}>2022</div>
        <div className={styles.socials}>
          <a href="#" className={styles.socialLink}>
            <TGRound />
          </a>
          <a href="#" className={styles.socialLink}>
            <IGRound />
          </a>
          <a href="#" className={styles.socialLink}>
            <FBRound />
          </a>
        </div>
      </div>
    </footer>
  )
}
