$(function () {

  $.ajax({
    type: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/bitcoin/',
    dataType: 'json',
    success: function (data) {
      var price = Number(data[0].price_usd).toFixed(2);
      var hourChanges = data[0].percent_change_1h;
      var dayChanges =  data[0].percent_change_24h;
      var weekChanges = data[0].percent_change_7d;

      // var dayChanges = 10;

      $('#topbar').prepend(`Price: ${price} | Hourly: ${hourChanges}% | 24H: ${dayChanges}% | Weekly: ${weekChanges}%`);

      if (dayChanges > .50) {
        $('#image').append(`<img src="Images/btc_up.gif"></img>`);
      }
      else if (dayChanges < -.50) {
        $('#image').append(`<img src="Images/btc_down.gif"></img>`);
      }
      else {
        $('#image').append(`<img src="Images/btc_straight.gif"></img>`);
      }

      console.log(price);
      console.log(dayChanges);
    }
  });
})
