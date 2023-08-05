export const hours = Array.from({ length: 24 }, (_, index) => ({
  label: index.toString(),
  value: index
}))
export const minutes = Array.from({ length: 60 }, (_, index) => ({
  label: index.toString(),
  value: index
}))
export const weights = Array.from({ length: 91 }, (_, index) => ({
  label: (index + 10).toString(),
  value: index + 10
}))
