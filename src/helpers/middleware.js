import produce from 'immer'

export const logger = fn => (set, get) =>
  fn(args => {
    set(args)
    console.log('  new state', get())
  }, get)

export const immer = config => set => {
  return Object.entries(config()).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: typeof value === 'function' ? (...args) => set(produce(draft => void config(draft)[key](...args))) : value
    }),
    {}
  )
}

export const computedmw = fn => (set, get) =>
  fn(args => {
    const state = { ...get(), ...args };
    const computedState = {};
    if(!get().error){
      for (const compu of Object.keys(get().computed)) {
        computedState[compu] = get().computed[compu](state);
      }
    }
    const updatedState = { ...args, ...computedState };
    set(updatedState);
  }, get);
