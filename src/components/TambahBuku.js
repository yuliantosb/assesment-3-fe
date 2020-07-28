import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TambahBuku(props) {

    const [data, setData] = useState({
        nama: '',
        rak: '',
        stok: ''
    })

    const [loading, setLoading] = useState(false)

    const saveBuku = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post('http://localhost:3333/buku', {
            nama: data.nama,
            rak: data.rak,
            stok: data.stok
        })
        .then(res => {
           props.history.push('/buku')
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }

    const handleChange = (nama, value) => {
        setData({
            ...data,
            [nama]: value
        })
    }

    return (
        <div>
            <p>Tambah Buku</p>
            <Link to="/buku">Kembali</Link>
            <br />

            <form onSubmit={saveBuku}>
                <div>
                    <label>Nama Buku</label>
                    <input type="text" value={data.nama} onChange={(e) => handleChange('nama', e.target.value)} />
                </div>
                <div>
                    <label>Rak</label>
                    <input type="text" value={data.rak} onChange={(e) => handleChange('rak', e.target.value)} />
                </div>
                <div>
                    <label>Stok</label>
                    <input type="text" value={data.stok} onChange={(e) => handleChange('stok', e.target.value)} />
                </div>
                <button type="submit" disabled={loading}>Simpan</button>
            </form>

        </div>
    )
}

export default TambahBuku