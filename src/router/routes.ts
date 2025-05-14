export type KinoType = "movie" | "tv-series" | "cartoon" | undefined 
export type AuthType = "login" | "register" | undefined

interface navLinksType{
    name: string
    path: string
}

export const navLinks: navLinksType[] = [
    {name: "Главная", path: "/"},
    {name: "Фильмы", path: "/watch/movie"},
    {name: "Сериалы", path: "/watch/tv-series"},
    {name: "Мультфильмы", path: "/watch/cartoon"}
]