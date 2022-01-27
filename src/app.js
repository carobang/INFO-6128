window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    
   document.getElementById("title").innerHTML="Titile: "+parsedUrl.searchParams.get('title');
   document.getElementById("text").innerHTML="Text: "+parsedUrl.searchParams.get('text');
   document.getElementById("url").innerHTML="Url: "+parsedUrl.searchParams.get('url');
  });