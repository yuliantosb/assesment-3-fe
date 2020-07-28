import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Beranda</Link>
                </li>
                <li>
                    <Link to="/buku">Daftar Buku</Link>
                </li>
                <li>
                    <Link to="/pinjam">Daftar Pinjam</Link>
                </li>
                <li>
                    <Link to="/anggota">Daftar Anggota</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
