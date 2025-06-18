let catDiv = document.querySelector('.cat-container');

// Add two new cooooool cats to this array of objects
let cats = [{
  image_url: "https://ctl.s6img.com/society6/img/kAPciW3hQA6ukif3iKFlywvzKew/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/64310f12f3ab4becb301b4debf7c24f7/~~/wizard-cat5794700-prints.jpg",
  age: 2112,
  name: "meowerlin"
},
{
  image_url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTg1NTg5NG40ejFpcDY2bm45ZnB0YTFjczhmeThoMGxyMnAwdGwybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o0vwzuFwCGAFO/giphy.gif",
  age: 19,
  name: "Hacker Cat"
},
{
  image_url: "https://i.pinimg.com/564x/cd/cf/c6/cdcfc6a44fa8ac71072e9756abea5522.jpg",
  age: 29,
  name: "Rockstar Cat"
},
{
  image_url: "https://images.steamusercontent.com/ugc/1644340994747007967/853B20CD7694F5CF40E83AAC670572A3FE1E3D35/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  age: 35,
  name: "Sigma Cat"
},
{
  image_url: "https://static.displate.com/270x380/displate/2023-06-01/223be9f8eccefa8cc09e5de8495b3719_44285b86c3c11293120f7be853096240.jpg",
  age: 45,
  name: "Mafia Cat"
}
];


// This code is LAME and does not fit the cool
// cat aesthetic. Rewrite it to use a for each
// loop to render our cool cats to the DOM


cats.forEach(function(cat){
  let newCat = document.createElement('div');
  newCat.innerHTML = renderCat(cat);
  catDiv.appendChild(newCat);
})
function renderCat(cat) {
  return `
  <div class="catProfile">
    <div class="profile-pic">
      <img height="180" width="180" src="${cat.image_url}">
    </div>
    <div class="catInfo">
      <p><strong>Name: </strong>${cat.name}
      <p><strong>Age: </strong>${cat.age}
    </div>
  </div>
  `
}