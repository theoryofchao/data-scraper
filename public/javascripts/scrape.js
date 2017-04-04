$(() => {
  $("#scrape-form").submit( (e) => {
    e.preventDefault();
    let url = $('#scrape-form .url').val();
    let data = $('#scrape-form .data').val();

    $.post('data/scrape', {url: url, data: data}, (result) => {
      $('.data-to-display').text(JSON.stringify(result));
      console.log(JSON.stringify(result));
    });
  });
});
