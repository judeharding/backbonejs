
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// var Song = Backbone.Model.extend({
//     // defaults: {
//     //     genre: "Jazz"
//     // }
//
//     // validate: function(attrs){
//     //     if(!attrs.title)
//     //         return "Title is required";
//     // }
//
//     initialize: function(){
//         console.log("AS new song has been created.");
//     }
// });

// var song = new Song({
//     title: "Blue in Green",
//     artist: "Miles Davis",
//     publishYear: 1959
// });
//
//
// var Animal = Backbone.Model.extend({
//     walk: function(){
//         console.log("Animal walking...");
//     }
// });
//
// var Dog = Animal.extend({
//     walk: function(){
//         console.log("Dog walking...");
//     }
// });
//
// var dog = new Dog();
//
// dog.walk();



var Song = Backbone.Model.extend({
    urlRoot: "https://www.youtube.com/playlist?list=FLaIeuzzt5gYmtWssPT-LO6w"
});
