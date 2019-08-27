const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        console.log(req.io, req.connectedUsers);
        
        const { user } = req.headers; // dando o like
        const { devId } = req.params; // recebendo o like

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        // se tá tentando dar like em alguém que não existe
        if(!targetDev){ 
            return res.status(400).json({ erro: 'Dev not exists' });
        }

        // Se o cara que tá recebendo like já deu like no que tá dando, deu match
        if(targetDev.likes.includes(loggedDev._id)){
            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[devId];

            if(loggedSocket){
                req.io.to(loggedSocket).emit('match', targetDev);
            }

            if(targetSocket){
                req.io.to(targetSocket).emit('match', loggedDev);
            }
        }

        loggedDev.likes.push(targetDev._id); // push na lista de likes

        await loggedDev.save(); // salva as alterações no banco

        return res.json(loggedDev);
    }
};