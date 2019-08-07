const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { user } = req.headers; // dando o like
        const { devId } = req.params; // recebendo o like

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        // se tá tentando dar like em alguém que não existe
        if(!targetDev){ 
            return res.status(400).json({ erro: 'Dev not exists' });
        }

        loggedDev.dislikes.push(targetDev._id); // push na lista de dislikes

        await loggedDev.save(); // salva as alterações no banco

        return res.json(loggedDev);
    }
};