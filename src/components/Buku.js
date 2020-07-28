import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Buku() {

    const [bukus, setBukus] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getBukus()
    }, [])

    const getBukus = () => {
        setLoading(true)
        axios.get('http://localhost:3333/buku')
        .then(res => {
            setBukus(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }

    const handleDelete = (id) => {
        setLoading(true)
        axios.delete(`http://localhost:3333/buku/${id}`)
        .then(res => {
            setLoading(false)
            getBukus()
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }

    return (
        <div>
            <p>Buku</p>
            <Link to="/buku/tambah">Tambah Buku</Link>
            <br />
            <table border="1">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Rak</th>
                        <th>Stok</th>
                        <th>Opsi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? (
                            <tr>
                                <td colSpan="3">Loading....</td>
                            </tr>
                        ) : bukus && bukus.map(buku => {
                            return (
                                <tr key={buku.id}>
                                    <td>{buku.nama}</td>
                                    <td>{buku.rak}</td>
                                    <td>{buku.stok}</td>
                                    <td>
                                        <Fragment>
                                            <Link to={`/buku/ubah/${buku.id}`}><button>Ubah</button></Link>
                                            <button onClick={() => handleDelete(buku.id)}>Hapus</button>
                                        </Fragment>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default Buku