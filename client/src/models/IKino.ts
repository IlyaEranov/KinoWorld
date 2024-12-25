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
}

export interface IKino{
    limit?: number
    docs: docs[]
}