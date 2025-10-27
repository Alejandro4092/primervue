import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App)
app.config.globalProperties.$filters = {
    //creamos dos metodos que reciban algo y devolveran un resultado
    mayuscula(data){
        return data.toUpperCase();
    },
    getNumeroDoble(numero){
        return numero*2;
    }
}
app.use(router)
.mount("#app")
