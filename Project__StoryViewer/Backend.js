var storyStuff = [
    {
    dp:'https://images.unsplash.com/photo-1599571720388-1a7b15206466?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG5pa2UlMjBmb290YmFsbCUyMHNob2VzfGVufDB8fDB8fHww',
    story:'https://images.unsplash.com/photo-1614739947439-ad507bf07111?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
    dp:'https://images.unsplash.com/photo-1506079906501-adbb5907b720?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEFkaWRhcyUyMGZvb3RiYWxsJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
    story:'https://images.unsplash.com/photo-1612387049695-637b743f80ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fEFkaWRhcyUyMGZvb3RiYWxsJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
    dp:'https://images.unsplash.com/photo-1612387605285-7ee92eae6958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHB1bWElMjBmb290YmFsbCUyMHNob2VzfGVufDB8fDB8fHww',
    story:'https://images.unsplash.com/photo-1612387604233-0edcdccecf94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
    dp:'https://images.unsplash.com/photo-1511167814253-23b850fcd859?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1511426463457-0571e247d816?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
    dp:'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:'https://images.unsplash.com/photo-1551224197-50f10009befa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds'
    }
]

var storyHolderAdapter = '';
storyStuff.forEach(function(element, index){
    storyHolderAdapter+=
    `<div class="Story_card">
          <img
            class="Story_img"
            id="${index}"
            src="${element.dp}"
            alt=""
          />
        </div>`
})

// Set the adapter to the recyclerview of stories
document.querySelector('#RecyclerView_Stories').innerHTML= storyHolderAdapter;
document.querySelector('#RecyclerView_Stories').addEventListener('click', function(stuff){
     document.querySelector('#Story_Screen').style.display = 'block'
     document.querySelector('#Story_Screen').style.backgroundImage = `url(${storyStuff[stuff.target.id].story})`
    setTimeout(function(){
       document.querySelector('#Story_Screen').style.display = 'none'
    }, 3000)
});