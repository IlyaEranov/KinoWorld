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
    shortDescription: string
}

export interface docsKino{
    docs: IKino[]
}

export interface KinoProps{
    type: string
    genres?: string[]
    page?: number
}

export interface RejectType{
    rejectValue: string | null
}