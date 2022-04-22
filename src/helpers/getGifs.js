
export const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=6Q2Z4m5Lm3awZrv5EAqWLc7QjjENFbv4`;
        const res = await fetch(url);
        const { data } = await res.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;

    } catch (error) {
        console.log(error);
    }
}