$(function(){

  $.ajax({
    type: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/bitcoin/',
    dataType: 'json',
    success: function (data) {
      var price = data[0].price_usd;
      var dayChanges = data[0].percent_change_24h;
      console.log(price);
      console.log(dayChanges);
    }
  });
})
