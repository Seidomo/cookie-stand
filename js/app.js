'use strict';
//// global variable
var operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3p', '4pm', '5pm', '6pm', '7pm'];
var tableParent = document.getElementById('thead');
var allCities =[];

////constructor function
function Store(name,minCustomerPerhour,maxCustomerPerhour,avgCookiesSale){
    this.city = name;
    this.minCustomerPerhour = minCustomerPerhour;
    this.maxCustomerPerhour = maxCustomerPerhour;
    this.avgCookiesSale = avgCookiesSale;
    this.totalCookiesPerday = 0;
    this.getCustomerPerhour = [];
    this.cookiesPerhour = [];
    
    allCities.push(this);
}
//// protoypye
Store.prototype.getCustomerPerHour = function(){
    for (var i=0; i<operationHours.length; i++){
        var randomCustomerNumber=generateRandomNumber(this.minCustomerPerhour,this.maxCustomerPerhour);
        this.getCustomerPerhour.push(randomCustomerNumber);

    }
}///??//
Store.prototype.generateCookiesperHour=function(){
    for(var i=0; i<this.getCustomerPerhour.length; i++){
        var cookiessoldPerhour = Math.ceil(this.getCustomerPerhour[i] * this.avgCookiesSale);
        this.cookiesPerhour.push(cookiessoldPerhour);
        this.totalCookiesPerday += cookiessoldPerhour;
    }

}
Store.prototype.render= function(){
    this.getCustomerPerHour();
    this.generateCookiesperHour();
    //var tableParent = document.getElementById('thead');

    // making a table row
    var trElement = document.createElement('tr');
    // append to the parent element
    tableParent.appendChild(trElement);
    // making a td
    var tdElement = document.createElement('thead');
    // fill the td with a city
    tdElement.textContent = this.city;
    // append to the table row
    trElement.appendChild(tdElement);
    for(var i=0; i<this.cookiesPerhour.length; i++){
        tdElement=document.createElement('td');
        tdElement.textContent = this.cookiesPerhour[i];
        trElement.appendChild(tdElement);
    }
    tdElement=document.createElement('td');
    tdElement.textContent = this.totalCookiesPerday;
    trElement.appendChild(tdElement);

}
     ///// object instant
     new Store('SEATTLE', 23, 65, 6.3);
     new Store('TOKYO', 3, 24, 1.2);
     new Store('DUBAI', 11, 38, 3.7);
     new Store('PARIS', 20, 38, 2.3);
     new Store('LIMA', 2, 16, 4.6 );

     /// HELPER FUNCTIONS FROM MDN Math.random
     function generateRandomNumber(min, max){
         return Math.floor(Math.random() * (max - min + 1) +min);
     }
     function generateHeadRow(){
        //var tableParent = document.getElementById('thead');
        var trElement = document.createElement('tr');
        // append to the parent element
        tableParent.appendChild(trElement);
        // making a td
        var thElement = document.createElement('th');
        // fill the td with content
        thElement.textContent = 'location';
        // append to the table row
        trElement.appendChild(thElement);
        for(var i=0; i<operationHours.length; i++){
            thElement=document.createElement('th');
            thElement.textContent = operationHours[i];
            trElement.appendChild(thElement);
        }
        thElement=document.createElement('th');
        thElement.textContent = 'daily total';
        trElement.appendChild(thElement);
        
     }
    
     function generateFootRow(){
         var totalOfTotal = 0;
         //var tableParent = document.getElementById('thead');
         var trElement = document.createElement('tr');
        // append to the parent element
        tableParent.appendChild(trElement);
        // making a th
        var thElement = document.createElement('th');
        // fill the th with a totals
        thElement.textContent = 'TOTALS';
        // append to the table row
        trElement.appendChild(thElement);
        for(var i=0; i<operationHours.length; i++){
            var total=0 
           for (var j=0; j<allCities.length; j++){
             total += allCities[j].cookiesPerhour[i];
             totalOfTotal += allCities[j].cookiesPerhour[i];
             
             
           }
           var  thElement=document.createElement('th');
           thElement.textContent = total;
           trElement.appendChild(thElement);
        }
        

       var  thElement=document.createElement('th');
            thElement.textContent = totalOfTotal;
            trElement.appendChild(thElement);
     }


     generateHeadRow();
     for (var i=0; i<allCities.length; i++){
         allCities[i].render();
     }
     generateFootRow();

     var storesToAdd = document.getElementById('dataentry')
     storesToAdd.addEventListener('submit', addStores);
     function addStores(event){
         
     }













     