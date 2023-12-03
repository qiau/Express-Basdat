module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            nama_ikan: String,
            harga_ikan: Number,
            stok_ikan: Number,
            deskripsi_ikan: String,
            kategori_ikan: String,
            id_penjual: Number
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id_ikan = _id;
        return object;
    });

    return mongoose.model("ikan", schema);
}