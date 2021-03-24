var app = new Vue({

    el: '#root',
    data: {
        message: 'Hello word!',
        photoSorce: " "
    },
    methods: {
        showImg: function(){
            this.photoSorce = "https://pbs.twimg.com/media/DIYJPGiUMAIKnTu.jpg"
        }
    }
   
});