const { Schema, model } = require('mongoose'); // importa diretamente: mongoose.Schema e mongoose.model

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

// timestamps salva o createdAt e updatedAt

module.exports = model('Dev', DevSchema);