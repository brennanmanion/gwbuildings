'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BuildingSpec extends Model {
    static get updatedAtColumn () {
        return null
      }

    static get createdAtColumn () {
    return null
    }      
}

module.exports = BuildingSpec
