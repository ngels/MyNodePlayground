'use strict';
module.exports = {
up: (queryInterface, Sequelize) => {
return queryInterface.bulkInsert('Users', [{
fullName: 'Vivi decoeur',
email: 'vio888@example.com',
createdAt: new Date(),
updatedAt: new Date()
},{
fullName: 'john legend',
email: 'GDsinger@example.com',
createdAt: new Date(),
updatedAt: new Date()
}]);
},
down: (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('Users', null, {});
}
};