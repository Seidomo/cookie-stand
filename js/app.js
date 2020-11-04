'use strict';

var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3p', '4pm', '5pm', '6pm', '7pm'];
var tableParent = document.getElementById('thead');
var seattleShop = {
    city: 'SEATTLE',
    minCustomerPerhour: 23,
    maxCustomerPerhour: 65,
    avgCookiesSale: 6.5,
    totalCookiesPerday: 0,
    getCustomerPerhour: [],
    cookiesPerhour: [],
    makeCitie: function () {
        var trElement = document.createElement('tr');
        var thElement = document.createElement('th');
        thElement.textContent = this.city;
        tableParent.appendChild(trElement);
        trElement.appendChild(thElement);
        for (var i = 0; i < this.cookiesPerhour.length; i++) {
            var th3Element = document.createElement('th');
            th3Element.textContent = this.cookiesPerhour[i];
            trElement.appendChild(th3Element);
            this.totalCookiesPerday += this.cookiesPerhour[i];
        }
       var  th4Element=document.createElement('th');
            th4Element.textContent=this.totalCookiesPerday;
            trElement.appendChild(th4Element);
    },


    generateCustomerPerHour: function () {
        for (var i = 0; i < operationHours.length; i++) {
            var randomCustomerNumber = generateRandomNumber(this.minCustomerPerhour,
                this.maxCustomerPerhour);
            this.getCustomerPerhour.push(randomCustomerNumber);
            function generateRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        }

    },
    generateCookiesperHour: function () {
        for (var i = 0; i < this.getCustomerPerhour.length; i++) {
            var totalCookiesPerHour = Math.ceil(this.getCustomerPerhour[i] * this.avgCookiesSale);
            this.cookiesPerhour.push(totalCookiesPerHour);
           
        }
    },
    
}
    var tokyoShop = {
    city: 'TOKYO',
    minCustomerPerhour: 3,
    maxCustomerPerhour: 24,
    avgCookiesSale: 1.2,
    totalCookiesPerday: 0,
    getCustomerPerhour: [],
    cookiesPerhour: [],
    makeCitie: function () {
        var trElement = document.createElement('tr');
        var thElement = document.createElement('th');
        thElement.textContent = this.city;
        tableParent.appendChild(trElement);
        trElement.appendChild(thElement);
        for (var i = 0; i < this.cookiesPerhour.length; i++) {
            var th3Element = document.createElement('th');
            th3Element.textContent = this.cookiesPerhour[i];
            trElement.appendChild(th3Element);
            this.totalCookiesPerday += this.cookiesPerhour[i];
        }
        var  th4Element=document.createElement('th');
        th4Element.textContent=this.totalCookiesPerday;
        trElement.appendChild(th4Element);
    },
    generateCustomerPerHour: function () {
        for (var i = 0; i < operationHours.length; i++) {
            var randomCustomerNumber = generateRandomNumber(this.minCustomerPerhour,
                this.maxCustomerPerhour);
            this.getCustomerPerhour.push(randomCustomerNumber);
            function generateRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        }

    },
    generateCookiesperHour: function () {
        for (var i = 0; i < this.getCustomerPerhour.length; i++) {
            var totalCookiesPerHour = Math.ceil(this.getCustomerPerhour[i] * this.avgCookiesSale);
            this.cookiesPerhour.push(totalCookiesPerHour);
        }
    },

}
var dubaiShop = {
    city: 'DUBAI',
    minCustomerPerhour: 11,
    maxCustomerPerhour: 38,
    avgCookiesSale: 3.7,
    totalCookiesPerday: 0,
    getCustomerPerhour: [],
    cookiesPerhour: [],
    makeCitie: function () {
        var trElement = document.createElement('tr');
        var thElement = document.createElement('th');
        thElement.textContent = this.city;
        tableParent.appendChild(trElement);
        trElement.appendChild(thElement);
        for (var i = 0; i < this.cookiesPerhour.length; i++) {
            var th3Element = document.createElement('th');
            th3Element.textContent = this.cookiesPerhour[i];
            trElement.appendChild(th3Element);
            this.totalCookiesPerday += this.cookiesPerhour[i];
        }
        var  th4Element=document.createElement('th');
        th4Element.textContent=this.totalCookiesPerday;
        trElement.appendChild(th4Element);
    },
    generateCustomerPerHour: function () {
        for (var i = 0; i < operationHours.length; i++) {
            var randomCustomerNumber = generateRandomNumber(this.minCustomerPerhour,
                this.maxCustomerPerhour);
            this.getCustomerPerhour.push(randomCustomerNumber);
            function generateRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        }

    },
    generateCookiesperHour: function () {
        for (var i = 0; i < this.getCustomerPerhour.length; i++) {
            var totalCookiesPerHour = Math.ceil(this.getCustomerPerhour[i] * this.avgCookiesSale);
            this.cookiesPerhour.push(totalCookiesPerHour);
        }
    },

}
var parisShop = {
    city: 'PARIS',
    minCustomerPerhour: 20,
    maxCustomerPerhour: 38,
    avgCookiesSale: 2.3,
    totalCookiesPerday: 0,
    getCustomerPerhour: [],
    cookiesPerhour: [],
    makeCitie: function () {
        var trElement = document.createElement('tr');
        var thElement = document.createElement('th');
        thElement.textContent = this.city;
        tableParent.appendChild(trElement);
        trElement.appendChild(thElement);
        for (var i = 0; i < this.cookiesPerhour.length; i++) {
            var th3Element = document.createElement('th');
            th3Element.textContent = this.cookiesPerhour[i];
            trElement.appendChild(th3Element);
            this.totalCookiesPerday += this.cookiesPerhour[i];
        }
        var  th4Element=document.createElement('th');
        th4Element.textContent=this.totalCookiesPerday;
        trElement.appendChild(th4Element);
    },
    generateCustomerPerHour: function () {
        for (var i = 0; i < operationHours.length; i++) {
            var randomCustomerNumber = generateRandomNumber(this.minCustomerPerhour,
                this.maxCustomerPerhour);
            this.getCustomerPerhour.push(randomCustomerNumber);
            function generateRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        }

    },
    generateCookiesperHour: function () {
        for (var i = 0; i < this.getCustomerPerhour.length; i++) {
            var totalCookiesPerHour = Math.ceil(this.getCustomerPerhour[i] * this.avgCookiesSale);
            this.cookiesPerhour.push(totalCookiesPerHour);
        }
    },

}
var limaShop = {
    city: 'LIMA',
    minCustomerPerhour: 2,
    maxCustomerPerhour: 16,
    avgCookiesSale: 4.6,
    totalCookiesPerday: 0,
    getCustomerPerhour: [],
    cookiesPerhour: [],
    makeCitie: function () {
        var trElement = document.createElement('tr');
        var thElement = document.createElement('th');
        thElement.textContent = this.city;
        tableParent.appendChild(trElement);
        trElement.appendChild(thElement);
        for (var i = 0; i < this.cookiesPerhour.length; i++) {
            var th3Element = document.createElement('th');
            th3Element.textContent = this.cookiesPerhour[i];
            trElement.appendChild(th3Element);
            this.totalCookiesPerday += this.cookiesPerhour[i];
        }
        var  th4Element=document.createElement('th');
        th4Element.textContent=this.totalCookiesPerday;
        trElement.appendChild(th4Element);
    },
    generateCustomerPerHour: function () {
        for (var i = 0; i < operationHours.length; i++) {
            var randomCustomerNumber = generateRandomNumber(this.minCustomerPerhour,
                this.maxCustomerPerhour);
            this.getCustomerPerhour.push(randomCustomerNumber);
            function generateRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        }

    },
    generateCookiesperHour: function () {
        for (var i = 0; i < this.getCustomerPerhour.length; i++) {
            var totalCookiesPerHour = Math.ceil(this.getCustomerPerhour[i] * this.avgCookiesSale);
            this.cookiesPerhour.push(totalCookiesPerHour);
        }
    },

}
function makeTotal(){
    var trElement=document.createElement('tr');
    var  thElement=document.createElement('th');
         thElement.textContent='TOTAL';
         trElement.appendChild(thElement);
         //thi loop controls the hours
        for(var i=0; i< operationHours.length; i++){
             var total=0 
            for (var j=0; j<stores.length; j++){
              total= stores[j] .cookiesPerhour[i] + total;
            }
    var totalTables =document.createElement('th');
            totalTables.textContent= total ;
            trElement.appendChild(totalTables);
         }
         tableParent.appendChild(trElement);
}
function makeHeader() {
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = '  ';
    tableParent.appendChild(trElement);
    trElement.appendChild(thElement);
    for (var i = 0; i < operationHours.length; i++) {
        var th2Element = document.createElement('th');
        th2Element.textContent = operationHours[i];
        trElement.appendChild(th2Element);
    }
    var th3Element = document.createElement('th');
    th3Element.textContent = 'Daily Loaction Total';
    trElement.appendChild(th3Element);
}
var stores = [seattleShop, tokyoShop, dubaiShop, parisShop, limaShop];



makeHeader();


seattleShop.generateCustomerPerHour();
seattleShop.generateCookiesperHour();
seattleShop.makeCitie();

tokyoShop.generateCustomerPerHour();
tokyoShop.generateCookiesperHour();
tokyoShop.makeCitie();

dubaiShop.generateCustomerPerHour();
dubaiShop.generateCookiesperHour();
dubaiShop.makeCitie();

parisShop.generateCustomerPerHour();
parisShop.generateCookiesperHour();
parisShop.makeCitie();

limaShop.generateCustomerPerHour();
limaShop.generateCookiesperHour();
limaShop.makeCitie();
makeTotal();

