function addResource(resourceName, subResources = []) {
  function carriedResource(parentPath = '') {
    const path = `${parentPath}/${resourceName}`;

    function resource(id) {
      const paths = {};

      paths.path = `${path}/${id}`;

      subResources.forEach((subResource) => {
        paths[subResource.resourceName] = subResource(paths.path);
      });

      return paths;
    }

    resource.path = path;

    subResources.forEach((subResource) => {
      resource[subResource.resourceName] = subResource(path);
    });

    return resource;
  }

  carriedResource.resourceName = resourceName;

  return carriedResource;
}

export default addResource;
