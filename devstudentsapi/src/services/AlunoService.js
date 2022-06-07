const db = require('../db');

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject)=>{

            db.query('SELECT * FROM aluno', (error, results)=>{
                if(error) { reject(error); return; }
                resolve(results);
            });
        });
    },

    findById: (id) => {
        return new Promise((resolve, reject)=>{

            db.query('SELECT * FROM aluno WHERE id = ?', [id], (error, results) => {
                if(error) { reject(error); return; }
                if(results.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    resolve(results[0]);
                }else {
                    resolve(false);
                }
            });
        });
    },
    add: (nome, rgm, idade, cpf, rg)=> {
        return new Promise((resolve, reject)=> {

            db.query('INSERT INTO aluno (nome, rgm, idade, cpf, rg) VALUES (?, ?, ?, ?, ?)',
                [nome, rgm, idade, cpf, rg],
                (error, results)=>{
                    if(error){ reject(error); return; }
                    resolve(results.insertId);
                }
            );
        });
    },
    update:(id,nome, rgm, idade, cpf, rg)=> {
        return new Promise((resolve, reject)=> {
            db.query('UPDATE aluno SET nome = ?, rgm = ?, idade = ?, cpf = ?, rg = ? WHERE id = ?',
                [nome, rgm, idade, cpf, rg, id],
                (error, results) => {
                    if(error){ reject(error); return; }
                    resolve(results);
                }
            );
        });
    },

    delete: (id)=> {
        return new Promise((resolve, reject)=> {
            db.query('DELETE FROM aluno WHERE id = ?',[id], (error, results ) =>{
                if(error){ reject(error); return; }
                resolve(results);
            });
        });
    }
};


