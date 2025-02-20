export function preloadImage(path: string){
    let image = new Image()
    image.src = path
    return image
}