const APIkey = 'zoXG3TZxZsDfbNY56jatMqyS1Ut75gGO'

$('form').on('submit', async function(evt) {
    evt.preventDefault();
    let gif = await getGif($('#search').val());
    appendDom(gif)
    $('#search').val('')
})

async function getGif(term){
    try{
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params:{q: term, api_key: APIkey}})
    const rNum = Math.floor(Math.random() * 50) + 1
    const gifUrl = res.data.data[rNum].images.fixed_height.url;
    return gifUrl
    } catch(err) {
        alert('Please enter a real search term!');
    }
}

function appendDom(gifUrl) {
    const $img = $('<img>').attr('src', gifUrl).attr('class', 'mx-1 my-1 img-fluid img-thumbnail')
    $('section').append($img)
}

$('#removeBtn').on('click', function() {
    $('section').html('')
})