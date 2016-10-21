function addResource(resourceName, subResources) {
  function carredResource (parentPath = '') {
    let path = `${parentPath}/${resourceName}`;

    function resource(id) {
      let paths = {};

      paths.path = `${path}/${id}`;

      if(subResources) {
        subResources.forEach( resource => {
          paths[resource.resourceName] = resource(paths.path);
        });
      }

      return paths;
    }

    resource.path = path;

    if (subResources) {
      subResources.forEach( subResource => {
        resource[subResource.resourceName] = subResource(path);
      });
    }

    return resource;
  }

  carredResource.resourceName = resourceName;
  return carredResource;
}

export default addResource;