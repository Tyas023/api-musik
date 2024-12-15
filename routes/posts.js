const express = require('express')
const router = express.Router()

// untuk import database
const koneksi = require('../config/database')

// import express validator
const { body, validationResult } = require('express-validator')

// view
router.get('/', function(req, res) {
    // isi data(query)
    koneksi.query('SELECT * FROM posts ORDER BY id desc ', function(err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Server anda sedang error,kocak!',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'Menampilkan data posts',
                data: rows
            })
        }
    })
})

// INSERT
router.post('/store', [
        // untuk validasi
        body('nama_artis').notEmpty(),
        body('label').notEmpty(),
        body('genre').notEmpty(),
        body('id_album').notEmpty(),
        body('judul_album').notEmpty(),
        body('tahun_rilis').notEmpty(),
        body('id_lagu').notEmpty(),
        body('judul_lagu').notEmpty(),
        body('durasi').notEmpty(),

    ], (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({
                error: errors.array()
            })
        }

        // definisi form data
        let formData = {
            nama_artis: req.body.nama_artis,
            label: req.body.label,
            genre: req.body.genre,
            id_album: req.body.id_album,
            judul_album: req.body.judul_album,
            tahun_rilis: req.body.tahun_rilis,
            id_lagu: req.body.id_lagu,
            judul_lagu: req.body.judul_lagu,
            durasi: req.body.durasi,
        }

        // memasukkan Querry / data
        koneksi.query('INSERT INTO posts SET ?', formData, function(err, rows) {
            // untuk menampilkan error
            if (err) {
                console.error('error SQL:', err);
                return res.status(500).json({
                    status: false,
                    message: 'Server error',
                })
            } else {
                return res.status(201).json({
                    status: true,
                    message: 'Berhasil Masuk',
                    data: rows[0]
                })
            }
        })
    })
    // detail data
router.get('/:id', function(req, res) {
    let id = req.params.id

    koneksi.query(`SELECT * FROM posts WHERE ID=${id}`,
        function(error, rows) {
            if (error) {
                return res.status(500).json({
                    status: false,
                    message: 'server anda eror',
                })
            }
            //kalau post id nya belum/tidak ada 
            if (rows.length <= 0) {
                return res.status(404).json({
                    status: false,
                    message: 'data belum ada'
                })
            } else {
                return res.status(200).json({
                    status: true,
                    message: 'menampilan data post berdasarkan id',
                    data: rows[0]
                })
            }
        }
    )
})

//update /edit data
router.patch('/update/:id', [
    body('nama_artis').notEmpty(),
        body('label').notEmpty(),
        body('genre').notEmpty(),
        body('id_album').notEmpty(),
        body('judul_album').notEmpty(),
        body('tahun_rilis').notEmpty(),
        body('id_lagu').notEmpty(),
        body('judul_lagu').notEmpty(),
        body('durasi').notEmpty(),

], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(442).json({
            errors: errors.array()

        })
    }

    let id = req.params.id //untuk mengambil data id

    let formData = {
        nama_artis: req.body.nama_artis,
        label: req.body.label,
        genre: req.body.genre,
        id_album: req.body.id_album,
        judul_album: req.body.judul_album,
        tahun_rilis: req.body.tahun_rilis,
        id_lagu: req.body.id_lagu,
        judul_lagu: req.body.judul_lagu,
        durasi: req.body.durasi,
        }
        //update query
    koneksi.query(`UPDATE posts set ? WHERE id=${id}`, formData,
        function(err, rows) {
            if (err) {
                return res.status(500).json({
                    status: false,
                    message: 'Internal Server error'
                })
            } else {
                return res.status(200).json({
                    status: true,
                    message: 'update data berhasil'
                })
            }
        }
    )
})

//Delete
router.delete('/delete/(:id)',
    function(req, res) {
        let id = req.params.id

        koneksi.query(`DELETE FROM posts WHERE id = ${id}`,
            function(error, rows) {
                if (error) {
                    return res.status(500).json({
                        status: false,
                        message: 'inrternal server error',
                    })
                } else {
                    return res.status(200).json({
                        status: true,
                        message: 'data telah dihapus'
                    })
                }
            }
        )
    }
)

module.exports = router