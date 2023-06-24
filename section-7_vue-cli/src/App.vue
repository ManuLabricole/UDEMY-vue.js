<template>
        <h2>My friends</h2>
        <ul>
            <friend-contact
                v-for="friend in friends"
                :key="friend.id"
                :name="friend.name"
                :phone-number="friend.phone"
                :email-address="friend.email"
                :is-favorite="friend.isFavorite"
                @toggle-favorite="toggleFavoriteStatus(friend.id)"
            ></friend-contact>
        </ul>
</template>

<script>
export default {
    
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel LaTlouelle',
                    phone: '0566272836',
                    email: 'manueél_latlouelle@gmail.com',
                    isFavorite: true
                },
                {
                    id: 'Julie',
                    name: 'Lawrence',
                    phone: '056eff72836',
                    email: 'julier@gmail.com',
                    isFavorite: false
                }
            ]
        }
    },
    methods: {
        toggleFavoriteStatus(friendId) {
            const friend = this.friends.find(friend => friend.id === friendId);
            friend.isFavorite = !friend.isFavorite;
            console.log(friend.name);
            console.log(friend.isFavorite);
        }
    },
};
</script>