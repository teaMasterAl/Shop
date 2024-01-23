<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import ThePrice from "@/components/ThePrice.vue";
import {vMaska} from "maska"

export default {
  name: 'TheCheckout',
  directives: {
    maska: vMaska,
  },
  components: {
    ThePrice,
  },

  data () {
    return {
      nameError: false,
      phoneError: false,
      maskedPhone: '',
      bindObject: {
        unmasked: ''
      }
    }
  },

  computed: {
    ...mapState({
      deliveries: state => state.checkout.deliveries,
      deliveryId: state => state.checkout.deliveryId,
    }),
    ...mapGetters({
      getTotal: 'cart/getTotal',
      getTotalCount: 'cart/getTotalCount',
    }),
    phoneErrorText() {
      return this.phone ? 'Телефон должен содержать 11 цифр' : 'Телефон обязателен для заполнения'
    },
    morphProduct() {
      const array = ['товар', 'товара', 'товаров']
      return array[(this.getTotalCount % 100 > 4 && this.getTotalCount % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(this.getTotalCount % 10 < 5) ? this.getTotalCount % 10 : 5]];
    },
    name: {
      get() {
        return this.$store.state.checkout.name
      },
      set(val) {
        this.setName(val)
      },
    },
    phone: {
      get() {
        return this.$store.state.checkout.phone
      },
      set(val) {
        this.setPhone(val)
      },
    },
  },

  methods: {
    ...mapMutations({
      setName: 'checkout/SET_NAME',
      setPhone: 'checkout/SET_PHONE',
      setShow: 'checkout/SET_SHOW',
      setDelivery: 'checkout/SET_DELIVERY',
      clearProducts: 'cart/CLEAR_PRODUCTS',
    }),

    submitCheckout(){
      if(!this.name){
        this.nameError = true
      }
      if(!this.phone || this.phone.length !== 11){
        this.phoneError = true
      }

      if(!this.nameError && !this.phoneError){
        this.setShow(false)
        this.clearProducts()
        this.name = ''
        this.phone = ''
      }
    },

    checkName(){
      if(this.name){
        this.nameError = false
      }
    },

    checkPhone(){
      this.phone = this.bindObject.unmasked ? `7${this.bindObject.unmasked}` : '';
      if(this.phone.length === 11){
        this.phoneError = false
      }
    }

  }

}
</script>

<template>
    <div class="overlay" @click="setShow(false)"></div>
    <div class="checkout">
      <div class="checkout__description">
        В заказе {{getTotalCount}} {{morphProduct}} на сумму
        <ThePrice :amount="getTotal" />
      </div>
      <div class="checkout__form">
        <div class="checkout__field">
          <input class="checkout__form-input" placeholder="Имя*" v-model="name" @input="checkName">
          <div v-if="nameError" class="checkout__validate">Имя обязательно для заполнения</div>
        </div>
        <div class="checkout__field">
          <input
              class="checkout__form-input"
              placeholder="Телефон*"
              v-maska="bindObject"
              data-maska="+7 (###) ###-##-##"
              v-model="maskedPhone"
              @input="checkPhone"
          >
          <div v-if="phoneError" class="checkout__validate">{{phoneErrorText}}</div>
        </div>
        <div class="checkout__deliveries">
          <div
              v-for="delivery in deliveries"
              :key="delivery.id"
              class="checkout__deliveri-button"
              :class="{active: delivery.id === deliveryId }"
              @click="setDelivery(delivery.id)"
          >
            {{delivery.name}}
          </div>
        </div>
        <button class="checkout__button" @click="submitCheckout">Оформить</button>
      </div>
    </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  align-items: flex-end;
}

.checkout {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 16px 16px 0 0;
  background-color: #fff;
  width: 100%;
  padding: 32px 24px 20px;
}

.checkout__description {
  font-size: 14px;
  margin-bottom: 24px;
}

.checkout__field {
  position: relative;
  margin-bottom: 24px;
}

.checkout__form-input {
  background-color: #E4EBF0;
  border-radius: 12px;
  height: 48px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
}

.checkout__form-input:focus-visible {
  border: 1px solid #8654CC;
  background-color: #fff;
  box-shadow: 0 0 0 2px rgba(134, 84, 204, 0.2);
}

.checkout__form-input::placeholder {
  font-size: 14px;
  color: #16181A;
}

.checkout__validate{
  font-size: 11px;
  color: #FF0000;
}

.checkout__deliveries {
  width: 224px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E4EBF0;
  border-radius: 12px;
  margin-bottom: 24px;
}

.checkout__deliveri-button {
  padding: 4px 16px;
  font-size: 14px;
  cursor: pointer;
}

.checkout__deliveri-button.active {
  background-color: #fff;
  border-radius: 8px;
}

.checkout__button {
  background-color: #8654CC;
  border-radius: 24px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  height: 48px;
}
</style>
