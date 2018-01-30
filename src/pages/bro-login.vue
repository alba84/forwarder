<template>
<f7-page>
    <f7-navbar title="Авторизация" back-link="Back" sliding></f7-navbar>
    <f7-block inner>
        <f7-block-title>Пожалуйста, авторизуйтесь.</f7-block-title>
        <form id="id-auth-form" name="auth-form" v-on:submit.prevent="onSubmit">
        <f7-list>
            <f7-list-item>
                <f7-input name="USER_LOGIN" id="auth-form-login" v-model="login" placeholder="Логин / Email" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-input type="password" placeholder="Пароль" name="USER_PASSWORD" id="auth-form-password" v-model="password"></f7-input>
            </f7-list-item>
            <input type="submit" class="button button-big" value="Войти">
        </f7-list>
        </form>

    </f7-block>
</f7-page>
</template>

<script>
import Vue from 'vue'

import User from '../class/user'

export default {
    name: 'bro-login',
    data: function() {
        return {
            has_error: false,
            error: "",
            login: "",
            password: "",
        };
    },
    methods: {
        onSubmit: function(event) {
            User.authorize(this, this.login, this.password, function(response){
                this.$store.dispatch('init')
            })
        }
    }
};
</script>