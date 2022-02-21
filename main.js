



async function apiCall(url) {

try {
    var res=await fetch(url);
    var data=await res.json();
    return data;
    
} catch (error) {
     console.log("Error:",error)
}
    


}


function appendArticles(articles, main) {
    articles.forEach(function(ele){
        var div=document.createElement("div");
        var image=document.createElement("img");
        image.src=ele.urlToImage;
        var Title=document.createElement("p")
        Title.textContent=`Title: ${ele.title}`;
        var cont=document.createElement("p")
        cont.textContent=`Content :${ele.content}`;
        var dis=document.createElement("p")
        dis.textContent=`Description: ${ele.description}`;
        div.append(image,Title,cont,dis)
        div.onclick=()=>{
            localStorage.setItem("article",JSON.stringify(ele));
            window.location.href="news.html"
        }
        main.append(div)
    })
  


}

export { apiCall, appendArticles }