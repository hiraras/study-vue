Vue.component('async-component', function(resolve, reject) {
    setTimeout(() => {
        resolve({
            template: `<p>成功</p>`,
        });
    }, 2000);
});