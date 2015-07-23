angular.module('starter.services', [])

.factory('Chats', function() {
// Might use a resource here that returns a JSON array

// Some fake testing data
var chats = [{
  id: 0,
  name: 'Macys',
  lastText: 'Paradise Valley Mall',
  face: 'http://static.squarespace.com/static/50ebe3b6e4b0a5b2685e26ac/t/52ced2c2e4b0b2d0085a61af/1389286083164/macys-logo.png',
  iframeURL:'http://www.macys.com/'
}, {
  id: 1,
  name: 'Sears',
  lastText: 'Paradise Valley Mall',
  face: 'http://www.overlandparkheatingandcoolinginc.com/images/featured/sears.jpg'
}, {
  id: 2,
  name: 'J.Crew',
  lastText: 'Paradise Valley Mall',
  face: 'http://3e2rn51w31w0f6cvh1jkh9u48z.wpengine.netdna-cdn.com/wp-content/uploads/2013/11/jcrew_logo_transparent.png'
}, {
  id: 3,
  name: 'Home Depot',
  lastText: 'Paradise Valley Mall',
  face: 'http://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1000px-TheHomeDepot.svg.png'
}, 
{
  id: 4,
  name: 'Sports Authority',
  lastText: 'Paradise Valley Mall',
  face: 'http://2c2f06a14a9ade4267e6-fb8aac3b3bf42afe824f73b606f0aa4c.r92.cf1.rackcdn.com/tenantlogos/6125.png'
},
{
  id: 5,
  name: 'Dillards',
  lastText: 'Paradise Valley Mall',
  face: 'http://www.mallofthebluffs.com/wp-content/uploads/2013/09/Dillards-transparent-500x259.png'
},
{
  id: 6,
  name: 'JCPenny',
  lastText: 'Paradise Valley Mall',
  face: 'http://blogs-images.forbes.com/jonathansalembaskin/files/2013/02/J._C._Penney_logo2.png'
},
{
  id: 7,
  name: 'Lowes',
  lastText: 'Paradise Valley Mall',
  face: 'http://carolinashowcase.weebly.com/uploads/1/2/7/0/12706886/9064807_orig.png'
}];

return {
  all: function() {
    return chats;
  },
  remove: function(chat) {
    chats.splice(chats.indexOf(chat), 1);
  },
  get: function(chatId) {
    for (var i = 0; i < chats.length; i++) {
      if (chats[i].id === parseInt(chatId)) {
        return chats[i];
      }
    }
    return null;
  }
}
})

/**
* A simple example service that returns some data.
*/
.factory('Friends', function() {
// Might use a resource here that returns a JSON array

// Some fake testing data
var friends = [
{
 id : 1,
 name : 'Bak Bak Bar',
 notes : 'Koramangala, Bangalore',
 amount: '1890.00',
 tdate: '22-Jul-2015',
 tid: '01816563',
 face: 'http://www.bakasur.com/images/bakasur-logo.png',
 batch_num: '000632',
 roc_num: '009283',
 se10: '9827016676',
 appr_code: '68'
},
{
 id : 2,
 name : 'SPAR Hyper Market',
 notes : 'Koramangala, Bangalore',
 amount: '3110.87',
 tdate: '21-Jul-2015',
 tid: '01716463',
 face: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Spar-logo.svg/640px-Spar-logo.svg.png',
 batch_num: '001632',
 roc_num: '001233',
 se10: '1827006676',
 appr_code: '68'
},
{
 id : 3,
 name : 'Lifestyle',
 notes : 'Koramangala, Bangalore',
 amount: '670.71',
 tdate: '20-Jul-2015',
 tid: '06816563',
 face: 'https://upload.wikimedia.org/wikipedia/en/1/1c/This_is_the_logo_of_the_Lifestyle_Stores.jpg',
 batch_num: '000132',
 roc_num: '000983',
 se10: '9817016476',
 appr_code: '68'
},
{
 id : 4,
 name : 'Costa Coffee',
 notes : 'Koramangala, Bangalore',
 amount: '123.00',
 tdate: '20-Jul-2015',
 tid: '01816563',
 face: '',
 batch_num: '000532',
 roc_num: '010283',
 se10: '6827016676',
 appr_code: '68'
}
];


return {
  all: function() {
    return friends;
  },
  get: function(friendId) {
           for (var i = 0; i < friends.length; i++) {
             if (friends[i].id === parseInt(friendId)) {
               return friends[i];
             }
           }
           return null;
         }
}
})


.factory('Merchants', function() {
         // Might use a resource here that returns a JSON array
         
         // Some fake testing data
         var merchants = [
 {
 
id: 1,
 
name: 'SPAR Hyper Market',
 
address: '100ft Rd, Koramangala 4 Block, Koramangala, Bangalore',
 
latlong: '12.937795,77.627914',
 
face: 'img/gold.png',
 
phone: '919945578541'
 },
 {
 
id: 2,
 
name: 'Fitness First - Oasis Centre Mall',
 
address: '100ft Rd, Koramangala 4 Block, Koramangala, Bangalore',
 
latlong: '12.937795,77.627914',
 
face: 'img/fitness.png',
 
phone:'919986584535'
 },
 {
 
id: 3,
 
name: 'Lifestyle',
 
address: '100ft Rd, Koramangala 4 Block, Koramangala, Bangalore',
 
latlong: '12.937795,77.627914',
 
face: 'img/lifestyle.png',
 
phone:'918197721837'
 },
 {
 
id: 4,
 
name: 'Costa Coffee',
 
address: '5th Floor, Oasis Mall, 100ft Rd, Koramangala 4 Block, Koramangala, Bangalore',
 
latlong: '12.937795,77.627914',
 
face: 'img/costa.png',
 
phone:'919971877125'
 },
 {
 
id: 5,
 
name: 'Kanti Sweets',
 
address: '100ft Rd, Koramangala 4 Block, Koramangala, Bangalore',
 
latlong: '12.937795,77.627914',
 
face: 'img/kanti.png',
 
phone:'919632588018'
 }
];

        return {
         all: function() {
           return merchants;
         },
         remove: function(merchant) {
           merchants.splice(merchants.indexOf(merchant), 1);
         },
         get: function(merchantId) {
           for (var i = 0; i < merchants.length; i++) {
             if (merchants[i].id === parseInt(merchantId)) {
               return merchants[i];
             }
           }
           return null;
         }
       }
     })
;
