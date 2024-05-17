
// var btn = document.getElementById('helloBtn')

// // btn.addEventListener('click' , function(){
// //     alert('Hello Freinds')
// // })


// btn.addEventListener('mouseover' , function(){
//     btn.style.backgroundColor='pink'
//     btn.style.color='black'
// })

// btn.addEventListener('mouseout' , function(){
//     btn.style.backgroundColor='white'
//     btn.style.color='orange'
// })

var cow_img = document.getElementById('cow_img')

cow_img.addEventListener('mouseover' , function(){
    this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBqMkcGOEhF7GI2H8r2jdJHacQ8RXcNH4yYifbiAuaA&s'
})

cow_img.addEventListener('mouseout' , function(){
    this.src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgSiX67zVd_rMWrxXmr6cW0MuOvF56RdzlZINYq3xNg&s'
})

var cow_img2 = document.getElementById('cow_img2')

cow_img2.addEventListener('mouseover' , function(){
    cow_img.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvV7pR6CU4cBqm6nii-H4ahsB3kHOBG89BJ3FLNvFxSApvazXoMRVRPy1D9WF_2DrW6-3rLMAdkWq_FUDg17GUOYJjoCSDaF4V3-eVejMGSD1fJN0QBQHdsDPthGgGH8LJnzCLx8sBByhe/s1600/2013+Qurbani+Cows+%25282%2529-753457.jpeg'
})

cow_img2.addEventListener('mouseout' , function(){
    cow_img1.src= 'https://www.eidqurbani.com.pk/wp-content/uploads/2021/07/cow7.gif'
})

var cow_img3 = document.getElementById('cow_img3')

cow_img3.addEventListener('mouseover' , function(){
    cow_img.src='https://w7.pngwing.com/pngs/947/559/png-transparent-qurbani-beautiful-cow-thumbnail.png'
})

cow_img3.addEventListener('mouseout' , function(){
    cow_img1.src= 'https://w7.pngwing.com/pngs/947/559/png-transparent-qurbani-beautiful-cow-thumbnail.png'
})


var cow_img4 = document.getElementById('cow_img4')

cow_img4.addEventListener('mouseover' , function(){
    cow_img.src='https://onlinequrbani.pk/wp-content/uploads/2020/06/online-qurbani-cow-gaaye.jpg'
})

cow_img4.addEventListener('mouseout' , function(){
    cow_img1.src= 'https://onlinequrbani.pk/wp-content/uploads/2020/06/online-qurbani-cow-gaaye.jpg'
})