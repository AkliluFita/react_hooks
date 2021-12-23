export const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return{
                count: state.count +1, 
                showText:state.showText
            }
     
        case "CONTROL_TEXT":
                return{
                    count: state.count, 
                    showText:!state.showText
                }
    
        default:
            return state
         
    }
}
