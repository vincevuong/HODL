$(function(){

  $.ajax({
    type: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/bitcoin/',
    dataType: 'json',
    success: function (data) {
      var price = data[0].price_usd;
      var hourChanges = data[0].percent_change_1h;
      var dayChanges = data[0].percent_change_24h;
      var weekChanges = data[0].percent_change_7d;

      
      $('#topbar').append(`Price: ${price} || Hourly: ${hourChanges}% || 24 Hours: ${dayChanges}% || Weekly: ${weekChanges}%`);

      console.log(price);
      console.log(dayChanges);
    }
  });
})
