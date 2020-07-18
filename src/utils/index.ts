export const getRoutesModule = function() {
  let modules: RoutesType[] = []
  const requireContext = require.context('../router', false, /\.ts$/)
  console.log(requireContext, '22')

  requireContext.keys().forEach(module => {
    if (module === './index.ts') {
      return
    }
    modules = modules.concat(requireContext(module).default)
  })
  return modules
}

export const getSelectOptions = () => {
  return getRoutesModule().map(obj => {
    console.log(obj, '999777')
    return {
      value: obj.path.slice(1),
      label: obj.selectName
    }
  })
}


interface RoutesType {
  path: string;
  name: string;
  component: any;
  selectName?: string;
}