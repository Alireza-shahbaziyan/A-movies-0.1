<template>
    <HeaderDL :data="events"/>
    <h1 class="text-emerald-400">movie page</h1>
</template>
<script>

import HeaderDL from './HeaderDL.vue';
export default {
    name:"MovieView",
    components:{
        HeaderDL
    },
    data() {
        return {
            events:{"movie_id": 54692, "is_bookmark": false, "is_cinematic": false, "title": "The Lord of the Rings: The Rings of Power", "plot": "Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth", "year": 2022, "genres": ["dram", "action"], "rating": 8.6, "cover_image": "https://i.pinimg.com/564x/0e/84/f9/0e84f9e8a599778800db2c9cf5c58572.jpg", "banner_image": "https://i.pinimg.com/564x/34/1e/18/341e183dad7131f5567c3d0b1e2b3650.jpg", "commit": "Episode 2 added.", "files": [{"file_id": "oifohsoufhef", "post_id": 14, "seasion": 1, "episode": 1, "quality": "480", "is_sub": true, "is_dob": false}, {"file_id": "ahboajierogaer", "post_id": 15, "seasion": 1, "episode": 1, "quality": "720", "is_sub": false, "is_dob": true}, {"file_id": "oaiejofheuwfh", "post_id": 34, "seasion": 1, "episode": 2, "quality": "720", "is_sub": false, "is_dob": false}, {"file_id": "oiasuhdfouiwehf", "post_id": 96, "seasion": 1, "episode": 2, "quality": "1080", "is_sub": true, "is_dob": true}]}
        }
    },
    
}
</script>