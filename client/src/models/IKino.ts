interface docs{
    id: number
    name: string
    description: string
    backdrop: {
        url: string
    }
}

export interface IKino{
    limit?: number
    docs: docs[]
}