'use strict'

// import model
const BuildingSpec = use('App/Models/BuildingSpec')

class BuildingSpecController {
    
    async index({ view }){

        // const posts = [
        //     {title: 'Post one', body: 'This is post one'},
        //     {title: 'Post two', body: 'This is post two'},
        //     {title: 'Post three', body: 'This is post three'}
        // ]  
        
        const buildingSpecs = await BuildingSpec.all();

        return view.render('building_specs.index', {
            title: 'Latest Building Specs',
            buildingSpecs: buildingSpecs.toJSON()
        })
    }

    async store({ request, response, session }){
        const buildingSpec = new BuildingSpec();

        buildingSpec.width = request.input('width')
        buildingSpec.length = request.input('length')
        buildingSpec.height = request.input('height')
        buildingSpec.color = request.input('color')

        await buildingSpec.save()

        // return response.redirect('building_specs')
    }
}

module.exports = BuildingSpecController
