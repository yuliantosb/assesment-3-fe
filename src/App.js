import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Beranda from './components/Beranda'
import Buku from './components/Buku'
import TambahBuku from './components/TambahBuku'
import UbahBuku from './components/UbahBuku'
import Pinjam from './components/Pinjam'
import Anggota from './components/Anggota'
import Navbar from './components/Navbar'

function App(props) {
  return ( 
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Layout {...props}>
            <Route exact path="/">
              <Beranda />
            </Route>
            <Route exact path="/buku">
              <Buku />
            </Route>
            <Route exact path="/buku/tambah" component={(props) => <TambahBuku {...props} />} />
            <Route exact path="/buku/ubah/:id" component={(props) => <UbahBuku {...props} />} />
            <Route exact path="/pinjam">
              <Pinjam />
            </Route>
            <Route exact path="/anggota">
              <Anggota />
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>
  )
}

export default App
