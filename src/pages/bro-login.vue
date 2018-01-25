<template>
<f7-block>
    <f7-block inner>
        <f7-block-title>пожалуйста, авторизуйтесь.</f7-block-title>
        <f7-list form id="id-auth-form" name="auth-form" v-on:submit.prevent="onSubmit">
            <f7-input type="hidden" name="AUTH_FORM" v-model="auth_form"></f7-input>
            <f7-input type="hidden" name="TYPE" v-model="type"></f7-input>
            <f7-input type="hidden" id="USER_REMEMBER_frm" name="USER_REMEMBER" v-model="user_remember"></f7-input>
            <f7-list-item>
                <f7-input name="USER_LOGIN" id="auth-form-login" v-model="login" placeholder="Логин / Email" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-input type="password" placeholder="Пароль" name="USER_PASSWORD" id="auth-form-password" v-model="password"></f7-input>
            </f7-list-item>

            <f7-list-item v-if="use_captcha">
                <img v-bind:src="captcha_src" />
                <f7-input type="text" name="captcha_word" id="auth-form-captcha_word" label="Введите код с картинки"  v-model="captcha_word"></f7-input>
                <input type="hidden" name="captcha_sid" v-model="captcha_sid" />
            </f7-list-item>
        </f7-list>

        <f7-list>
            <f7-list-button title="Войти" close-login-screen></f7-list-button>
            <!-- f7-list-label>
            <p>Click Sign In to close Login Screen</p>
            </f7-list-label -->
        </f7-list>
    </f7-block>
</f7-block>
</template>

<script>
export default {
    name: 'bro-login',
    data: function() {
        return {
        has_error: false,
        error: "",
        login: "",
        password: "",
        auth_form: "Y",
        type: "AUTH",
        user_remember: "Y",
        use_captcha: false,
        captcha_promt: "",
        captcha_word: "",
        captcha_src: ""
        };
    },
    methods: {
        onSubmit: function(event) {
        /*var form = BX.findChildren(BX(this.$el), { tagName: "input" }, true),
            request_data = {
            action: "auth"
            };

        for (i in form) {
            request_data[form[i].getAttribute("name")] = form[i].value;
        }

        FAPP.request.call(this, request_data, function(response) {
            if (typeof response.data.auth != "object") return;

            var data = response.data.auth;

            this.has_error = typeof data.error == "string" && data.error.length > 0;
            this.error = "";
            if (this.has_error) this.error = data.error;

            this.use_captcha = data.use_captcha;
            if (data.use_captcha) {
            this.captcha_src = data.captcha.src;
            this.captcha_sid = data.captcha.captcha_sid;
            }
        });*/
        }
    }
};
</script>