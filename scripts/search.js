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