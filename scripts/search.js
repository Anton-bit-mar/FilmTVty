const API_key = "f5d85d839c5e85ea330725c93f49debe";
document.addEventListener('DOWContentLoded',function(){
    document.getElementById('search-btn').addEventListener('click',function(event){
        event.preventDefault();
        const title = document.getElementById('search').value;
        title.textContent = '';

        if(title.trim()){
            fetchMovie(title);
            document.grtElementByID('details-page').style.display = 'block';
        }else{
            window.alert('Please enter a movie title');
            document.getElementById('details-page').style.display = 'none';
        }
    });
});
function fetchMovie(title){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${title}`)
    .then(response => response.json())
    .then(data => {
        const results= data.results[0];
        document.getElementById('title').textContent = results.title;
        document.getElementById('relese_date').textContent = results.relese_date;
        document.getElementById('overviw').textContent = results.overviw;
        document.getElementById('vote_average').textContent = results.vote_average;
        document.getElementById('original_language').textContent = results.original_language;
        document.getElementById('poster').src = 'https://image.tmdb.org/t/p/w500' + results.poster_path;


    })
    .catch(error => console.error(error))
}