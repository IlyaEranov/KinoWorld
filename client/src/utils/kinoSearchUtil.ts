enum colors{
    toxic_green = "#03e952",
    apple_green = "#3bb33b",
    orange = "#f50",
    red = "red",
    silver = "#aaa"
}

export const kinoSearchUtil = {
    ratingColor: (value: number) => {
        if(value >= 9){
            return colors.toxic_green
        } else if (value >= 7){
            return colors.apple_green
        } else if (value >= 6){
            return colors.orange
        } else if(value >= 4) {
            return colors.silver
        } else {
            return colors.red
        }
    },
    typeKino: (value: string) => {
        switch(value){
            case "movie":
                return "фильм"
            case "tv-series":
                return "сериал"
            case "cartoon":
                return "мультфильм"
            case "anime":
                return "аниме"
            case "animated-series":
                return "аниме-сериал"
            default:
                return ""
        }
    }
}