

const Common = {
    replaceParamVal:(paramName, replaceVal)=>{
        let oldUrl = window.location.href.toString();  
        let re= eval('/('+ paramName+'=)([^&]*)/gi');
        window.history.replaceState(null,null,oldUrl.replace(re,paramName+'='+replaceVal))
        
        
    },
    isArray:(arg) => {
        if (typeof Array.isArray === "function") {
            return Array.isArray(arg); 
        }else{
            return Object.prototype.toString.call(arg) === '[object Array]';
        }
    }
  
}



export default Common