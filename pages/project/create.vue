<template>
    <section>
      <font size="6">プロジェクト作成</font><br><br>
        <b-field label="プロジェクトタイトル">
            <b-input value=""></b-input>
        </b-field>

        <b-field label="プロジェクトの概要"
            :label-position="labelPosition">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field>
        
        <b-field label="Q１．プロジェクトに支援者は必要か？">
            <b-checkbox v-model="checkboxCustom"
                true-value="Yes"
                false-value="No">
                {{ checkboxCustom }}
            </b-checkbox>
        </b-field><br>

        <b-field label="希望立地">
        <quill-editor v-model="editor" />
        </b-field>
        <b-button type="is-primary">次へ</b-button>
    </section>
</template>

<script>
export default {
    data() {
      return {
        checkboxCustom: 'No',
        editor: '',
      }
    }
}
</script>


