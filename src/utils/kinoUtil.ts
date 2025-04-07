enum colors{
    toxic_green = "#03e952",
    apple_green = "#3bb33b",
    orange = "#f50",
    red = "red",
    silver = "#aaa"
}

export const kinoUtil = {
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
    translate: (value: string) => {
        switch(value){
            case "movie":
                return "фильм"
            case "tv-series":
                return "сериал"
            case "carton":
                return "мультфильм"
            default:
                return ""
        }
    },
    searchType: (value: string) => {
        switch(value){
            case "movies":
                return "Поиск по фильмам"
            case "series":
                return "Поиск по сериалам"
            case "animations":
                return "Поиск по мультфильмам"
            default:
                return ""
        }
    }
}