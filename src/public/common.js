

const Common = {
    replaceParamVal:(paramName,replaceVal)=>{
        let oldUrl = window.location.href.toString();  
        let re= eval('/('+ paramName+'=)([^&]*)/gi');
        window.history.replaceState(null,null,oldUrl.replace(re,paramName+'='+replaceVal))
        
        
    }
}



export default Common