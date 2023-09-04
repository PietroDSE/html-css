const API = 'AIzaSyDXzE4ns0nuVaviQrWk2SKhlOiM87FYWhU'   
async function loadvideos(){
    try{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyDXzE4ns0nuVaviQrWk2SKhlOiM87FYWhU`)
        const data = await response.json()

        const ContainerVideo = document.querySelector('div#videos-em-destaque')
        data.items.forEach(video => {
            const title = video.snippet.title
            const VideoId = video.id

            const VideoElement = document.createElement('iframe')
            VideoElement.src =`https://www.youtube.com/embed/${VideoId}`
            VideoElement.title = title
            VideoElement.width ='560'
            VideoElement.height ='315'
            ContainerVideo.appendChild(VideoElement)
        });
    }catch(error){
        console.error('Erro ao carregar, Tente Novamente', error)
    }
}
loadvideos()