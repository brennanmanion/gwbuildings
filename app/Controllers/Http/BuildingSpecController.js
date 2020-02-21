"use strict";

// import model
const BuildingSpec = use("App/Models/BuildingSpec");

class BuildingSpecController {
  async index({ view }) {

    const buildingSpecs = await BuildingSpec.all();

    return view.render("building_specs.index", {
      buildingSpecs: buildingSpecs.toJSON()
    });
  }

  async store({ request, response, session }) {
    const buildingSpec = new BuildingSpec();

    buildingSpec.width = request.input("width");
    buildingSpec.length = request.input("length");
    buildingSpec.height = request.input("height");
    buildingSpec.color = request.input("color");

    await buildingSpec.save();
  }
}

module.exports = BuildingSpecController;
