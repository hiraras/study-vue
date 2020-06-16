Vue.component('async-component', function(resolve, reject) {
    setTimeout(() => {
        resolve({
            template: `<p>成功,{{ value }}</p>`,
            data: function() {
                return {
                    value: 'wonderful!'
                }
            }
        });
    }, 2000);
});