# Twitter Clone

## What's we'll learn :-

    > .forEach()
    > CDNs (Content Delivery Networks)
        - add icons 
        - generate UUIDs
      ### What is CDN (Content DElivery Networks) ?
            - A remote service
            - Provides assets to web applications 
            - E.g: functions, styles, icons...
            - Gives us a snippet of code that will bring the asset into our application
    > textarea
    > data attributes 
    > conditionally render styles 
    > NOT operator (!)

# Js:

    > forEach() : (A method for iterating over arrays)

        Ex: 
            Datas.forEach(function(data){
                console.log(data.emoji)
            })

            - The parameter in that function represents each element in the array 

        Ex.2: (We can nest a forEach) :-

            characters.forEach(function(character){
            // console.log(character.powers) // [it's commented]
            character.powers.forEach(function(power){
                console.log(power)
            })

      **> We can add a second parameter "index" to get the index of that element.

        Ex.3: 
             
             characters.forEach(function(character, index){
    console.log(index, character.title)
})
# HTML:

    > textarea : (A multiline input field)

        Ex: 
            <textarea 
            placeholder="Ask me anything!" 
            id="chat-input"></textarea>

            - We have to keep the opening tag and closing tag together or it will the break the code.
            - There is a resizing button on the bottom right hand corner by default, we can disable it with a css property:- resize: none;
                Ex: 
                    textarea{
                        width: 239px;
                        height: 50px;
                        margin: 0px;
                        padding: 5px;
                        resize: none;
                    }

    > CDN fontawesome: 
        - First we have to link the "CDN fontawesome" link to html
        - Then we can search and add icons from "fontawesome" homepage

    > Data Attributes: (Storing extra information in HTML elements)

        Syntax: data-* (where * represent the name we give the data attribute)

            So,  data-unique-name = "your data"

        Ex: 
            <img class="img-large" data-size="2650*2650">
        
        Ex.2: 
            <i class="fa-solid fa-share" data-share="image-1"></i>

# CSS:

    >

# Mistakes:
    
    > Its ".length" not .length()
