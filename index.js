let button=document.querySelector("#Sbutton");
let userData=[];
let pageNum=1;


// async function fetchdata(){
//   let APIkey="aa93e333";
//   let url=`http://www.omdbapi.com/?apikey=${APIkey}`;
//   try {
//     let res=await fetch(url);
//     let data=await res.json();
//     console.log(data);
//     displayMovie(data);
    
    
//   } catch (error) {
//     console.log(error);
//   }

// }
// fetchdata();
//pages direction



async function changePage(direction){
    console.log(direction);
    if(direction==="next"){
      pageNum++;
    }else if(direction==="prev"){
      pageNum--;
    }

    let APIkey="aa93e333";
    let url=`http://www.omdbapi.com/?apikey=${APIkey}&page=${pageNum}&limit=5`;


    try {
      let res=await fetch(url);
      let data=await res.json();

      if(data.Response==="True"){
        displayMovie(data.Search);
      }else{
         console.log("NO DATA FOUND");
        // document.querySelector(".details").innerHTML=`
        // <h1 style="color:black; ">NO DATA FOUND</h1>
        // `;
      }
      
    } catch (error) {
      console.log(error);
    }
}


async function displayMovie(data){
  // userData.push(data);
  console.log(data);
  let movieContainer=document.querySelector(".details");
  movieContainer.innerHTML=" ";
  //  userData.forEach((ele)=>{
  //      console.log(ele.Search);
       data.forEach((movie)=>{
        let movieele=document.createElement("div");
        movieele.classList.add("profile");
        movieele.innerHTML+=
        `
         
                <h1>Movie Title : ${movie.Title}</h1>
                <p>Year : ${movie.Year}</p>
                <img src="${movie.Poster}"  alt="${movie.Title}" height="300px">
                


                
        
        `;
        movieContainer.appendChild(movieele);
       })
      
       
    //  })
}
async function searchBar(value,pageNum){
    let APIkey="aa93e333";
    let url=`http://www.omdbapi.com/?apikey=${APIkey}&s=${value}&page=${pageNum}&limit=5`;


    try {
      let res=await fetch(url);
      let data=await res.json();

      if(data.Response==="True"){
        displayMovie(data.Search);
      }else{
        
      }
      
    } catch (error) {
      console.log(error);
    }
}
button?.addEventListener("click",()=>{
    let value=document.getElementById("search").value;
   
    searchBar(value,pageNum);
    document.getElementById("search").value=" ";
})