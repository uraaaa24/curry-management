import ButtonGroup from '@/components/ButtonGroup'
import Inventory from '@/components/inventory'
import Menu from '@/components/menu'
import { Paper, Typography } from '@mui/material'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Paper elevation={4} sx={{ maxWidth: 800, mx: 'auto', my: 6, p: 4 }}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            在庫管理システム
          </Typography>
          <Inventory />
          <Menu />
          <ButtonGroup />
        </Paper>
      </main>
    </>
  )
}
