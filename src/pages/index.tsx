import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import Card from '@/components/Card'
import 'material-icons/iconfont/material-icons.css';
import useWebSocket from 'react-use-websocket';
const useStyles = createUseStyles({
  main: {
    display: 'flex',
    opacity: '0.8',
    flexDirection: 'column',
    height: '100vh',
    gap: 100
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default function Home() {
  const classes = useStyles()


  return (
    <>
      <Head>
        <title>Neofi Frotend</title>
        <meta name="description" content="Neofi Assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.main}>

        <Header />
        <div className={classes.card}>
          <Card />
        </div>
      </div>
    </>
  )
}
