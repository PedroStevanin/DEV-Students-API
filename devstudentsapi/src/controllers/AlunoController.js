const AlunoService = require('../services/AlunoService');

module.exports = {
   
    all: async (req, res) => {
        let json = {error:'', result:[]};

        let notes = await AlunoService.getAll();
        
        for(let i in notes){
            json.result.push({
                id: notes[i].Id,
                nome: notes[i].Nome,
                rgm: notes[i].Rgm,
                idade: notes[i].Idade,
                cpf: notes[i].Cpf,
                rg: notes[i].Rg,
            });
        }

        res.json(json);
    },  
    one: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id; //para pegar o parametro
        let note = await AlunoService.findById(id);

        if(note){
            json.result = note; //se tiver nota ele joga no json
        }

        res.json(json);
    },
    new: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let rgm = req.body.rgm;
        let idade = req.body.idade;
        let cpf = req.body.cpf;
        let rg = req.body.rg;
        

        if (nome && rgm && idade && cpf && rg) {     
            let noteId = await AlunoService.add(nome, rgm, idade, cpf, rg);
            json.result = {
                id: noteId,
                nome,
                rgm,
                idade,
                cpf,
                rg
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    edit: async(req, res) => {

        let json = {error:'', result:{}};

        let id = req.params.id;
        let nome = req.body.nome;
        let rgm = req.body.rgm;
        let idade = req.body.idade;
        let cpf = req.body.cpf;
        let rg = req.body.rg;
        

        if (id && nome && rgm && idade && cpf && rg){
            await AlunoService.update(id,nome,rgm,idade,cpf,rg);
            json.result = {
                id,
                nome,
                rgm,
                idade,
                cpf,
                rg
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    delete: async(req, res) => {
        let json = {error:'', result:{}};

        await AlunoService.delete(req.params.id);
        
        res.json(json);
    },
}


