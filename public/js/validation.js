function addBooks()                                    
{ 
    var book_title = document.forms["AddBooks"]["book_title"].value;               
    var genre = document.forms["AddBooks"]["genre"].value;               
    var author = document.forms["AddBooks"]["author"].value;  
    var image = document.forms["AddBooks"]["image"].value;  
   
    if (book_title == "")                                  
    { 
        alert("Please enter your book title"); 
        return false; 
    } 
   
    if (genre == "")                               
    { 
        alert("Please enter your genre"); 
        return false; 
    } 
    if (author == "")                                  
    { 
        alert("Please enter your author"); 
        return false; 
    } 
   
    if (image == "")                               
    { 
        alert("Please enter your image"); 
        return false; 
    } 
    alert("Sucessfully added the book "+ book_title);
}


function addAuthors()                                    
{ 
    var name = document.forms["AddAuthors"]["name"].value;               
    var dob = document.forms["AddAuthors"]["dob"].value;               
    var place = document.forms["AddAuthors"]["place"].value;  
    var image = document.forms["AddAuthors"]["image"].value;  
   
    if (name == "")                                  
    { 
        alert("Please enter Author name"); 
        return false; 
    } 
   
    if (dob == "")                               
    { 
        alert("Please enter dob"); 
        return false; 
    } 
    if (place == "")                                  
    { 
        alert("Please enter the place"); 
        return false; 
    } 
   
    if (image == "")                               
    { 
        alert("Please enter image"); 
        return false; 
    } 
    alert("Sucessfully added the author "+ name);
}