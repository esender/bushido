import addResource from './add_resource';

class Bushido {
  constructor() {}

  createPaths(resources) {
    let paths = {};
    resources.forEach( resource => {
      paths[resource.resourceName] = resource();
    });

    paths.path = `/`;

    return paths;
  }
}

export { Bushido as default, addResource };
