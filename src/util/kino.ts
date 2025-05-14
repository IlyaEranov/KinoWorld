const colors = {
    toxic_green: "#03e952",
    apple_green: "#3bb33b",
    orange: "#f50",
    red: "red",
    silver: "#aaa"
}

export const kinoUtil = {
    ratingColor: (v: number) => {
        if(v >= 9){
            return colors.toxic_green
        } else if (v >= 7){
            return colors.apple_green
        } else if (v >= 6){
            return colors.orange
        } else if (v >= 4){
            return colors.silver
        } else {
            return colors.red
        }
    },
    ru: (v: string) => {
        switch(v){
            case "movie":
                return "фильм"
            case "tv-series":
                return "сериал"
            case "cartoon":
                return "мультфильм"
            default:
                return ""
        }
    }
}