const db = require('../models');
const Ikan = db.ikan

exports.create = (req, res) => {
    req.body.id_penjual = new Number(req.body.id_penjual);

    Ikan.create(req.body)
        .then(() => {
            res.send({message: "Data ikan berhasil disimpan"});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error menginputkan data ikan."
            });
        });
}

exports.findAll = (req, res) => {
    Ikan.find()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error mendapatkan data Ikan."
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    req.body.id_penjual = new Number(req.body.id_penjual);

    Ikan.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: "Ikan tidak ditemukan dengan id " + id
                });
            }else{
                res.send({ message: "Data ikan berhasil diupdate" });
            }
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error memperbarui data ikan dengan id " + id
            });
        });
        
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Ikan.findByIdAndDelete(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: "Ikan tidak ditemukan dengan id " + id
                });
            }
            res.send({ message: "Ikan berhasil dihapus!" });
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Gagal menghapus ikan dengan id " + id
            });
        });
}

exports.show = (req, res) => {  
    const id = req.params.id;

    Ikan.findById(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: "Ikan tidak ditemukan dengan id " + id
                });
            }
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error mendapatkan ikan dengan id " + id
            });
        });
}