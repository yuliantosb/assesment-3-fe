import React, { useEffect, useState } from 'react'
import Axios from 'axios'


function Pinjam(props) {

    const [bukus, setBukus] = useState([])
    const [data, setData] = useState({
        buku_id: ''
    })

    useEffect(() => {
        getBuku()
    }, [])

    const handleChange = (name, value) => {
        setData({
            ...data,
            [name]: value
        })
    }

    const getBuku = () => {
        Axios.get('http://localhost:3333/buku')
        .then(res => {
            setBukus(res.data)
            setData({
                ...data,
                buku_id: res.data[0] && res.data[0].id
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3333/pinjam', {
            buku_id: data.buku_id
        }).then(res => {
            props.history.push('/buku')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <p>Pinjam</p>
            <form onSubmit={handleSubmit}>
                <select onChange={(e) => handleChange('buku_id', e.target.value)}>
                    {
                        bukus && bukus.map(buku => {
                            return <option key={buku.id} value={buku.id}>{buku.nama}</option>
                        })
                    }
                </select>
                <br />
                <br />
                <button type="submit">Pinjam</button>
            </form>
        </div>
    )
}

export default Pinjam