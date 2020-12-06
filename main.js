Vue.component ('students_component', {
    props: ['list'],
    template: '<ul><li v-for = "student in list">{{ student }}</li></ul>'
});
new Vue({
    el: '#app',
    data: {
        class_css: "black",
        current_fn: '',
        current_sn: '',
        student_list: []
    },
    methods: {
        add_student: function() {
            if(this.current_fn != '' && this.current_sn != ''){
                this.student_list.push(this.full_name)
            }
        }
    },
    computed: {
        full_name () {
            return this.current_fn+ ' ' + this.current_sn
        }
    }
});