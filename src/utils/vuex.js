export const set = property => (store, payload) => (store[property] = payload);
export const toggle = property => store => (store[property] = !store[property]);
export const push = property => (store, payload) => store[property].push(payload);

export const getStoreModules = () => {
  const modulesFiles = require.context('@/store/modules', true, /\.js$/);
  const modules = modulesFiles.keys().reduce((acc, modulePath) => {
    const [moduleName] = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1').split('/');
    const value = modulesFiles(modulePath);
    if (!value.default.namespaced) return acc;
    acc[moduleName] = value.default;
    return acc;
  }, {});

  return modules;
};
