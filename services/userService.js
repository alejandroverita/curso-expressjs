const faker = require('faker');
const boom = require('@hapi/boom');

class UserService {
  constructor() {
    this.user = []
    this.generate();
  }

  generate(){
    const limit = 10;
    for (let i = 0; i< limit; i++){
      this.user.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        age: faker.datatype.number(60),
        role: faker.jobTitle
      });
    }
  }

  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.user.push(newUser)
    return newUser;
  }

  async find() {
    return this.user;
  }

  async findOne(id){

    const user = this.user.find(item => item.id === id)
    if( !user) {
      throw boom.notFound('User not found')
    }
  }

  async update(id, body){
    const index = this.user.findIndex(item => item.id === id);
    if( index === -1 ) {
      throw boom.notFound('User not found')
    }
    const user = this.user[index]
    this.user[index] = {...user, ...body};

    return this.user[index]
  }

  delete(id){
    const index = this.user.findIndex(item => item.id === id)
    if ( index === -1 ) {
      throw boom.notFound('User not found')
    }

    this.user.splice(index, 1)

    return `Succefull delete ID: ${ id }`
  }


}

module.exports = UserService;
