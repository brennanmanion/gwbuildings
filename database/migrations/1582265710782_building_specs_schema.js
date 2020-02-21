'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BuildingSpecsSchema extends Schema {
  up () {
    this.create('building_specs', (table) => {
      table.string('width')
      table.string('length')
      table.string('height')
      table.string('color')
    })
  }

  down () {
    this.drop('building_specs')
  }
}

module.exports = BuildingSpecsSchema
