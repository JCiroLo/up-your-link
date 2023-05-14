const useImage = () => {
  return name => {
    return require(`../assets/img/${name}`)
  }
}

export default useImage
