<template>
    <section>
      <font size="6">プロジェクト作成</font><br><br>
        <b-field label="プロジェクトタイトル">
            <b-input v-model="title"></b-input>
        </b-field>

        <b-field label="プロジェクトの概要">
            <b-input maxlength="200" type="textarea" v-model="description"></b-input>
        </b-field>

        <b-field label="プロジェクトの詳細">
        <quill-editor v-model="editor" />
        </b-field>
        <b-button type="is-primary">次へ</b-button>
        <!-- <kiji :doc="editor"></kiji> -->
    </section>
</template>

<script>
import firebase from '~/plugins/firebase.js'
import Kiji from '~/components/Kiji';

export default {
    components: {
        Kiji
    },
    data() {
      return {
        title: '',
        description: '',
        editor: '',
      }
    },
    methods: {
        pushDatabase() {
            let fref = firebase.database().ref()
            // fref.push({ 
            //     title: title,
            //     description: description,
            //     document: editor,
            //     user: 
            // })

        }
    }
}
</script>


