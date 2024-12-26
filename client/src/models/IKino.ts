interface docs{
    id: number
    name: string
    description: string
    shortDescription: string
    backdrop: {
        url: string
        previewUrl: string
    }
    poster: {
        url: string
        previewUrl: string
    }
    cover: {
        url: string
        previewUrl: string
    }
    rating: {
        kp: number
    }
    type: string
    year: number
}

export interface IKino{
    docs: docs[]
}