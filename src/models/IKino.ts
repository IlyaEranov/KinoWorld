interface image{
    url: string
    previewUrl: string
}

export interface IKino{
    id: string
    name: string
    poster: image
    backdrop: image
    rating: {
        kp: number
    }
    type: string
    year: number
    description: string
}

export interface docsKino{
    docs: IKino[]
}
