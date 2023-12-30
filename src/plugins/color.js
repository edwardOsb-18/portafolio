export default {
    install:(app,options)=>{
       app.config.globalProperties.$u="universitario" 
        app.directive("crema",{


beforeMount:(el,binding)=>{
el.style.color=options.color
console.log(binding.value)
if(binding.value==="sm"){
    el.style.background="green"
}


}

        })
    }
}