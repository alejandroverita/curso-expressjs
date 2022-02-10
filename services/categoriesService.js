const faker = require('faker');
const boom = require('@hapi/boom');

class CategoriesService {

  constructor(){
    this.categories = []
    this.generate();
  }

  generate(){
    const quantity = 10;

    for (let i  = 0; i < quantity; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        categories: faker.commerce.productAdjective(),
      });
    }

  }

  async create(data) {
    const newCategories = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategories);
    return newCategories;
  }

  async find() {
    return this.categories;
  }

  async findOne(id){
    const category = this.categories.find(item => item.id === id)
    if (!category) {
      throw boom.notFound('Category not found')
    }
  }

  async update(id, data){
    const index = this.categories.findIndex(item => item.id === id)
    if ( index === -1 ) {
      throw boom.notFound('Category not found')
    }
    const body = this.categories[index]
    this.categories[index]= {
      ...data,
      ...body
    }

    return this.categories[index]
  }

  async delete(id){
    const index = this.categories.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('Category not found')
    }

    this.categories.splice(index, 1);

    return `Delete succesfully of ID: ${ id }`
  }
}

module.exports = CategoriesService;
