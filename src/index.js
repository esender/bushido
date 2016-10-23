import addResource from './add_resource';

class Bushido {
  createPaths(resources) {
    const paths = {};

    resources.forEach((resource) => {
      paths[resource.resourceName] = resource();
    });

    paths.path = '/';

    return paths;
  }
}

export { Bushido as default, addResource };
