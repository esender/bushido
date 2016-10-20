function addResource(resourceName, subResources) {
  function carredResource (parentPath) {
    let path = parentPath ? `${parentPath}/${resourceName}` : `/${resourceName}`;

    function resource(id) {
      let paths = {};

      paths.path = `${path}/${id}`;

      if(subResources) {
        subResources.forEach( resource => {
          paths[resource.resname] = resource(paths.path);
        });
      }

      return paths;
    }

    resource.path = path;

    if (subResources) {
      subResources.forEach( subResource => {
        resource[subResource.resname] = subResource(path);
      });
    }

    return resource;
  }

  carredResource.resname = resourceName;
  return carredResource;
}

class NinjaWay {
  constructor() {}

  createPaths(resources) {
    let paths = {};
    resources.forEach( resource => {
      paths[resource.resname] = resource();
    });

    paths.path = `/`;

    return paths;
  }
}

export { NinjaWay as default, addResource };