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
var friends = [{
  id: 0,
  name: 'Macys',
  notes: 'Paradise Valley Mall, Phoenix',
  amount: '103.89',
  tdate: 'March 20 2015',
  tid: 'xyz',
  face: 'http://static.squarespace.com/static/50ebe3b6e4b0a5b2685e26ac/t/52ced2c2e4b0b2d0085a61af/1389286083164/macys-logo.png'
}, {
  id: 1,
  name: 'Sears',
  amount: '1023.89',
  tdate: 'March 22 2015',
  tid: 'xysdz',
  notes: 'Paradise Valley Mall, Phoenix',
  face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
}, {
  id: 2,
  name: 'Andrew Jostlen',
  amount: '1023.89',
  tdate: 'March 20 2015',
  tid: 'xyz',
  notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
  face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
}, {
  id: 3,
  name: 'Adam Bradleyson',
  amount: '1023.89',
  tdate: 'March 20 2015',
  tid: 'xyz',
  notes: 'I think he needs to buy a boat',
  face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
}, {
  id: 4,
  name: 'Perry Governor',
  amount: '1023.89',
  tdate: 'March 20 2015',
  tid: 'xyz',
  notes: 'Just the nicest guy',
  face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
}];


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
          name: 'Punjab Grill',
          address: '1 SJR Primus  Ground Floor Opposite Forum Mall  7th Block Koramangala Bangalore',
          latlong: '',
          face: 'http://static.squarespace.com/static/50ebe3b6e4b0a5b2685e26ac/t/52ced2c2e4b0b2d0085a61af/1389286083164/macys-logo.png'
        },{
          id: 2,
          name: 'The Hole in the Wall Cafe',
          address: '4 8th Main Road 4th Block Koramangala Bangalore',
          latlong: '',
          face: 'http://static.squarespace.com/static/50ebe3b6e4b0a5b2685e26ac/t/52ced2c2e4b0b2d0085a61af/1389286083164/macys-logo.png'
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
