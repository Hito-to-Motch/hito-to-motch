<template>
    <div class="chat">
        <section>
            <div class="chat_list">
                <div v-for="m in message" :key="m.key">
                    <div :class="m.style">{{m.id}}さん「{{m.message}}」</div>
                </div>
            </div>
        </section>
        <section>
            <div class="my_chat">
                <input v-model="my_message" type="text" placeholder="あなたのチャット">
                <button @click="mySend">送信する</button>
            </div>
            <div class="other_chat">
                <input v-model="other_message" type="text" placeholder="相手のチャット">
                <button @click="otherSend">送信する</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: [],
        }
    },
    methods:{
        mySend(){
            this.message.push({id:1, style:'my', message:this.my_message});
            this.my_message = ''
        },
        otherSend(){
            this.message.push({id:2, style:'other', message:this.other_message});
            this.other_message = ''
        }
    }
}
</script>

<style scoped>
.my{
    color:red;

}
.other{
    color: blue;
}
</style>