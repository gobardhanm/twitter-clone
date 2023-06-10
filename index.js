import { tweetsData } from './data.js'
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
})

function getFeedHtml(){

    let feedHtml = ``

    tweetsData.forEach(function(data){
        feedHtml += 
        `<div class="tweet">
            <div class="tweet-inner">
                <img src="${data.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${data.handle}</p>
                    <p class="tweet-text">${data.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots"></i>
                            ${data.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart"></i>
                            ${data.likes} 
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet"></i>
                            ${data.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>`
        
        
    })
    return feedHtml
}

function render(){
    document.getElementById("feed").innerHTML = getFeedHtml()
}

render()


