interface image{
    url: string | null
    previewUrl: string | null
}

export interface IKino{
    id: string
    type: string
    name: string
    backdrop: image
    poster: image
    rating: {
        kp: number
    }
    year: number
}

export interface docsKino{
    docs: IKino[]
}