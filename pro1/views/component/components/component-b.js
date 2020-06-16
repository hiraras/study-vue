
Vue.component('component-b', {
    data: function() {
        return {

        };
    },
    mounted: function() {
        // 只是设置了一个监听，这段代码放在其他地方（如index.html）也能正确建立监听
        globalObj.$on('say', function(data) {
            console.log('this is component-b', data);
        });
    },
    template: '<p></p>'
});