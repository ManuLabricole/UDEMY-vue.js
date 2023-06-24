<template>
    <h2>My friends</h2>
    <new-friend></new-friend>
    <ul>
        <friend-contact
            v-for="friend in friends"
            :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone-number="friend.phone"
            :email-address="friend.email"
            :is-favorite="friend.isFavorite"
            @toggle-favorite="toggleFavoriteStatus"
        ></friend-contact>
    </ul>
</template>

<script>
export default {
    
    data() {
        return {
            friends: [
                {
                    id: 'Idbh2982376biejdededfUUID',
                    name: 'Manuel LaTlouelle',
                    phone: '0566272836',
                    email: 'manueél_latlouelle@gmail.com',
                    isFavorite: true
                },
                {
                    id: 'KJbedjneder666538ehjjUUID',
                    name: 'Julie Lawrence',
                    phone: '056eff72836',
                    email: 'julier@gmail.com',
                    isFavorite: false
                }
            ]
        }
    },
    methods: {
        toggleFavoriteStatus(friendId, friendName, friendIsFavorite) {
            const friend = this.friends.find(friend => friend.id === friendId);
            friend.isFavorite = !friend.isFavorite;
            console.log(friendId, friendName, friendIsFavorite);
        }
    },
};
</script>