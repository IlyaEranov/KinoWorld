interface name{
    name: string
}

interface persons{
    name: string
    description: string
    profession: string
}

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
    ageRating: number
    countries: name[]
    genres: name[]
    persons: persons[]
}

export interface IKino{
    docs: docs[]
}