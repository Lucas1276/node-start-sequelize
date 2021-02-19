const db = require('./db');

const Post = db.sequelize.define("post", {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },

    endereco: {
        type: db.Sequelize.TEXT,
        allowNull: false,
    },

    telefone: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },

    dataNSC: {
        type: db.Sequelize.DATE,
        allowNull: false,
    },

    sexo: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Post;

//Comando para criar novos campos nas tabelas do banco
Post.sync({ update: true });

//Comando para recriar a estrutura do banco de dados
//Deve ser executado apenas uma vez, senão irá excluir todos os registros da tabela
//Post.sync({ force: true });