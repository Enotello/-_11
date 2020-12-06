Vue.component ('student-list', {
    
}
)

new Vue({
    el: '#app',
    data: {
        class_css: "blue",
        current_fn,
        current_sn,
        student_list: []
    },
    methods: {
        add_student: function(value1, value2) {
            if(!value1 || !value2){
                alert('Вы не заполнили имя или фамилию!')
            }
            else{
                student_list.push(full_name)
            }
        }
    },
    computed: {
        full_name () {
            return current_fn.toString() + " " + current_sn.toString();
        }
    }
});