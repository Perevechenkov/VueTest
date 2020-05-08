Vue.component('modal', {
    template: ` 
 <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <slot name="header"></slot>
      </p>
      <button class="delete" aria-label="close" @click="$emit('close')"></button>
    </header>
    <section class="modal-card-body">
      <slot name="body">
      Default body
      </slot>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button" @click="$emit('close')">Cancel</button>
    </footer>
  </div>
</div>`,


})


new Vue({
    el: '#root',
    data:{
        isVisible: true
    },
    methods:{
        hide(){
            this.isVisible=false
        }
    }
});