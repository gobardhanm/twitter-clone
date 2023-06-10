import { tweetsData } from './data.js'
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
})

document.addEventListener("click", function(e){
    // console.log(e.target.dataset.likes)
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})

function handleLikeClick(tweetId){
    // console.log(tweetId)
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
        // targetTweetObj.isLiked = false
    }
    else{
        targetTweetObj.likes++
        // targetTweetObj.isLiked = true     
    }

    targetTweetObj.isLiked = ! targetTweetObj.isLiked  // Boolean fliping

    render()
}

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
                            <i class="fa-regular fa-comment-dots" data-reply="${data.uuid}"></i>
                            ${data.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart" data-like="${data.uuid}"></i>
                            ${data.likes} 
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet" data-retweet="${data.uuid}"></i>
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

