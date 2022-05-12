function add(x: number, y: number, z ?: number): number {
  if (typeof z === 'number')
  return x + y
}

let result = add(1,2)