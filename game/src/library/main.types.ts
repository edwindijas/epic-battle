export type PositionProperty = 'left' | 'right' | 'top' | 'bottom'

export type PromiseResolve<Type> = (value: Type | PromiseLike<Type>) => void 