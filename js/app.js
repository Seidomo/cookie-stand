'use strict';

var operationHours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3p','4pm','5pm','6pm','7pm'];
var seattleStore= document.getElementById('seattle');
var seattleshop={
    minCustomerPerhour:23,
    maxCustomerPerhour:65,
    avgCookiesSale:6.3,

    cookiesPerhour:[],
    totalCookiesPerday:0,
    getCustomerPerhour:function(){
        return Math.floor(Math.random()*(this.maxCustomerPerhour-this.minCustomerPerhour +1)+this.minCustomerPerhour);
         
    },


 simulateCookiesSale: function(){
    for (var i=0; i<14; i++){
    var cookies = this.getCustomerPerhour() * this.avgCookiesSale
    this.cookiesPerhour.push(Math.round(cookies));
}
}
}