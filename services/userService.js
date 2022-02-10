const faker = require('faker');
class UserService {
  constructor() {
    this.user = []
    this.generate();
  }

  generate(){
    this.user.push({
      id: faker.datatype.uuid(),
      name: faker.name,
      age: faker.datatype.number(60),
      role: faker.job
    })
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

    return this.user.find(item => item.id === id)
  }

  async update(id, body){
    const index = this.user.findIndex(item => item.id === id);
    if( index === -1 ) {
      throw new Error( 'No user found')
    }
    const user = this.user[index]
    this.user[index] = {...user, ...body};

    return this.user[index]
  }

  delete(id){
    const index = this.user.findIndex(item => item.id === id)
    if ( index === -1 ) {
      throw new Error('No index found')
    }

    this.user.splice(index, 1)

    return `Succefull delete ID: ${ id }`
  }


}

module.exports = UserService;
