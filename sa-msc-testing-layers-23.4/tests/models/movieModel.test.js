// const { expect } = require('chai');
// const sinon = require('sinon');
// const connection = require('../../models/connection');
// /*
//   Como ainda não temos a implementação, vamos fixar
//   um objeto simulando os métodos que iremos desenvolver,
//   porém, eles não terão nenhum comportamento
// */
// // const MoviesModel = {
// //   create: () => {}
// // };

// const MoviesModel = require('../../models/movieModel');



// before(async () => {
//   const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

//   sinon.stub(connection, 'execute').resolves(execute);
// });

// // Restauraremos a função `execute` original após os testes.
// after(async () => {
//   connection.execute.restore();
// });


// describe('Insere um novo filme no BD', () => {
//   const payloadMovie = {
//     title: 'Example Movie',
//     directedBy: 'Jane Dow',
//     releaseYear: 1999,

//   }





//   describe('quando é inserido com sucesso', () => {

//     it('retorna um objeto', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.be.a('object')
//     });

//     it('tal objeto possui o "id" do novo filme inserido', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.have.a.property('id')
//     });

//   });
// });

// // --------------------------------------- // ---------------------------------------

