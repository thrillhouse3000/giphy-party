const APIkey = 'zoXG3TZxZsDfbNY56jatMqyS1Ut75gGO'

$('form').on('submit', function(evt) {
    evt.preventDefault();
    getGif($('#search').val());
    $('#search').val('')
})

async function getGif(term){
    try{
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params:{q: term, api_key: APIkey}})
    const rNum = Math.floor(Math.random() * 50) + 1
    const gifUrl = res.data.data[rNum].images.original.url;
    const $img = $('<img>').attr('src', gifUrl).attr('class', 'mx-1 my-1 img-fluid img-thumbnail')
    $('section').append($img)
    } catch(err) {
        alert('Please enter a real search term!');
    }
}

$('#removeBtn').on('click', function() {
    $('section').html('')
})