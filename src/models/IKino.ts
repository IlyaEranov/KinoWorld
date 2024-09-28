interface docs{
    id: number
    name: string
    type: string
    year: number
    description: string
    shortDescription: string
    rating: {
        kp: number
    }
    ageRating: number
    poster: {
        url: string
        previewUrl: string
    }
    backdrop: {
        url: string
        previewUrl: string
    }
    top10: number
}

export interface IKino{
    docs: docs[]
}