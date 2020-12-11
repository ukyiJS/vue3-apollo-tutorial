export const getRoutes = () => {
  const routesFiles = require.context('@/router/routes', true, /\.js$/);
  const routes = routesFiles.keys().reduce((acc, routePath) => {
    const [, isDir] = routePath.replace(/^\.\/(.*)\.\w+$/, '$1').split('/');
    const value = routesFiles(routePath);
    return isDir ? acc : acc.concat(value.default);
  }, []);
  return routes;
};
