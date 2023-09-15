// GET https://youtube.googleapis.com/youtube/v3/playlists?key=[YOUR_API_KEY] HTTP/1.1
// fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBniUrdA_ATDmJ6H5XjB3ByFZKSnmMqp38&playlistId=PLvahqwMqN4M2euuB96bo7rnVMcakCkIRZ")
fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBniUrdA_ATDmJ6H5XjB3ByFZKSnmMqp38&playlistId=PLvahqwMqN4M2euuB96bo7rnVMcakCkIRZ")
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data)
    })

    